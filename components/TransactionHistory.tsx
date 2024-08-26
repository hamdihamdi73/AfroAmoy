import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Alchemy, Network as AlchemyNetwork, AlchemySettings, AssetTransfersCategory } from "alchemy-sdk";
import {
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import {
  Flex,
  Text,
  Box,
  Link as ChakraLink,
  Button,
  Spinner,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { CLAIM_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";

type Transaction = {
  hash: string;
  from: string;
  to: string;
  value: string;
  asset: string;
  category: AssetTransfersCategory;
  timestamp: number;
};

const formatAmount = (value: string, decimals: number = 18) => {
  try {
    const parsedValue = BigInt(value);
    const divisor = BigInt(10 ** decimals);
    const wholePart = parsedValue / divisor;
    const fractionalPart = parsedValue % divisor;
    
    let formattedAmount = wholePart.toString();
    if (fractionalPart > 0) {
      formattedAmount += '.' + fractionalPart.toString().padStart(decimals, '0').slice(0, 6);
    }
    
    return parseFloat(formattedAmount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    });
  } catch (error) {
    console.error("Error formatting amount:", error);
    return "N/A";
  }
};

const TransactionRow: React.FC<{ transaction: Transaction; address: string | undefined }> = React.memo(({ transaction, address }) => {
  const getTransactionType = useCallback((category: Transaction['category'], to: string): string => {
    if (address && to.toLowerCase() === address.toLowerCase()) {
      return "Received";
    }
    switch (category) {
      case AssetTransfersCategory.EXTERNAL:
        return "Sent";
      case AssetTransfersCategory.ERC20:
        return "ERC20 Transfer";
      case AssetTransfersCategory.ERC721:
        return "NFT Transfer";
      case AssetTransfersCategory.ERC1155:
        return "ERC1155 Transfer";
      default:
        return "Unknown";
    }
  }, [address]);

  const formatDate = (timestamp: number) => {
    if (timestamp === 0) return 'N/A';
    return new Date(timestamp * 1000).toLocaleString(); // Multiply by 1000 to convert seconds to milliseconds
  };

  return (
    <Tr key={transaction.hash}>
      <Td>{getTransactionType(transaction.category, transaction.to)}</Td>
      <Td>{formatAmount(transaction.value)}</Td>
      <Td>{transaction.asset}</Td>
      <Td>{transaction.from.slice(0, 6)}...{transaction.from.slice(-4)}</Td>
      <Td>{transaction.to ? `${transaction.to.slice(0, 6)}...${transaction.to.slice(-4)}` : 'N/A'}</Td>
      <Td>{formatDate(transaction.timestamp)}</Td>
      <Td>
        <ChakraLink
          href={`https://www.oklink.com/amoy/tx/${transaction.hash}`}
          target="_blank"
          rel="noopener noreferrer"
          color="blue.500"
        >
          View
        </ChakraLink>
      </Td>
    </Tr>
  );
});

const TransactionHistoryPage: React.FC = () => {
  const { contract } = useContract(CLAIM_TOKEN_CONTRACT_ADDRESS, "token-drop");
  const { data: contractMetadata } = useContractMetadata(contract);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const transactionsPerPage = 10;
  const address = useAddress();

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      if (!address) {
        setError("Wallet address is undefined. Please connect your wallet.");
        return;
      }

      if (!process.env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
        setError("Alchemy API key is not set. Please check your environment variables.");
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        console.log("Fetching transaction history for address:", address);
        if (!process.env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
          throw new Error("Alchemy API key is not set");
        }

        const config: AlchemySettings = {
          apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
          network: AlchemyNetwork.MATIC_AMOY,
        };
        const alchemy = new Alchemy(config);

        console.log("Alchemy config:", {
          ...config,
          apiKey: config.apiKey ? "Set" : "Not set"
        });

        const transfers = await alchemy.core.getAssetTransfers({
          fromBlock: "0x0",
          toAddress: address,
          category: [
            AssetTransfersCategory.EXTERNAL,
            AssetTransfersCategory.ERC20,
            AssetTransfersCategory.ERC721,
            AssetTransfersCategory.ERC1155
          ],
        });

        console.log("Fetched transfers:", JSON.stringify(transfers, null, 2));

        console.log("Raw transfers data:", JSON.stringify(transfers, null, 2));

        const formattedTransactions: Transaction[] = transfers.transfers.map((tx) => ({
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          value: tx.value?.toString() || "0",
          asset: tx.asset || "MATIC",
          category: tx.category,
          timestamp: tx.metadata?.blockTimestamp 
            ? Math.floor(new Date(tx.metadata.blockTimestamp).getTime() / 1000)
            : 0,
        }));

        console.log("Formatted transactions:", formattedTransactions);

        // Sort transactions by timestamp in descending order (most recent first)
        const sortedTransactions = formattedTransactions.sort((a, b) => b.timestamp - a.timestamp);

        setTransactions(sortedTransactions);
        console.log("Set transactions:", sortedTransactions);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
        let errorMessage = "An unknown error occurred";
        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'object' && error !== null) {
          errorMessage = JSON.stringify(error);
        }
        console.error("Detailed error:", error);
        setError(`Failed to fetch transaction history: ${errorMessage}. Please check the console for more details.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionHistory();
  }, [address]);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    return transactions.slice(startIndex, endIndex);
  }, [transactions, currentPage, transactionsPerPage]);

  const totalPages = useMemo(() => Math.ceil(transactions.length / transactionsPerPage), [transactions.length, transactionsPerPage]);

  return (
    <Flex direction="column" align="center" p={4} width="100%" height="100%">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Transaction History</Text>
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      {isLoading ? (
        <Spinner size="xl" />
      ) : transactions.length === 0 ? (
        <Text>No transactions found. This could be due to no transactions or an issue with fetching the data.</Text>
      ) : (
        <Box overflowX="auto" width="100%">
          <Text mb={2}>Found {transactions.length} transactions</Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Asset</Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th>Date</Th>
                <Th>Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              {paginatedTransactions.map((transaction) => (
                <TransactionRow key={transaction.hash} transaction={transaction} address={address} />
              ))}
            </Tbody>
          </Table>
          <Flex justify="space-between" mt={4}>
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <Text>Page {currentPage} of {totalPages}</Text>
            <Button
              onClick={handleNextPage}
              disabled={
                transactions.length <= currentPage * transactionsPerPage
              }
            >
              Next
            </Button>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default TransactionHistoryPage;
