import React, { useEffect, useState } from "react";
import { Alchemy, Network, AssetTransfersCategory } from "alchemy-sdk";
import {
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import {
  Flex,
  Text,
  Box,
  SimpleGrid,
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
import styles from "../styles/TransactionHistory.module.css";
import { CLAIM_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";

type Transaction = {
  hash: string;
  from: string;
  to: string | null;
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
        const config = {
          apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
          network: Network.POLYGONZKEVM_TESTNET,
        };
        const alchemy = new Alchemy(config);

        const [fromData, toData] = await Promise.all([
          alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            fromAddress: address,
            category: [AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.INTERNAL, AssetTransfersCategory.ERC20],
          }),
          alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            toAddress: address,
            category: [AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.INTERNAL, AssetTransfersCategory.ERC20],
          })
        ]);

        const allTransfers = [...fromData.transfers, ...toData.transfers];

        const formattedTransactions: Transaction[] = allTransfers.map((tx) => ({
          hash: tx.hash,
          from: tx.from,
          to: tx.to ?? null,
          value: tx.value?.toString() || "0",
          asset: tx.asset || "MATIC",
          category: tx.category,
          timestamp: tx.blockTimestamp ? new Date(tx.blockTimestamp).getTime() : 0,
        }));

        // Sort transactions by timestamp in descending order (most recent first)
        const sortedTransactions = formattedTransactions.sort((a, b) => b.timestamp - a.timestamp);

        setTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionHistory();
  }, [address]);

  const getTransactionType = (category: AssetTransfersCategory, to: string | null): string => {
    if (to && address && to.toLowerCase() === address.toLowerCase()) {
      return "Received";
    } else if (category === AssetTransfersCategory.EXTERNAL) {
      return "Sent";
    } else if (category === AssetTransfersCategory.INTERNAL) {
      return "Internal";
    } else {
      return "Token Transfer";
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
        <Text>No transactions found.</Text>
      ) : (
        <Box overflowX="auto" width="100%">
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
                        href={`https://amoy.polygonscan.com/tx/${transaction.hash}`}
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
import React, { useEffect, useState } from "react";
import { Alchemy, Network, AssetTransfersCategory } from "alchemy-sdk";
import {
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import {
  Flex,
  Text,
  Box,
  SimpleGrid,
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
import styles from "../styles/TransactionHistory.module.css";
import { CLAIM_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";

type Transaction = {
  hash: string;
  from: string;
  to: string | null;
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
        const config = {
          apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
          network: Network.POLYGONZKEVM_TESTNET,
        };
        const alchemy = new Alchemy(config);

        const [fromData, toData] = await Promise.all([
          alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            fromAddress: address,
            category: [AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.INTERNAL, AssetTransfersCategory.ERC20],
          }),
          alchemy.core.getAssetTransfers({
            fromBlock: "0x0",
            toAddress: address,
            category: [AssetTransfersCategory.EXTERNAL, AssetTransfersCategory.INTERNAL, AssetTransfersCategory.ERC20],
          })
        ]);

        const allTransfers = [...fromData.transfers, ...toData.transfers];

        const formattedTransactions: Transaction[] = allTransfers.map((tx) => ({
          hash: tx.hash,
          from: tx.from,
          to: tx.to ?? null,
          value: tx.value?.toString() || "0",
          asset: tx.asset || "MATIC",
          category: tx.category,
          timestamp: tx.blockTimestamp ? new Date(tx.blockTimestamp).getTime() : 0,
        }));

        // Sort transactions by timestamp in descending order (most recent first)
        const sortedTransactions = formattedTransactions.sort((a, b) => b.timestamp - a.timestamp);

        setTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionHistory();
  }, [address]);

  const getTransactionType = (category: AssetTransfersCategory, to: string | null): string => {
    if (to && address && to.toLowerCase() === address.toLowerCase()) {
      return "Received";
    } else if (category === AssetTransfersCategory.EXTERNAL) {
      return "Sent";
    } else if (category === AssetTransfersCategory.INTERNAL) {
      return "Internal";
    } else {
      return "Token Transfer";
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
        <Text>No transactions found.</Text>
      ) : (
        <Box overflowX="auto" width="100%">
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
                        href={`https://amoy.polygonscan.com/tx/${transaction.hash}`}
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
