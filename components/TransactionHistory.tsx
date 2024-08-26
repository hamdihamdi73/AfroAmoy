import React, { useEffect, useState } from "react";
import { Alchemy, Network as AlchemyNetwork, AssetTransfersCategory, AssetTransfersResult } from "alchemy-sdk";
import {
  useAddress,
  useContract,
  useContractMetadata,
  useTokenBalance,
} from "@thirdweb-dev/react";
import {
  Heading,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Link as ChakraLink,
  Button,
  Spinner,
} from "@chakra-ui/react";
import styles from "../styles/TransactionHistory.module.css";
import { CLAIM_TOKEN_CONTRACT_ADDRESS, TRANSFER_CONTRACT_ADDRESS, FEE_TOKEN_ADDRESS, CFA_TOKEN_CONTRACT_ADDRESS, USDA_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";

type Transaction = {
  hash: string;
  from: string;
  to: string;
  value: string;
  asset: string | null;
  category: AssetTransfersCategory;
  timestamp: number;
  decimals: number;
};

const formatAmount = (value: string, decimals: number) => {
  try {
    const parsedValue = BigInt(value);
    const divisor = BigInt(10 ** decimals);
    const wholePart = parsedValue / divisor;
    return wholePart.toString();
  } catch (error) {
    console.error("Error formatting amount:", error);
    return "0";
  }
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

      if (!process.env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
        console.error("Alchemy API key is not set.");
        return;
      }

      setIsLoading(true);

      try {
        const config = {
          apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
          network: AlchemyNetwork.MATIC_AMOY,
        };
        const alchemy = new Alchemy(config);

        const transfers: AssetTransfersResult = await alchemy.core.getAssetTransfers({
          fromBlock: "0x0",
          toAddress: address,
          category: [
            AssetTransfersCategory.EXTERNAL,
            AssetTransfersCategory.ERC20,
            AssetTransfersCategory.ERC721,
            AssetTransfersCategory.ERC1155
          ],
        });

        const tokenBalances = await alchemy.core.getTokenBalances(address);

        const formattedTransactions: Transaction[] = await Promise.all(transfers.transfers.map(async (tx) => {
          let asset = tx.asset;
          let decimals = 18; // Default to 18 decimals for MATIC
          
          if (tx.rawContract && tx.rawContract.address) {
            const tokenAddress = tx.rawContract.address.toLowerCase();
            if (tokenAddress === CLAIM_TOKEN_CONTRACT_ADDRESS.toLowerCase()) {
              asset = "EURA";
              decimals = 18;
            } else if (tokenAddress === FEE_TOKEN_ADDRESS.toLowerCase()) {
              asset = "mamaDo";
              decimals = 18;
            } else if (tokenAddress === CFA_TOKEN_CONTRACT_ADDRESS.toLowerCase()) {
              asset = "CFA";
              decimals = 18;
            } else if (tokenAddress === USDA_TOKEN_CONTRACT_ADDRESS.toLowerCase()) {
              asset = "USDA";
              decimals = 18;
            } else {
              const tokenMetadata = await alchemy.core.getTokenMetadata(tokenAddress);
              asset = tokenMetadata.symbol || asset;
              decimals = tokenMetadata.decimals || 18;
            }
          } else if (!asset) {
            asset = "MATIC";
          }
          
          return {
            hash: tx.hash,
            from: tx.from,
            to: tx.to || "",
            value: tx.value?.toString() || "0",
            asset: asset || "MATIC",
            category: tx.category,
            timestamp: tx.metadata?.blockTimestamp 
              ? Math.floor(new Date(tx.metadata.blockTimestamp).getTime() / 1000)
              : 0,
            decimals: decimals,
          };
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

  const getTransactionType = (category: AssetTransfersCategory, to: string): string => {
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
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Flex direction="column" align="center" p={4} width="100%" height="100%">
      <Heading mb={4}>Transaction History</Heading>
      {isLoading ? (
        <Spinner size="xl" />
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
                        styles[
                          getTransactionType(
                            transaction.category,
                            transaction.to
                          )
                        ]
                      }`}
                    />
                    <Text ml={2} fontSize={["xs", "sm"]} whiteSpace="nowrap">
                      {getTransactionType(
                        transaction.category,
                        transaction.to
                      )}
                    </Text>
                  </Flex>
                  <Flex direction="column" alignItems="left" textAlign="left">
                    <div>
                      <span className={styles.label}>Transaction ID:</span>
                      <br />
                      <ChakraLink
                        fontSize={["xs", "sm"]}
                        isTruncated
                        href={`https://amoy.polygonscan.com/tx/${transaction.hash}`}
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
                        {formatAmount(transaction.value, transaction.decimals)}{" "}
                        <b>{transaction.asset}</b>
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>To:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {transaction.to}
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>From:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {transaction.from === "0x0000000000000000000000000000000000000000"
                          ? "Contract Creation"
                          : transaction.from}
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>Date:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {transaction.timestamp === 0
                          ? "Date not available"
                          : new Date(transaction.timestamp * 1000).toLocaleString(
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
