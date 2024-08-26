import { Box, Text } from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useTokenBalance,
  useContractMetadata,
} from "@thirdweb-dev/react";
import styles from "../styles/CashInOutForm.module.css";
import { useEffect, useState } from "react";

type Props = {
  tokenAddress: string;
};

export default function TokenBalance({ tokenAddress }: Props) {
  const address = useAddress();
  const { contract } = useContract(tokenAddress);

  const { data: contractMetadata, isLoading: isContractMetadataLoading } =
    useContractMetadata(contract);
  const { data: tokenBalance, isLoading: isTokenBalanceLoading } =
    useTokenBalance(contract, address);

  // Function to format the number with commas
  const formatNumberWithCommas = (value: string | number | undefined) => {
    if (typeof value === "string") {
      value = parseFloat(value);
    }
    if (typeof value === "number" && !isNaN(value)) {
      return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return "";
  };

  return (
    <Box mt={4} className={styles.tokenBalance}>
      {!isTokenBalanceLoading && tokenBalance !== undefined && (
        <Text>
          Balance: {formatNumberWithCommas(tokenBalance.displayValue)}{" "}
          {contractMetadata?.symbol}
        </Text>
      )}
    </Box>
  );
}
import { useEffect, useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import { ethers } from "ethers";

type Props = {
  tokenAddress: string;
};

export default function TokenBalance({ tokenAddress }: Props) {
  const { contract: transferContract } = useContract(TRANSFER_CONTRACT_ADDRESS);
  const { data: tokenSupply } = useContractRead(transferContract, "getTokenSupply", [tokenAddress]);
  const { data: tokenSymbol } = useContractRead(transferContract, "getTokenSymbol", [tokenAddress]);
  const [formattedSupply, setFormattedSupply] = useState<string>("0");

  useEffect(() => {
    if (tokenSupply) {
      setFormattedSupply(ethers.utils.formatUnits(tokenSupply, 18));
    }
  }, [tokenSupply]);

  return (
    <div>
      <p>Balance: {formattedSupply} {tokenSymbol || ""}</p>
    </div>
  );
}
