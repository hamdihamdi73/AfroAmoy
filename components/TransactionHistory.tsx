import React, { useEffect, useState } from "react";
import { Alchemy, Network, AlchemySettings, AssetTransfersCategory } from "alchemy-sdk";
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
  const parsedValue = BigInt(value);
  const formattedAmount = Number(parsedValue) / 10 ** decimals;
  return formattedAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  });
};

const TransactionHistoryPage: React.FC = () => {
  const { contract } = useContract(CLAIM_TOKEN_CONTRACT_ADDRESS, "token-drop");
  const { data: contractMetadata } = useContractMetadata(contract);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const transactionsPerPage = 10;
  const address = useAddress();

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      if (!address) {
        console.error("Wallet address is undefined.");
        return;
      }

      setIsLoading(true);

      try {
        console.log("Fetching transaction history for address:", address);
        const config: AlchemySettings = {
          apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
          network: Network.MATIC_MAINNET, // Use MATIC_MAINNET as Amoy is not directly supported
          customNetwork: {
            rpcUrl: "https://rpc-amoy.polygon.technology",
            chainId: 80002,
          },
        };
        const alchemy = new Alchemy(config);

        console.log("Alchemy config:", config);

        const transfers = await alchemy.core.getAssetTransfers({
          fromBlock: "0x0",
          toAddress: address,
          category: [
            AssetTransfersCategory.EXTERNAL,
            AssetTransfersCategory.INTERNAL,
            AssetTransfersCategory.ERC20,
            AssetTransfersCategory.ERC721,
            AssetTransfersCategory.ERC1155
          ],
        });

        console.log("Fetched transfers:", transfers);

        const formattedTransactions: Transaction[] = transfers.transfers.map((tx) => ({
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          value: tx.value?.toString() || "0",
          asset: tx.asset || "MATIC",
          category: tx.category,
          timestamp: tx.metadata.blockTimestamp ? new Date(tx.metadata.blockTimestamp).getTime() : 0,
        }));

        console.log("Formatted transactions:", formattedTransactions);

        // Sort transactions by timestamp in descending order (most recent first)
        const sortedTransactions = formattedTransactions.sort((a, b) => b.timestamp - a.timestamp);

        setTransactions(sortedTransactions);
        console.log("Set transactions:", sortedTransactions);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionHistory();
  }, [address]);

  const getTransactionType = (category: Transaction['category'], to: string): string => {
    if (address && to.toLowerCase() === address.toLowerCase()) {
      return "Received";
    }
    switch (category) {
      case AssetTransfersCategory.EXTERNAL:
        return "Sent";
      case AssetTransfersCategory.INTERNAL:
        return "Internal";
      case AssetTransfersCategory.ERC20:
        return "ERC20 Transfer";
      case AssetTransfersCategory.ERC721:
        return "NFT Transfer";
      case AssetTransfersCategory.ERC1155:
        return "ERC1155 Transfer";
      default:
        return "Unknown";
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Flex direction="column" align="center" p={4} width="100%" height="100%">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Transaction History</Text>
      {isLoading ? (
        <Spinner />
      ) : transactions.length === 0 ? (
        <Text>No transactions found. (Transactions length: {transactions.length})</Text>
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
              {transactions
                .slice(
                  (currentPage - 1) * transactionsPerPage,
                  currentPage * transactionsPerPage
                )
                .map((transaction) => (
                  <Tr key={transaction.hash}>
                    <Td>{getTransactionType(transaction.category, transaction.to)}</Td>
                    <Td>{formatAmount(transaction.value)}</Td>
                    <Td>{transaction.asset}</Td>
                    <Td>{transaction.from.slice(0, 6)}...{transaction.from.slice(-4)}</Td>
                    <Td>{transaction.to ? `${transaction.to.slice(0, 6)}...${transaction.to.slice(-4)}` : 'N/A'}</Td>
                    <Td>{new Date(transaction.timestamp).toLocaleString()}</Td>
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
                ))}
            </Tbody>
          </Table>
          <Flex justify="space-between" mt={4}>
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <Text>Page {currentPage}</Text>
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
