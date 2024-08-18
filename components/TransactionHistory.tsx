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
  const transactionsPerPage = 5;
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
          network: Network.MATIC_MUMBAI,
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
      return "received";
    } else if (category === AssetTransfersCategory.EXTERNAL) {
      return "transfer";
    } else if (category === AssetTransfersCategory.INTERNAL) {
      return "internal";
    } else {
      return "token";
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
      {isLoading ? (
        <Spinner />
      ) : transactions.length === 0 ? (
        <Text>No transactions found.</Text>
      ) : (
        <Box overflowX="auto" width="100%">
          <SimpleGrid columns={[1]} spacing={4}>
            {transactions
              .slice(
                (currentPage - 1) * transactionsPerPage,
                currentPage * transactionsPerPage
              )
              .map((transaction) => (
                <Box
                  key={transaction.hash}
                  className={styles.transactionItem}
                >
                  <Flex
                    className={styles.indicatorContainer}
                    align="center"
                    mb={2}
                  >
                    <span
                      className={`${styles.indicator} ${
                        styles[getTransactionType(transaction.category, transaction.to)]
                      }`}
                    />
                    <Text ml={2} fontSize={["xs", "sm"]} whiteSpace="nowrap">
                      {getTransactionType(transaction.category, transaction.to)}
                    </Text>
                  </Flex>
                  <Flex direction="column" alignItems="left" textAlign="left">
                    <div>
                      <span className={styles.label}>Transaction ID:</span>
                      <br />
                      <ChakraLink
                        fontSize={["xs", "sm"]}
                        isTruncated
                        href={`https://www.oklink.com/amoy/tx/${transaction.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="blue.500"
                        textDecoration="underline"
                      >
                        Show Transaction Details
                      </ChakraLink>
                    </div>
                    <div>
                      <span className={styles.label}>Amount:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {formatAmount(transaction.value)}{" "}
                        <b>{transaction.asset}</b>
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>To UID:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {transaction.to}
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>From UID:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {transaction.from}
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>Date:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {new Date(transaction.timestamp).toLocaleString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            hour12: true,
                          }
                        )}
                      </Text>
                    </div>
                  </Flex>
                </Box>
              ))}
          </SimpleGrid>
          <Flex justify="space-between" mt={4}>
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </Button>
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
