import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import "/styles/global.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PolygonAmoyTestnet as polygonAmoy } from "@thirdweb-dev/chains";

const factoryAddress = process.env.CREST_SMARTWALLET_FACTORY_ADDRESS as string;
const clientAPI = process.env.THIRDWEB_API_KEY as string;
const smartWalletOptions = {
  factoryAddress: factoryAddress,
  gasless: true,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={polygonAmoy} // Use the custom chain
      clientId={clientAPI}
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletOptions),
        smartWallet(coinbaseWallet(), smartWalletOptions),
        smartWallet(walletConnect(), smartWalletOptions),
        smartWallet(localWallet(), smartWalletOptions),
        smartWallet(
          embeddedWallet({
            recommended: true,
            auth: {
              options: ["email", "google", "apple", "facebook"],
            },
          }),
          smartWalletOptions
        ),
        smartWallet(trustWallet(), smartWalletOptions),
      ]}
    >
      <ChakraProvider>
        <Head>
          <title>
            AfroDoge - A Meme Coin For Africa Freedom, Your Secure Financial Wallet for Easy Transactions
          </title>
          <meta
            name="description"
            content="Experience the security and convenience of AfroDoge  – your trusted financial companion for seamless fund storage, transfers, and receipts."
          />
          <meta
            property="og:title"
            content="AfroDoge - Your Secure Financial Wallet for Easy Transactions"
          />
          <meta
            property="og:description"
            content="Experience the security and convenience of AfroDoge – your trusted financial companion for seamless fund storage, transfers, and receipts."
          />
          <meta property="og:image" content="/public/metadata.png" />
          <meta property="og:url" content="https://AfroDoge.com" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="AfroDoge - Your Secure Financial Wallet for Easy Transactions"
          />
          <meta
            name="twitter:description"
            content="Experience the security and convenience of AfroDoge – your trusted financial companion for seamless fund storage, transfers, and receipts."
          />
          <meta name="twitter:image" content="/public/metadata.png" />
          <meta name="twitter:url" content="https://AfroDoge.com" />
        </Head>

        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <SpeedInsights />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
