# vercel.json

```json
{
    "rewrites": [
        {"source": "/(.*)", "destination": "/"}
    ]
}
```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

```

# README.md

```md
# AfroDoge

## Introduction

Welcome to AfroDoge, a blockchain-powered ecosystem that aims to enhance the traditional economy through tokenization and the implementation of real-world assets (RWA). AfroDoge is designed to be a transparent, secure, and affordable platform, with a primary focus on revolutionizing international remittance services.

## Features

- **Tokenization:** Unlock the potential of real-world assets by tokenizing them on the blockchain.
- **International Remittance:** Seamless and cost-effective cross-border transactions using blockchain technology.
- **Decentralized Finance (DeFi):** Explore a comprehensive financial ecosystem with features like trade finance, crowdfunding, and decentralized finance applications.

## Getting Started

To get started with AfroDoge, follow these steps:

1. **Installation:** Clone the repository and install the necessary dependencies.

   \`\`\`bash
   git clone https://github.com/AfroDoge-project/AfroDoge.git
   cd AfroDoge
   yarn install
   \`\`\`

1. Configuration: Configure your settings and API keys in the ``.env``.

   \`\`\`
   CREST_SMARTWALLET_FACTORY_ADDRESS=
   THIRDWEB_API_KEY=
   COVALENT_API_KEY=
   AWS_RECEIPIENT_EMAIL=
   AWS_ACCESS_KEY_ID=
   AWS_SECRET_ACCESS_KEY=
   AWS_REGION=

   \`\`\`

2. Run AfroDoge: Launch AfroDoge on your local environment.

\`\`\`
npm run dev
\`\`\`
3. Explore the Documentation: Visit our documentation for in-depth information on using AfroDoge.

## Toolkits

- **thirdweb:** The complete web3 development toolkit. [More info](https://thirdweb.com/)
- **Covalent:** A single, unified API for fast, scalable historical blockchain data across 200+ chains. [More info](https://www.covalenthq.com/)
- **AWS SES:** A cloud-based email service provider that can integrate into any application for high volume email automation. [More info](https://aws.amazon.com/ses/)



Moreover, the utilization of these smart contracts and code must adhere to applicable laws. Nothing in this repository should be construed as investment advice or legal guidance for any specific facts or circumstances. It is not a substitute for competent counsel. For any questions or concerns, it is strongly recommended to seek advice from a reputable attorney in your jurisdiction.

AfroDoge disclaims all liability for the use of the foregoing, and users are advised to exercise caution and proceed at their own risk.
```

# package.json

```json
{
  "name": "afrodoge",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next export",
    "deploy": "next build && next export && npx thirdweb@latest upload out"
  },
  "dependencies": {
    "@chakra-ui/react": "^2.8.1",
    "@covalenthq/client-sdk": "^1.0.2",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@thirdweb-dev/react": "^4.6.22",
    "@thirdweb-dev/sdk": "^4.0.99",
    "@thirdweb-dev/tsconfig": "^0.1.7",
    "@thirdweb-dev/wallets": "^2.1.10",
    "@types/dom-to-image": "^2.6.7",
    "@types/dotenv": "^8.2.0",
    "@types/nodemailer": "^6.4.14",
    "@types/react-dom": "^18.3.0",
    "@types/resolve": "^1.20.6",
    "@vercel/speed-insights": "^1.0.2",
    "ai-digest": "^1.0.5",
    "aws-sdk": "^2.1524.0",
    "dotenv": "^16.3.1",
    "ethers": "5",
    "framer-motion": "^10.12.16",
    "global": "^4.4.0",
    "html2canvas": "^1.4.1",
    "html5-qrcode": "^2.3.8",
    "next": "^14.2.5",
    "next-pwa": "^5.6.0",
    "next-qrcode": "^2.5.1",
    "nodemailer": "^6.9.11",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^4.12.0",
    "react-router-dom": "^6.20.1",
    "react-toastify": "^9.1.3"
  },
  "devDependencies": {
    "@types/node": "^18.11.11",
    "@types/react": "^18.3.3",
    "eslint": "^8.29.0",
    "eslint-config-next": "^14.2.5",
    "typescript": "^4.9.4"
  }
}

```

# next.config.js

```js
module.exports = {
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    THIRDWEB_API_KEY: process.env.THIRDWEB_API_KEY,
    CREST_SMARTWALLET_FACTORY_ADDRESS: process.env.CREST_SMARTWALLET_FACTORY_ADDRESS,
    COVALENT_API_KEY: process.env.COVALENT_API_KEY,
    AWS_RECEIPIENT_EMAIL: process.env.AWS_RECEIPIENT_EMAIL,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    SERVICE_PROVIDER: process.env.SERVICE_PROVIDER,
    USER_EMAIL: process.env.USER_EMAIL,
    USER_PASS: process.env.USER_PASS,
    PORT: process.env.PORT,
  },
};

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```


# html2canvas.d.ts

```ts
declare module 'html2canvas';
```

# CONTRIBUTING.md

```md
# Contributing to AfroDoge

Thank you for considering contributing to AfroDoge! We appreciate your time and effort to help improve the project. Before contributing, please take a moment to review this document for guidelines and best practices.





[homepage]: [https://www.contributor-covenant.org](https://www.contributor-covenant.org)

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# typescript
*.tsbuildinfo
.env
.env.local

```

# .gitattributes

```
# Auto detect text files and perform LF normalization
* text=auto

```

# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# public\user-icon.png

This is a binary file of the type: Image

# public\thirdweb_horizontal_logo.png

This is a binary file of the type: Image

# public\thirdweb.svg

This is a file of the type: SVG Image

# public\metadata.png

This is a binary file of the type: Image

# public\manifest.json

```json
{
    "theme_color": "#127a04",
    "background_color": "#120901",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "name": "AfroDoge Wallet",
    "short_name": "AfroDoge",
    "icons": [
        {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

# public\icon-512x512.png

This is a binary file of the type: Image

# public\icon-384x384.png

This is a binary file of the type: Image

# public\icon-256x256.png

This is a binary file of the type: Image

# public\icon-192x192.png

This is a binary file of the type: Image

# public\GoshenDAONFT.png

This is a binary file of the type: Image

# public\Goshen Horizontal With Color.png

This is a binary file of the type: Image

# public\favicon.ico

This is a binary file of the type: Binary

# public\crest_icon_logo_colored_nobg.png

This is a binary file of the type: Image

# public\crest_horizontal_logo_black_nobg.png

This is a binary file of the type: Image

# public\baby_africain_dog_meme_coin-removebg.png

This is a binary file of the type: Image

# public\afrodoge.jpg

This is a binary file of the type: Image

# public\1Goshen Horizontal With Color.png

This is a binary file of the type: Image

# public\1favicon.ico

This is a binary file of the type: Binary

# public\1Afrodoge_horizontal_logo_black_nobg.png

This is a binary file of the type: Image

# pages\_documents.tsx

```tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

# pages\_app.tsx

```tsx
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

```

# pages\withdraw.tsx

```tsx
import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import WithdrawNow from "../components/WithdrawNow";

const WithdrawalPage = () => {
  return (
    <Container maxW="full" p={[4, 6]}>
      <Flex direction="column" align="center" justify="center">
        <WithdrawNow />
      </Flex>
    </Container>
  );
};

export default WithdrawalPage;

```

# pages\transfer.tsx

```tsx
import { Container, Flex, Box } from "@chakra-ui/react";
import TransferCard from "../components/TransferCard";

export default function TransferPage() {
  return (
    <Box
      minH="100vh"
      bg="url(your-background-image.jpg)"
      backgroundSize="cover"
    >
      <Container maxW={"1440px"}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          backdropFilter="blur(10px)" // Adjust the blur strength as needed
        >
          <TransferCard />
        </Flex>
      </Container>
    </Box>
  );
}

```

# pages\services.tsx

```tsx
// pages/services.tsx

import React from "react";
import { NextPage } from "next";
import {
  Container,
  Heading,
  Grid,
  GridItem,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  FaCode,
  FaMobileAlt,
  FaCube,
  FaProjectDiagram,
  FaLock,
  FaBullhorn,
  FaGlobe,
  FaEye,
  FaLightbulb,
} from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const Services: NextPage = () => {
  const services: Service[] = [
    {
      title: "Web Development",
      description: "Create stunning websites and web applications.",
      icon: <FaCode />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "Mobile Development",
      description: "Build mobile applications for iOS and Android.",
      icon: <FaMobileAlt />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "Metaverse Development",
      description: "Build immersive experiences in the metaverse.",
      icon: <FaGlobe />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "Blockchain Development",
      description: "Develop decentralized applications (DApps).",
      icon: <FaCube />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "NFT Project Development",
      description: "Create and launch NFT projects.",
      icon: <FaProjectDiagram />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "Smart Contract Auditing",
      description: "Audit and secure smart contracts.",
      icon: <FaLock />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "Blockchain Security",
      description: "Enhance security in blockchain applications.",
      icon: <FaLock />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "Web3 Marketing",
      description: "Promote projects in the Web3 space.",
      icon: <FaBullhorn />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
    {
      title: "Web3 Consultation",
      description: "Consultation on Web3 technologies.",
      icon: <FaEye />,
      link: "https://services.AfroDoge.com", // Add your link here
    },
  ];

  return (
    <Container maxW="800px" mt={10}>
      <Heading as="h1" mb={6}>
        Our Services
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {services.map((service, index) => (
          <GridItem key={index}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              height="200px"
              width="100%"
              textAlign="center"
              cursor="pointer"
              transition="background 0.3s ease-in-out"
              _hover={{
                background: "teal.500",
                color: "white",
              }}
            >
              {service.icon}
              <Heading as="h3" size="md" my={2}>
                {service.title}
              </Heading>
              <Text>{service.description}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

```

# pages\privacy-policy.tsx

```tsx
// pages/privacy-policy.tsx

import React from "react";
import { NextPage } from "next";
import {
  Container,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";

const PrivacyPolicy: NextPage = () => {
  return (
    <Container maxW="800px" mt={10}>
      <Heading as="h1" mb={6}>
        Privacy Policy
      </Heading>
      <VStack align="start" spacing={4}>
        <Text>
          Your privacy is important to us. It is AfroDoge&apos;s policy to
          respect your privacy regarding any information we may collect from you
          across our website,{" "}
          <ChakraLink
            href="https://www.AfroDoge.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.AfroDoge.com
          </ChakraLink>
          , and other sites we own and operate.
        </Text>
        <Text>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </Text>
        <Text>
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use, or
          modification.
        </Text>
        <Text>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </Text>
        <Text>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites and cannot accept responsibility or liability for their
          respective privacy policies.
        </Text>
        <Text>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </Text>
        <Text>
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to{" "}
          <ChakraLink href="mailto:contact@AfroDoge.com">
            contact us
          </ChakraLink>
          .
        </Text>
      </VStack>
    </Container>
  );
};

export default PrivacyPolicy;

```

# pages\index.tsx

```tsx
import type { NextPage } from "next";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import { MediaRenderer, ConnectWallet } from "@thirdweb-dev/react";
import { FEATURES_IMAGE_URL, HERO_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"} p={4}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: 2, md: 10 }}
        py={8}
        borderRadius={20}
      >
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 4, md: 0 }}>
          <MediaRenderer src={HERO_IMAGE_URL} height="100%" width="100%" />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          w={{ base: "100%", md: "60%" }}
        >
          <Stack spacing={4}>
            <Heading
              bgGradient="linear(to-l, #000000, #007639)"
              bgClip="text"
              fontWeight="extrabold"
              fontSize={{ base: "4xl", md: "6xl" }}
            >
              AfroDoge: Streamline Global Financial Transactions for Africans 
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }}>
              Empowering Africa&rsquo;s Financial Sovereignty.
              Transfer funds globally and have the recipient receive the money
              instantly
            </Text>
            <Flex alignItems="center" mt={4}>
              <ConnectWallet
                theme={"dark"}
                btnTitle={"Login"}
                modalTitle={"Login With"}
                switchToActiveChain={true}
                modalSize={"wide"}
                welcomeScreen={{
                  img: {
                    src: "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/crest_icon_logo_colored_nobg.png",
                    width: 150,
                    height: 150,
                  },
                  subtitle: "Login to access your account",
                }}
                modalTitleIconUrl={
                  "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/favicon.ico"
                }
                detailsBtn={() => {
                  return <Text></Text>;
                }}
              />
              <span style={{ margin: "0 10px" }}></span>
              <ConnectWallet
                theme={"dark"}
                btnTitle={"Get Started"}
                modalTitle={"Sign Up Now!"}
                switchToActiveChain={true}
                modalSize={"wide"}
                welcomeScreen={{
                  img: {
                    src: "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/crest_icon_logo_colored_nobg.png",
                    width: 150,
                    height: 150,
                  },
                  subtitle: "Sign up now to create an account",
                }}
                modalTitleIconUrl={
                  "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/favicon.ico"
                }
                detailsBtn={() => {
                  return <Text></Text>;
                }}
              />
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Box my={10}>
        <Center>
          <Heading as="h2" size="xl">
            How to Transfer?
          </Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
          <Box>
            <MediaRenderer
              src={FEATURES_IMAGE_URL}
              height="100%"
              width="100%"
            />
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing={4}>
              <FeatureCard
                step={"01"}
                title={"Select an Asset"}
                description={
                  "Select from a list of verified Asset to send to your friends and family."
                }
              />
              <FeatureCard
                step={"02"}
                title={"Who to Send To"}
                description={
                  "Enter the UID of the recipient. Double-check the address as it's non-reversible."
                }
              />
              <FeatureCard
                step={"03"}
                title={"Write a Message"}
                description={"Add an optional message to your asset transfer."}
              />
            </Stack>
          </Flex>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Home;

```

# pages\deposit.tsx

```tsx
import { Container } from "@chakra-ui/react";
import React from "react";
import DepositForm from "../components/DepositForm";

const DepositPage = () => {
  return (
    <Container maxW="full" p={[4, 6]}>
      <DepositForm />
    </Container>
  );
};

export default DepositPage;

```

# pages\contact.tsx

```tsx
// pages/contact.tsx

import React from "react";
import { NextPage } from "next";
import {
  Container,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarker,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Contact: NextPage = () => {
  return (
    <Container maxW="800px" mt={10}>
      <Heading as="h1" mb={6}>
        Contact Us
      </Heading>
      <VStack align="start" spacing={4}>
        <Text>
          Thank you for your interest in AfroDoge! If you have any questions,
          suggestions, or would like to get in touch, feel free to contact us
          using the information below:
        </Text>
        <HStack spacing={4}>
          <FaEnvelope />
          <ChakraLink href="mailto:info@AfroDoge.com">
            info@AfroDoge.com
          </ChakraLink>
        </HStack>
        <HStack spacing={4}>
          <FaPhone />
          <Text>+123 456 7890</Text>
        </HStack>
        <HStack spacing={4}>
          <FaMapMarker />
          <Text>123 Main Street, Goshen City</Text>
        </HStack>
        <Heading as="h2" size="lg" mt={6}>
          Connect with Us on Social Media
        </Heading>
        <HStack spacing={4}>
          <FaTwitter />
          <ChakraLink href="https://twitter.com/AfroDoge" target="_blank">
            Twitter
          </ChakraLink>
        </HStack>
        <HStack spacing={4}>
          <FaInstagram />
          <ChakraLink
            href="https://www.instagram.com/AfroDoge/"
            target="_blank"
          >
            Instagram
          </ChakraLink>
        </HStack>
        <HStack spacing={4}>
          <FaFacebook />
          <ChakraLink
            href="https://www.facebook.com/AfroDoge/"
            target="_blank"
          >
            Facebook
          </ChakraLink>
        </HStack>
        <HStack spacing={4}>
          <FaLinkedin />
          <ChakraLink
            href="https://www.linkedin.com/company/AfroDoge/"
            target="_blank"
          >
            LinkedIn
          </ChakraLink>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Contact;

```

# pages\claim.tsx

```tsx
import {
    Box,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import {
    MediaRenderer,
    Web3Button,
    useContract,
    useContractMetadata,
  } from "@thirdweb-dev/react";
  import {
    CLAIM_TOKEN_CONTRACT_ADDRESS,
    CLAIM_TOKEN_IMAGE,
  } from "../const/addresses";
  
  export default function ClaimPage() {
    const { contract } = useContract(CLAIM_TOKEN_CONTRACT_ADDRESS, "mamaDo");
  
    const { data: contractMetadata } = useContractMetadata(contract);
  
    const claimAmount = 1000;
    const toast = useToast();
  
    return (
      <Container maxW={"1440px"} minHeight={"80vh"} padding={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex justify={{ base: "center", md: "flex-end" }} align="center">
            <MediaRenderer src={CLAIM_TOKEN_IMAGE} height="100%" width="100%" />
          </Flex>
          <Flex
            flexDirection={"column"}
            align={{ base: "center", md: "flex-start" }}
          >
            <Stack spacing={4} textAlign={{ base: "center", md: "left" }}>
              <Heading fontSize={{ base: "4xl", md: "5xl" }}>
                Claim {contractMetadata?.symbol}
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }}>
                Claim your FREE {contractMetadata?.symbol} (One time only).{" "}
                <br></br>All transaction fees to claim your{" "}
                {contractMetadata?.symbol} are covered.
                <br></br>Utilize {contractMetadata?.symbol} to navigate AfroDoge Ecosystem.
              </Text>
              <Text fontWeight={"bold"}>
                Claim {claimAmount} {contractMetadata?.symbol}
              </Text>
              <Box>
                <Web3Button
                  contractAddress={CLAIM_TOKEN_CONTRACT_ADDRESS}
                  action={(contract) => contract.erc20.claim(claimAmount)}
                  onError={(error) =>
                    toast({
                      title: "Unsuccessful Claim",
                      description: "Something went wrong while claiming. Afrodog May Already claimed ",
                      status: "error",
                      duration: 90000,
                      isClosable: true,
                    })
                  }
                  onSuccess={() =>
                    toast({
                      title: "Claim Successful",
                      description: "Free Africa ! You have successfully claimed AfroDoge Coin!",
                      status: "success",
                      duration: 90000,
                      isClosable: true,
                    })
                  }
                >
                  Claim {contractMetadata?.symbol} now!
                </Web3Button>
              </Box>
            </Stack>
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  
```

# pages\about.tsx

```tsx
import React from "react";
import { NextPage } from "next";
import {
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Center,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

const About: NextPage = () => {
  return (
    <Container maxW="800px" mt={10}>
      <Heading as="h1" mb={6}>
        About AfroDoge
      </Heading>
      <VStack align="start" spacing={4}>
        <Text>
          AfroDoge is a dynamic community dedicated to fostering
          collaboration, creativity, and innovation in the decentralized world.
          Whether you&apos;re an artist, developer, entrepreneur, or blockchain
          enthusiast, you&apos;ve found your digital home!
        </Text>
        <Heading as="h2" size="lg">
          Our Vision
        </Heading>
        <Text>
          At AfroDoge, we believe in the power of decentralized collaboration
          to shape a brighter future. Together, we aim to build a thriving
          ecosystem that empowers creators, disrupts the status quo, and unlocks
          new possibilities in the blockchain space.
        </Text>

        {/* GitHub link */}
        <Text>
          Explore our code on{" "}
          <Link href="https://github.com/Goshen-DAO/AfroDoge" target="_blank">
            GitHub
          </Link>
          .
        </Text>

        {/* Additional technical resources (placeholder) */}
        <Text>
          For more technical details and resources, visit our documentation at{" "}
          <Link href="https://docs.AfroDoge.com" target="_blank">
            Docs
          </Link>
          .
        </Text>
      </VStack>
      <br />
      <br />
      <br />
      <Center>
        <Button
          as={NextLink}
          href="https://AfroDoge.com/discord"
          target="_blank"
          variant="solid"
          colorScheme="teal"
        >
          Join our Community
        </Button>
      </Center>
    </Container>
  );
};

export default About;

```

# styles\TransactionHistory.module.css

```css
/* TransactionHistory.module.css */

.transactionHistory {
    margin: 20px;
  }
  
  .transactionList {
    list-style: none;
    padding: 0;
  }
  
  .transactionItem {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
  }
  
  .label {
    font-weight: bold;
    margin-right: 5px;
  }

  .transactionItem {
    position: relative;
    word-wrap: break-word;
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  }

  /* Add the following media query for responsiveness on smaller screens */
@media (max-width: 600px) {
  .transactionItem {
    max-width: 100%; /* Allow the transaction item to take the full width on smaller screens */
  }
}

.indicatorContainer {
  display: flex;
  align-items: center;
}
  
  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
  }

  .indicatorText {
    margin-left: 8px; /* Adjust the margin as needed */
  }
  
  .fee {
    background-color: red;
  }
  
  .withdraw {
    background-color: blue;
  }
  
  .transfer {
    background-color: green;
  }

  .deposit {
    background-color: rgb(0, 191, 255);
  }

  .received {
    background-color: rgb(60, 255, 0);
  }
  
```

# styles\Sale.module.css

```css
.title {
  padding: 8px;
  font-size: 3rem;
  margin-bottom: 8px;
}

.legend {
  color: rgba(255, 255, 255, 0.8);
  margin: 0px;
  margin-bottom: 8px;
}

.input {
  display: block;
  width: 98%;
  padding: 12px 16px;
  margin-bottom: 0.5rem;
  background: transparent;
  border: none;
  font-size: 16px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  margin-bottom: 16px;
  margin-left: 2px;
}

.formSectionTitle {
  margin-top: 24px;
  margin-bottom: 8px;
}

.activeTabContent {
  display: flex;
  flex-direction: column;
  opacity: 1;
}

```

# styles\Profile.module.css

```css
.profileHeader {
}

.coverImage {
  width: 100%;
  background-color: #272a2d;
  height: 300px;
  border-radius: 16px;
}

.profilePicture {
  width: 132px;
  height: 132px;
  border-radius: 132px;
  vertical-align: inherit;
  outline: 3px solid rgba(255, 255, 255, 0.1);
  margin-top: -72px;
  margin-left: 5%;
}

.profileName {
  margin-left: 2.5%;
}

.tabs {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  margin-top: 16px;
  margin-bottom: 16px;
}

.tab {
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

.tab:hover {
  color: rgba(101, 101, 101, 0.8);
}

.activeTab {
  color: rgb(113, 113, 113);
  border-bottom: 2px solid #039442;
  color: #007a21;
}

.tabContent {
  display: none;
  height: 0px;
  opacity: 0;
  transition: all 0.1s linear;
}

.activeTabContent {
  display: flex;
  flex-direction: row;
  opacity: 1;
  width: 1300px;
  height: 100%;
}

```

# styles\NFT.module.css

```css
.nftImage {
  /* Override default NFT renderer width */
  width: 100% !important;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  object-fit: cover;
}

.nftTokenId {
  font-size: 12px;
  margin: 0px;
  margin-top: 12px;
}

.nftName {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  color: #000000;
  font-family: inherit;
  vertical-align: inherit;
  font-size: 15px;
  line-height: 22px;
  font-weight: 700;
  margin: 0px;
  margin-bottom: 12px;
  margin-top: 4px;
}

.priceContainer {
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  min-height: 52px;
}

.nftPriceContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
}

.nftPriceLabel {
  margin: 0px;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  color: rgb(255, 255, 255);
}

.nftPriceValue {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  font-family: inherit;
  vertical-align: inherit;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  border: 0px;
  color: #000000;
}

```

# styles\Home.module.css

```css
.container {
  padding: 0 2rem;
}

.main {
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title a {
  color: #f213a4;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.connect {
  margin-bottom: 2rem;
  width: 230px;
}

.description {
  margin-top: 3rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #004920;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
}

.card {
  background-color: #1b2129;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 350px;
}

.card:hover,
.card:focus,
.card:active {
  background-color: #272c34;
  color: #0ea5e9;
  border-color: #0ea5e9;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

.card,
.footer {
  border-color: #222;
}
.code {
  background: #111;
}
.logo img {
  filter: invert(1);
}

.tokenButton:hover {
  cursor: pointer;
}

submitButton {
  background: linear-gradient(to right, teal.500, blue.500);
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.submitButton:hover {
  background-color: linear-gradient(to right, teal.600, blue.600);
}

.tokenButton:hover {
  cursor: pointer;
}
```

# styles\globals.css

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: #7dd3fc;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

html {
  color-scheme: dark;
}
body {
  color: #0c4e4e;
  background: rgb(0,0,0);
  background: linear-gradient(16deg, rgba(0,0,0,1) 0%, rgba(79,217,230,1) 78%, rgba(120,255,230,1) 100%);
}

```

# styles\global.css

```css
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a; /* Set your futuristic background color */
    color: #ffffff; /* Set the text color to contrast with the background */
  }
```

# styles\CashInOutForm.module.css

```css
/* CashInOutForm.module.css */

.formContainer {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .inputGroup {
    margin-bottom: 20px;
  }
  
  .label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .tokenBalance {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
    border: 1px solid #006d3a;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
  }
  
  .input {
    padding: 10px;
    border: 1px solid #006d3a;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
  }
  
  .select {
    padding: 10px;
    border: 1px solid #006d3a;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
  }
  
  .submitButton {
    background: linear-gradient(to right, teal.500, blue.500);
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .submitButton:hover {
    background-color: linear-gradient(to right, teal.600, blue.600);
  }
  
  .tokenButton:hover {
    cursor: pointer;
  }
```

# styles\Buy.module.css

```css
.nftGridContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1%;
  width: 100%;
}

.nftContainer {
  width: 17.8%;
  margin: 8px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  backface-visibility: hidden;
  outline: 1px solid rgba(255, 255, 255, 0.1);
  transform: translate3d(0px, 0px, 0px);
  display: flex;
  flex-direction: column;
  padding: 8px;
  max-height: 382px;
  transition: all 0.25s ease-in-out;
}

.nftContainer:hover {
  cursor: pointer;
  transform: translate3d(0px, -4px, 0px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  padding: 8px;
  font-size: 3rem;
  margin-bottom: 8px;
}

/* Responsive */

@media (min-width: 1200px) {
}

@media (min-width: 760px) and (max-width: 1200px) {
  .nftContainer {
    width: 22%;
  }
}

@media (min-width: 600px) and (max-width: 760px) {
  .nftContainer {
    width: 29%;
  }
}

/* Less than 600 */
@media (max-width: 600px) {
  .nftContainer {
    width: 45%;
  }
}

```

# const\addresses.ts

```ts
// export const TRANSFER_CONTRACT_ADDRESS = '0x7fa74e119eD2ceFE4331B78C402E7Bc8dd2cD650';
export const TRANSFER_CONTRACT_ADDRESS = '0xE99f6edC10D0E7074D14C72D6335B7E8C8D61d24';
// export const CALIM_TOKEN_CONTRACT_ADDRESS = '0xf4ED0ba75DfA2D64828e9F6cd280fB660Bc09908';
// export const CALIM_TOKEN_CONTRACT_ADDRESS = '0xF90B51335602335e12FCac3C787e32Bd2DC59194';
export const CLAIM_TOKEN_CONTRACT_ADDRESS = '0xFDf48CBA1Ce522Cdc93E7Aa88194A7afD9Ea04DF';
export const FEE_TOKEN_ADDRESS = '0xFDf48CBA1Ce522Cdc93E7Aa88194A7afD9Ea04DF';
export const FEE_AMOUNT = '0';
export const FEE_RECEIVER = '0x29549757C5597c529efCD2F8d0732F81c2fD1A1D';

export const HERO_IMAGE_URL = 'ipfs://QmUWVRuyFuVfo45estsJt2VaQUSEc4uwcPoeWFaeYxERua/seanwatase_isometric_crypto_transferring_from_one_wallet_to_ano_96084ff1-fe03-4dfd-8783-a3ecc85a24da.png';
export const FEATURES_IMAGE_URL = 'ipfs://QmcTgfb2AXj1TcVj4i9jSgZc8A8LhxHYCXbu5Mngsx7iVT/Coins.png';
export const CLAIM_TOKEN_IMAGE = 'ipfs://QmUYpRzQE6bebNuuVriyd2n163wAKu1pNRusqQraeRU5bX/seanwatase_isometric_black_crypto_coin_transparent_background_3dcbfe44-babc-45f5-9d43-881d85d2293d.png';
// export const MARKETPLACE_ADDRESS ='0xD10A26F0A377FA2b3B6cE86C025092306e3fd192';
export const MARKETPLACE_ADDRESS ='0xBA7e5AFe0480A53224Ea143a96F118BF3cb6F58f';
// export const NFT_COLLECTION_ADDRESS = '0x947e44D7cB4C45D91E720d85E5Daa6d4B8ECd73D';
export const NFT_COLLECTION_ADDRESS = '0x2Cacf9BCda40062a9390d34Ed2DA92B7b2217Cf9';
export const CFA_TOKEN_CONTRACT_ADDRESS = '0xAB42A79C77F0B3F36C0Aa8090b13b5D8c25Cc01E';
export const EURA_TOKEN_CONTRACT_ADDRESS = '0x819E98D77A7C0F62AD3B7d42645770C35Ac6E84B';
export const USDA_TOKEN_CONTRACT_ADDRESS = '0x9082da88295B5fe00A9F94cFc6CbD3cfA6034085';

// export const TOKEN_REGISTRY: Record<string, string> = {
    // "0xFDf48CBA1Ce522Cdc93E7Aa88194A7afD9Ea04DF" : "mamaDo",
   // "0x819E98D77A7C0F62AD3B7d42645770C35Ac6E84B": "EURA",
   // "0xAB42A79C77F0B3F36C0Aa8090b13b5D8c25Cc01E": "CFA",
   // export const TOKEN_ADDRESSES: { [key: string]: string } = {
        // "0xFDf48CBA1Ce522Cdc93E7Aa88194A7afD9Ea04DF": "mamaDo",
       // "0x819E98D77A7C0F62AD3B7d42645770C35Ac6E84B": "EURA",
       // "0xAB42A79C77F0B3F36C0Aa8090b13b5D8c25Cc01E": "CFA",
;
```

# components\WithdrawNow.tsx

```tsx
// WithdrawNow.tsx
import { useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  useToast,
  ModalFooter,
} from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useContractRead,
  ConnectWallet,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import TokenSelection from "./TokenSelection";
import { useState, useEffect } from "react";
import TokenBalance from "./TokenBalance";
import WithdrawButton from "./WithdrawButton";
import styles from "../styles/CashInOutForm.module.css";
import html2canvas from "html2canvas";
import { IconButton } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";


export default function WithdrawNowPage() {
  const toast = useToast();

  const [showForm, setShowForm] = useState(false);
  const [isImageSaved, setIsImageSaved] = useState(false);

  const address = useAddress();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContentRef = useRef(null);

  const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS);
  const [selectedToken, setSelectedToken] = useState(
    "0xF90B51335602335e12FCac3C787e32Bd2DC59194"
  );
  const { data: contractMetadata } = useContractMetadata(contract);

  const { data: verifiedTokens, isLoading: isVerifiedTokensLoading } =
    useContractRead(contract, "getVerifiedTokens");

  const [formData, setFormData] = useState({
    receiver: "0x900051b41d2CCfCCe46F605488D5Bc67A1a905AB",
    amount: "",
    yourEmail: "",
    withdrawalDestination: "",
    gcashReceiverName: "",
    gcashNumber: "",
    cebuanaReceiverName: "",
    cebuanaReceiverMobileNumber: "",
    cebuanaReceiverAddress: "",
    westernunionReceiverName: "",
    westernunionReceiverMobileNumber: "",
    westernunionReceiverAddress: "",
    paynowReceiverName: "",
    ReceiverPaynowNumber: "",
    bankName: "",
    bankReceiverName: "",
    ReceiverBankNumber: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    name: string
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));

    if (name === "withdrawalDestination" && !event.target.value) {
      // Handle the error here
      console.error("Please choose or complete the necessary fields.");
      // You might want to set an error state or show an error message to the user.
    }
  };

  const handleTokenSelection = (tokenAddress: string) => {
    setSelectedToken(tokenAddress);
  };

  const saveModalAsImage = () => {
    if (modalContentRef.current) {
      html2canvas(modalContentRef.current).then((canvas: HTMLCanvasElement) => {
        const counter = localStorage.getItem("imageCounter") || "0"; // Default to '0' if not present
        const incrementedCounter = parseInt(counter, 10) + 1;

        // Format the counter with leading zeros
        const formattedCounter = incrementedCounter.toString().padStart(9, "0");

        const currentDate = new Date();
        const formattedDate = `${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}-${currentDate.getFullYear()}`;
        const getYear = `${currentDate.getFullYear()}`;

        const filename = `${address}-${formattedCounter}-${formattedDate}-AfroDoge-${getYear}.png`;

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = filename;
        link.click();

        // Update the counter in localStorage
        localStorage.setItem("imageCounter", incrementedCounter.toString());

        setIsImageSaved(true);

        // Close the modal after saving the image
        setIsModalOpen(false);
      });
    }
  };

  const handleModalClose = () => {
    // Display toast message if the image is not saved
    toast({
      title:
        "Kindly close this window by saving the withdrawal information through the save button.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });

    // Return false to prevent the modal from closing if the image is not saved
    return isImageSaved;
  };

  const renderAdditionalFields = () => {
    if (formData.withdrawalDestination === "GCash") {
      return (
        <>
          <FormControl mb={4}>
            <FormLabel>GCash Receiver Name:</FormLabel>
            <Input
              placeholder="Enter your GCash Receiver Name"
              type="text"
              value={formData.gcashReceiverName}
              required
              onChange={(event) => handleChange(event, "gcashReceiverName")}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>GCash Number:</FormLabel>
            <Input
              placeholder="Enter your GCash number"
              type="number"
              value={formData.gcashNumber}
              required
              onChange={(event) => handleChange(event, "gcashNumber")}
            />
          </FormControl>
        </>
      );
    } else if (formData.withdrawalDestination === "Cebuana") {
      return (
        <>
          <FormControl mb={4}>
            <FormLabel>Receiver Name:</FormLabel>
            <Input
              placeholder="Enter your Cebuana Receiver Name"
              type="text"
              value={formData.cebuanaReceiverName}
              required
              onChange={(event) => handleChange(event, "cebuanaReceiverName")}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Receiver Mobile Number:</FormLabel>
            <Input
              placeholder="Enter your Cebuana Receiver Mobile Number"
              type="number"
              value={formData.cebuanaReceiverMobileNumber}
              required
              onChange={(event) =>
                handleChange(event, "cebuanaReceiverMobileNumber")
              }
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Receiver Address:</FormLabel>
            <Input
              placeholder="Enter your Cebuana Receiver Address"
              type="text"
              value={formData.cebuanaReceiverAddress}
              required
              onChange={(event) =>
                handleChange(event, "cebuanaReceiverAddress")
              }
            />
          </FormControl>
        </>
      );
    } else if (formData.withdrawalDestination === "WesternUnion") {
      return (
        <>
          <FormControl mb={4}>
            <FormLabel>Receiver Name:</FormLabel>
            <Input
              placeholder="Enter your Western Union Receiver Name"
              type="text"
              value={formData.westernunionReceiverName}
              required
              onChange={(event) =>
                handleChange(event, "westernunionReceiverName")
              }
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Receiver Mobile Number:</FormLabel>
            <Input
              placeholder="Enter your Western Union Receiver Mobile Number"
              type="number"
              value={formData.westernunionReceiverMobileNumber}
              required
              onChange={(event) =>
                handleChange(event, "westernunionReceiverMobileNumber")
              }
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Receiver Address:</FormLabel>
            <Input
              placeholder="Enter your Western Union Receiver Address"
              type="text"
              value={formData.westernunionReceiverAddress}
              required
              onChange={(event) =>
                handleChange(event, "westernunionReceiverAddress")
              }
            />
          </FormControl>
        </>
      );
    } else if (formData.withdrawalDestination === "Paynow") {
      return (
        <>
          <FormControl mb={4}>
            <FormLabel>Receiver Name:</FormLabel>
            <Input
              placeholder="Enter your Paynow Receiver Name"
              type="text"
              value={formData.paynowReceiverName}
              required
              onChange={(event) => handleChange(event, "paynowReceiverName")}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Receiver Paynow Number:</FormLabel>
            <Input
              placeholder="Enter your Receiver Paynow Number"
              type="number"
              value={formData.ReceiverPaynowNumber}
              required
              onChange={(event) => handleChange(event, "ReceiverPaynowNumber")}
            />
          </FormControl>
        </>
      );
    } else if (formData.withdrawalDestination === "BankTransfer") {
      return (
        <>
          <FormControl>
            <FormLabel>Select Bank Name:</FormLabel>
            <Select
              placeholder="Select Bank Name"
              value={formData.bankName}
              required
              onChange={(event) => handleChange(event, "bankName")}
            >
              <option value="BPI">BPI</option>
              <option value="PNB">PNB</option>
              <option value="Metrobank">Metrobank</option>
              <option value="Chinabank">Chinabank</option>
              <option value="SecurityBank">Security Bank</option>
              <option value="CantilanBank">Cantilan Bank</option>
              <option value="BDO">BDO</option>
              <option value="Unionbank">Unionbank</option>
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Receiver Name:</FormLabel>
            <Input
              placeholder="Enter your Receiver Name"
              type="text"
              value={formData.bankReceiverName}
              required
              onChange={(event) => handleChange(event, "bankReceiverName")}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Receiver Bank Number:</FormLabel>
            <Input
              placeholder="Enter your Receiver Bank Number"
              type="number"
              value={formData.ReceiverBankNumber}
              required
              onChange={(event) => handleChange(event, "ReceiverBankNumber")}
            />
          </FormControl>
        </>
      );
    }

    return null; // Default: render nothing
  };

  const renderAdditionalFieldsInReceipt = () => {
    switch (formData.withdrawalDestination) {
      case "GCash":
        return (
          <>
            <Text>
              <b>GCash Receiver Name:</b> {formData.gcashReceiverName}
            </Text>
            <Text>
              <b>GCash Number:</b> {formData.gcashNumber}
            </Text>
          </>
        );

      case "Cebuana":
        return (
          <>
            <Text>
              <b>Receiver Name:</b> {formData.cebuanaReceiverName}
            </Text>
            <Text>
              <b>Receiver Mobile Number:</b>{" "}
              {formData.cebuanaReceiverMobileNumber}
            </Text>
            <Text>
              <b>Receiver Address:</b> {formData.cebuanaReceiverAddress}
            </Text>
          </>
        );

      case "WesternUnion":
        return (
          <>
            <Text>
              <b>Receiver Name:</b> {formData.westernunionReceiverName}
            </Text>
            <Text>
              <b>Receiver Mobile Number:</b>{" "}
              {formData.westernunionReceiverMobileNumber}
            </Text>
            <Text>
              <b>Receiver Address:</b> {formData.westernunionReceiverAddress}
            </Text>
          </>
        );

      case "Paynow":
        return (
          <>
            <Text>
              <b>Receiver Name:</b> {formData.paynowReceiverName}
            </Text>
            <Text>
              <b>Receiver Paynow Number:</b> {formData.ReceiverPaynowNumber}
            </Text>
          </>
        );

      case "BankTransfer":
        return (
          <>
            <Text>
              <b>Selected Bank:</b> {formData.bankName}
            </Text>
            <Text>
              <b>Receiver Name:</b> {formData.bankReceiverName}
            </Text>
            <Text>
              <b>Receiver Bank Number:</b> {formData.ReceiverBankNumber}
            </Text>
          </>
        );

      default:
        return null;
    }
  };

  const isWithdrawButtonDisabled =
    !formData.withdrawalDestination ||
    (formData.withdrawalDestination === "GCash" &&
      (!formData.gcashReceiverName || !formData.gcashNumber)) ||
    (formData.withdrawalDestination === "Cebuana" &&
      (!formData.cebuanaReceiverName ||
        !formData.cebuanaReceiverMobileNumber ||
        !formData.cebuanaReceiverAddress)) ||
    (formData.withdrawalDestination === "WesternUnion" &&
      (!formData.westernunionReceiverName ||
        !formData.westernunionReceiverMobileNumber ||
        !formData.westernunionReceiverAddress)) ||
    (formData.withdrawalDestination === "Paynow" &&
      (!formData.paynowReceiverName || !formData.ReceiverPaynowNumber)) ||
    (formData.withdrawalDestination === "BankTransfer" &&
      (!formData.bankName ||
        !formData.bankReceiverName ||
        !formData.ReceiverBankNumber));
  
 false;

  return (
    <Box
      p={4}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      className={styles.formContainer}
      width={["100%", "100%", "80%", "60%"]}
      mx="auto"
    >
      <Heading fontSize="xl" mb={4} textAlign="center">
        Withdraw
      </Heading>

      <FormControl mb={4}>
        <FormLabel>Select Asset:</FormLabel>
        <Flex flexDirection="row" mt={2} flexWrap="wrap">
          {!isVerifiedTokensLoading &&
            verifiedTokens.map((token: string) => (
              <Box
                key={token}
                onClick={() => handleTokenSelection(token)}
                className={`${styles.tokenButton} ${
                  selectedToken === token ? styles.selectedToken : ""
                }`}
                flexBasis={["100%", "50%", "30%", "20%"]}
                padding={2}
              >
                <TokenSelection
                  tokenAddress={token}
                  isSelected={selectedToken === token}
                />
              </Box>
            ))}
        </Flex>
      </FormControl>

      <TokenBalance tokenAddress={selectedToken} />
      {showForm && (
        <>
          <FormControl mb={4}>
            <FormLabel></FormLabel>
            <Input
              placeholder="0x900051b41d2CCfCCe46F605488D5Bc67A1a905AB"
              type="text"
              value="0x900051b41d2CCfCCe46F605488D5Bc67A1a905AB"
              required
              onChange={(event) => handleChange(event, "receiver")}
              readOnly
            />
          </FormControl>
        </>
      )}

      <FormControl mb={4}>
        <FormLabel>Amount:</FormLabel>
        <Input
          placeholder="0.0"
          type="number"
          value={formData.amount}
          required
          onChange={(event) => handleChange(event, "amount")}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Email: (For the confirmation receipt)</FormLabel>
        <Input
          placeholder="youremail@gmail.com"
          type="email"
          value={formData.yourEmail}
          required
          onChange={(event) => handleChange(event, "yourEmail")}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Select Withdrawal Destination:</FormLabel>
        <Select
          placeholder="Withdrawal Destination"
          value={formData.withdrawalDestination}
          required
          onChange={(event) => handleChange(event, "withdrawalDestination")}
        >
          <option value="GCash">GCash</option>
          <option value="Cebuana">Cebuana</option>
          <option value="WesternUnion">Western Union</option>
          <option value="Paynow">Paynow</option>
          <option value="BankTransfer">Bank Transfer</option>
        </Select>
      </FormControl>
      {renderAdditionalFields()}

      <FormControl mb={4}>
        <FormLabel>Message: (Optional)</FormLabel>
        <Input
          placeholder="Add a short message here."
          type="text"
          value={formData.message}
          onChange={(event) => handleChange(event, "message")}
        />
      </FormControl>

      <Flex justifyContent="center" mt={4}>
        {address ? (
          <WithdrawButton
          tokenAddress={selectedToken}
          receiver={formData.receiver}
          amount={formData.amount.toString()}
          message={formData.message}
          isDisabled={isWithdrawButtonDisabled}
          onSuccess={() => {
            setIsModalOpen(true);
          }}
          formData={formData} // Add the formData prop here
        />
        ) : (
          <ConnectWallet
            theme={"dark"}
            btnTitle={"Click Me to Withdraw"}
            modalTitle={"Login"}
            switchToActiveChain={true}
            modalSize={"wide"}
            welcomeScreen={{
              img: {
                src: "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/crest_icon_logo_colored_nobg.png",
                width: 150,
                height: 150,
              },
              subtitle: "Login to withdraw assets",
            }}
            modalTitleIconUrl={
              "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/favicon.ico"
            }
            detailsBtn={() => {
              return <Text></Text>;
            }}
          />
        )}
      </Flex>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent ref={modalContentRef}>
          <ModalHeader>
            <center>
              <b>Withdrawal Successful</b>
            </center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <center>
                <b>Withdrawal Details</b>
              </center>
            </Text>
            <br />
            <Text>
              <b>Amount:</b> {formData.amount} XPHP
            </Text>
            <Text>
              <b>Email:</b> {formData.yourEmail}
            </Text>
            <Text>
              <b>Withdrawal Destination:</b> {formData.withdrawalDestination}{" "}
            </Text>
            {renderAdditionalFieldsInReceipt()}
            <Text>
              <b>Message:</b> {formData.message}
            </Text>
            <br />
            <br />
            <Text>
              <center>
                <i>
                  Kindly allow a processing time of 5 minutes to an hour for
                  your withdrawal to be completed.
                </i>
              </center>
            </Text>
          </ModalBody>
          <ModalFooter>
            <IconButton
              onClick={saveModalAsImage}
              disabled={isImageSaved}
              aria-label="Save"
              icon={<FaSave />}
              ml="auto" // This pushes the button to the right
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

```

# components\WithdrawButton.tsx

```tsx
// WithdrawButton.tsx
import React from "react";
import { Web3Button, useContract, useAddress } from "@thirdweb-dev/react";
import {
  TRANSFER_CONTRACT_ADDRESS,
  FEE_TOKEN_ADDRESS,
  FEE_AMOUNT,
  FEE_RECEIVER,
} from "../const/addresses";
import { ethers } from "ethers";
import { useToast } from "@chakra-ui/react";
import styles from "../styles/CashInOutForm.module.css";

import axios from 'axios';

type Props = {
  tokenAddress: string;
  receiver: string;
  amount: string;
  message: string;
  onSuccess?: () => void;
  isDisabled: boolean; // Add the isDisabled prop
  formData: any;
};

export default function WithdrawButton({
  tokenAddress,
  receiver,
  amount,
  message,
  onSuccess,
  isDisabled, // Include the isDisabled prop in the function parameters
  formData,
}: Props) {
  const toast = useToast();
  const address = useAddress();

  const { contract: tokenContract } = useContract(tokenAddress, "token");
  const { contract: transferContract } = useContract(TRANSFER_CONTRACT_ADDRESS);

  const handleTransfer = async () => {
    try {
      // Check if the user has enough balance to cover the fee
      const userBalance = await tokenContract?.call("balanceOf", [
        address as string,
      ]);

      // Ensure that userBalance is defined before accessing its properties
      if (
        userBalance &&
        userBalance[0] &&
        userBalance[0].lt(ethers.utils.parseEther(FEE_AMOUNT))
      ) {
        // Display a toast message if the user doesn't have enough balance
        toast({
          title: "Insufficient Balance",
          description: "You don't have enough XPHP to cover the fees.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      // Set the allowance and initiate the transfer
      await tokenContract?.setAllowance(
        TRANSFER_CONTRACT_ADDRESS,
        ethers.utils.parseEther(amount).toString()
      );

      // Transfer the main amount
      await transferContract?.call("transfer", [
        tokenAddress,
        receiver,
        ethers.utils.parseEther(amount),
        message,
      ]);

      // Transfer the fee amount
      await transferContract?.call("transfer", [
        FEE_TOKEN_ADDRESS,
        FEE_RECEIVER,
        ethers.utils.parseEther(FEE_AMOUNT),
        "Withdraw Fee",
      ]);

      // Display a success toast
      toast({
        title: "Withdraw Successful",
        description: "You have successfully withdrawn an asset.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
        const withdrawalApiEndpoint = '/api/withdrawalEmail';

        try {
          const response = await axios.post(withdrawalApiEndpoint, formData);

          if (response.data.success) {
            console.log('Withdrawal email sent successfully');
          } else {
            console.error('Withdrawal email sending failed');
          }
        } catch (error) {
          console.error('Error sending withdrawal email:', error);
        }
      }
    } catch (error) {
      console.error("Error during transfer:", error);
      // Display an error message
      toast({
        title: "Withdraw Error",
        description: "Something went wrong while transferring.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Web3Button
      theme="dark"
      contractAddress={TRANSFER_CONTRACT_ADDRESS}
      action={handleTransfer} // Use the handleTransfer function
      onSubmit={() => console.log("Transaction submitted")}
      onError={(error) => alert("Something went wrong!")}
      className={styles.submitButton}
      isDisabled={isDisabled} // Set the isDisabled state based on the prop
    >
      Withdraw
    </Web3Button>
  );
}

```

# components\TransferCard.tsx

```tsx
import {
  Box,
  Card,
  Flex,
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useContractRead,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import TokenSelection from "./TokenSelection";
import { useState } from "react";
import TokenBalance from "./TokenBalance";
import TransferButton from "./TransferButton";
import styles from "../styles/CashInOutForm.module.css";
import QRScanner from "../components/QRScanner";

export default function TransferCard() {
  const address = useAddress();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS);

  const { data: verifiedTokens, isLoading: isVerifiedTokensLoading } =
    useContractRead(contract, "getVerifiedTokens");

  const [formData, setFormData] = useState({
    receiver: "",
    amount: "",
    message: "",
  });

  const [selectedToken, setSelectedToken] = useState("");

  const handleChange = (event: any, name: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const handleTokenSelection = (tokenAddress: string) => {
    setSelectedToken(tokenAddress);
  };

  return (
    <Box
      p={4}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      className={styles.formContainer}
      width={["100%", "100%", "80%", "60%"]} // Adjust the width based on your design needs
      mx="auto"
    >
      <Heading fontSize="xl" mb={4} textAlign="center">
        Transfer
      </Heading>

      <FormControl mb={4}>
        <FormLabel>Select Asset:</FormLabel>
        <Flex flexDirection="row" mt={2} flexWrap="wrap">
          {!isVerifiedTokensLoading &&
            verifiedTokens.map((token: string) => (
              <Box
                key={token}
                onClick={() => handleTokenSelection(token)}
                className={`${styles.tokenButton} ${
                  selectedToken === token ? styles.selectedToken : ""
                }`}
                flexBasis={["100%", "50%", "30%", "20%"]}
                padding={2}
              >
                <TokenSelection
                  tokenAddress={token}
                  isSelected={selectedToken === token}
                />
              </Box>
            ))}
        </Flex>
      </FormControl>

      <TokenBalance tokenAddress={selectedToken} />

      <FormControl mb={4}>
        <FormLabel>Send To:</FormLabel>
        <Input
          placeholder="e.g., 0x1234567890abcdef..."
          type="text"
          value={formData.receiver}
          required
          onChange={(event) => handleChange(event, "receiver")}
        />
      </FormControl>

      <Button onClick={() => setIsModalOpen(true)}>Scan QR Code</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <QRScanner />
          </ModalBody>
        </ModalContent>
      </Modal>

      <FormControl mb={4}>
        <FormLabel>Amount:</FormLabel>
        <Input
          placeholder="0.0"
          type="number"
          value={formData.amount}
          required
          onChange={(event) => handleChange(event, "amount")}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Message: (Optional)</FormLabel>
        <Input
          placeholder="Add a short message here."
          type="text"
          value={formData.message}
          onChange={(event) => handleChange(event, "message")}
        />
      </FormControl>

      <Flex justifyContent="center" mt={4}>
        {address ? (
          <TransferButton
            tokenAddress={selectedToken}
            receiver={formData.receiver}
            amount={formData.amount.toString()}
            message={formData.message}
          />
        ) : (
          <ConnectWallet
            theme={"dark"}
            btnTitle={"Click Me to Transfer"}
            modalTitle={"Login"}
            switchToActiveChain={true}
            modalSize={"wide"}
            welcomeScreen={{
              img: {
                src: "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/crest_icon_logo_colored_nobg.png",
                width: 150,
                height: 150,
              },
              subtitle: "Login to transfer assets",
            }}
            modalTitleIconUrl={
              "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/favicon.ico"
            }
            detailsBtn={() => {
              return <Text></Text>;
            }}
          />
        )}
      </Flex>
    </Box>
  );
}

```

# components\TransferButton.tsx

```tsx
import { Web3Button, useContract, useAddress } from "@thirdweb-dev/react";
import {
  TRANSFER_CONTRACT_ADDRESS,
  FEE_TOKEN_ADDRESS,
  FEE_AMOUNT,
  FEE_RECEIVER,
} from "../const/addresses";
import { ethers } from "ethers";
import { useToast } from "@chakra-ui/react";
import styles from "../styles/CashInOutForm.module.css";

type Props = {
  tokenAddress: string;
  receiver: string;
  amount: string;
  message: string;
};

export default function TransferButton({
  tokenAddress,
  receiver,
  amount,
  message,
}: Props) {
  const toast = useToast();
  const address = useAddress();

  const { contract: tokenContract } = useContract(tokenAddress, "token");
  const { contract: transferContract } = useContract(TRANSFER_CONTRACT_ADDRESS);

  const handleTransfer = async () => {
    try {
      // Check if the user has enough balance to cover the fee
      const userBalance = await tokenContract?.call("balanceOf", [
        address as string,
      ]);

      // Ensure that userBalance is defined before accessing its properties
      if (
        userBalance &&
        userBalance[0] &&
        userBalance[0].lt(ethers.utils.parseEther(FEE_AMOUNT))
      ) {
        // Display a toast message if the user doesn't have enough balance
        toast({
          title: "Insufficient Balance",
          description: "You don't have enough XPHP to cover the fees.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      // Set the allowance and initiate the transfer
      await tokenContract?.setAllowance(
        TRANSFER_CONTRACT_ADDRESS,
        ethers.utils.parseEther(amount).toString()
      );

      // Transfer the main amount
      await transferContract?.call("transfer", [
        tokenAddress,
        receiver,
        ethers.utils.parseEther(amount),
        message,
      ]);

      // Transfer the fee amount
      await transferContract?.call("transfer", [
        FEE_TOKEN_ADDRESS,
        FEE_RECEIVER,
        ethers.utils.parseEther(FEE_AMOUNT),
        "Transaction Fee",
      ]);

      // Display a success toast
      toast({
        title: "Transfer Successful",
        description: "You have successfully transferred an asset.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error during transfer:", error);
      // Display an error message
      toast({
        title: "Transfer Error",
        description: "Something went wrong while transferring.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Web3Button
      theme="dark"
      contractAddress={TRANSFER_CONTRACT_ADDRESS}
      action={handleTransfer} // Use the handleTransfer function
      onSubmit={() => console.log("Transaction submitted")}
      onError={(error) => alert("Something went wrong!")}
      className={styles.submitButton}
    >
      Transfer
    </Web3Button>
  );
}

```

# components\TransactionHistory.tsx

```tsx
import React, { useEffect, useState } from "react";
import { CovalentClient, LogEvent } from "@covalenthq/client-sdk";
import {
  useAddress,
  useContract,
  useContractMetadata,
  
} from "@thirdweb-dev/react";
import {
  Heading,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/TransactionHistory.module.css";
// import { CLAIM_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";
import { CLAIM_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";
import { CFA_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";
import { EURA_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";
import { USDA_TOKEN_CONTRACT_ADDRESS } from "../const/addresses";
type CustomTransaction = {
  transfers: LogEvent[];
  from_Address: string;
  to_Address: string;
  block_signed_at: Date;
  block_height: number;
  block_hash: string;
  tx_hash: string;
  tx_offset: number;
  successful: boolean;
};

const formatAmount = (delta: string) => {
  const parsedDelta = BigInt(delta);
  const above18Decimals = parsedDelta / BigInt(10 ** 18);
  const formattedAmount = above18Decimals.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedAmount;
};

const TransactionHistoryPage: React.FC = () => {
  const { contract } = useContract(CLAIM_TOKEN_CONTRACT_ADDRESS, "mamaDo");

  const { data: contractMetadata } = useContractMetadata(contract);
  const [transactions, setTransactions] = useState<CustomTransaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const address = useAddress();

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const covalentApiKey = process.env.COVALENT_API_KEY;

        if (!covalentApiKey) {
          console.error("API key is missing.");
          return;
        }

        if (address === undefined) {
          console.error("Wallet address is undefined.");
          return;
        }

        const client = new CovalentClient(covalentApiKey);
        const walletAddress: string = address;

        const response: CustomTransaction[] = [];
        const targetAddress = address;

        for await (const item of await client.TransactionService.getAllTransactionsForAddress(
          "polygon-amoy-testnet",
          walletAddress,
          { quoteCurrency: "USD" }
        )) {
          const logEvents = item.log_events || [];
          const filteredTransfers = logEvents.filter(
            (log) =>
              log.decoded &&
              log.decoded.signature ===
              "Transfer(indexed address from, indexed address to, uint256 value)" &&
              log.decoded.params &&
              log.decoded.params.length > 0 &&
              (log.decoded.params[0].value.toLowerCase() ===
                targetAddress.toLowerCase() ||
                log.decoded.params[1].value.toLowerCase() ===
                targetAddress.toLowerCase())
          );

          if (filteredTransfers && filteredTransfers.length > 0) {
            const fromAddress = filteredTransfers[0].decoded.params.find(
              (param) => param.name === "from"
            )?.value;
            const toAddress = filteredTransfers[0].decoded.params.find(
              (param) => param.name === "to"
            )?.value;

            response.push({
              ...item,
              transfers: filteredTransfers,
              from_Address: fromAddress || "",
              to_Address: toAddress || "",
            });
          }
        }

        setTransactions(response);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("An unknown error occurred.");
        }
      }
    };

    fetchTransactionHistory();
  }, [address, currentPage]);

  const getTransactionType = (
    to_Address: string,
    from_Address: string,
    amount: string
  ): string => {
    if (to_Address === "0x29549757C5597c529efCD2F8d0732F81c2fD1A1D") {
      return "fee";
    } else if (to_Address === "0x24e439514Fc3DE79EE22e36fC52234b2944317E0") {
      return "withdraw";
    } else if (from_Address === "0x29549757C5597c529efCD2F8d0732F81c2fD1A1D") {
      return "deposit";
    } else if (to_Address.toLowerCase() === address?.toLowerCase()) {
      return "received";
    } else {
      return "transfer";
    }
  };

  const getTransactionTypeText = (
    toAddress: string,
    fromAddress: string,
    amount: string
  ): string => {
    const transactionType = getTransactionType(toAddress, fromAddress, amount);

    switch (transactionType) {
      case "fee":
        return "Fee";
      case "withdraw":
        return "Withdraw";
      case "deposit":
        return "Deposit";
      case "received":
        return "Received";
      case "transfer":
        return "Transfer";
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
      {transactions.length === 0 ? (
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
                  key={transaction.tx_hash}
                  className={styles.transactionItem}
                >
                  <Flex
                    className={styles.indicatorContainer}
                    align="center"
                    mb={2}
                  >
                    <span
                      className={`${styles.indicator} ${styles[
                        getTransactionType(
                          transaction.to_Address,
                          transaction.from_Address,
                          formatAmount(
                            transaction.transfers?.[0].decoded?.params?.[2]
                              .value || "0"
                          )
                        )
                        ]
                        }`}
                    />
                    <Text ml={2} fontSize={["xs", "sm"]} whiteSpace="nowrap">
                      {getTransactionTypeText(
                        transaction.to_Address,
                        transaction.from_Address,
                        formatAmount(
                          transaction.transfers?.[0].decoded?.params?.[2]
                            .value || "0"
                        )
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
                        href={`https://amoy.polygonscan.com//tx/${transaction.tx_hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="blue.500" // Set the link color
                        textDecoration="underline" // Add underline to the link
                      >
                        Show Transaction Details
                      </ChakraLink>
                    </div>
                    <div>
                      <span className={styles.label}>Amount:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {formatAmount(
                          transaction.transfers?.[0].decoded?.params?.[2]
                            .value || "0"
                        )}{" "}
                        <b>{contractMetadata?.symbol}</b>
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>To UID:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {transaction.to_Address}
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>From UID:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {transaction.from_Address}
                      </Text>
                    </div>
                    <div>
                      <span className={styles.label}>Date:</span>{" "}
                      <Text fontSize={["xs", "sm"]} isTruncated>
                        {new Date(transaction.block_signed_at).toLocaleString(
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
```

# components\TokenSelection.tsx

```tsx
import { Box, Card, Spinner, Text } from "@chakra-ui/react";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";

type Props = {
  tokenAddress: string;
  isSelected?: boolean;
};

export default function TokenSelection({ tokenAddress, isSelected }: Props) {
  const { contract } = useContract(tokenAddress);

  const { data: tokenMetadata, isLoading: isTokenMetadataLoading } =
    useContractMetadata(contract);

  let coinBorderColor = "gray.300";

  if (isSelected) {
    coinBorderColor = "blue.600";
  }

  return (
    <Card p={4} mr={2} border={"2px solid"} borderColor={coinBorderColor}>
      {tokenMetadata ? (
        <Box>
          <Text>{tokenMetadata.symbol}</Text>
        </Box>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}

```

# components\TokenBalance.tsx

```tsx
import { Box, Text } from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useTokenBalance,
  useContractMetadata,
} from "@thirdweb-dev/react";
import styles from "../styles/CashInOutForm.module.css";

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

```

# components\QRScanner.tsx

```tsx
// QRScanner.tsx
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Box, Heading, Text, Button, useClipboard } from "@chakra-ui/react";

function QRScanner() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(false); // New state for showing/hiding warning
  const { hasCopied, onCopy } = useClipboard(scanResult || "");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      true
    );

    let isScanning = true;

    scanner.render(success, error);

    function success(result: string) {
      if (isScanning) {
        scanner.clear();
        setScanResult(result);
        isScanning = false;
        setShowWarning(true); // Show warning when result is available
      }
    }

    function error(err: any) {
      console.warn(err);
    }

    // Cleanup function
    return () => {
      // Stop scanning
      const videoElement = document.getElementById(
        "reader"
      ) as HTMLVideoElement;
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        videoElement.srcObject = null;
      }
    };
  }, []);

  return (
    <Box textAlign="center" p={4}>
      <Heading mb={4}>Scan QR Now!</Heading>
      {scanResult ? (
        <Box>
          <Text>
            UID: <a href={scanResult}>{scanResult}</a>
          </Text>
          {showWarning && (
            <Text color="red" fontWeight="bold" mt={2}>
              Warning: <br></br>Make sure you are sending it to the right
              person. <br></br>Review their UID first before copying.
            </Text>
          )}
          <Button mt={2} onClick={onCopy}>
            {hasCopied ? "Copied!" : "Copy UID"}
          </Button>
        </Box>
      ) : (
        <Box>
          <Box id="reader"></Box>
        </Box>
      )}
    </Box>
  );
}

export default QRScanner;

```

# components\ProfilePicture.tsx

```tsx
import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <div>
      {/* Use the Image component */}
      <Image
        src="https://raw.githubusercontent.com/getdemarked/AfroDoge-App/main/public/user-icon.png"
        alt="User Icon"
        width={50} // Set the desired width (in pixels)
        height={50} // Set the desired height (in pixels)
      />
    </div>
  );
};

export default ProfilePicture;
```

# components\Navbar.tsx

```tsx
// components/Navbar.tsx

import React, { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Text,
  Image,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const address = useAddress();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  const [isToastShown, setIsToastShown] = useState<boolean>(false);

  useEffect(() => {
    // Display a toast message when the component mounts
    if (!isToastShown) {
      toast.info(
        "This project is currently in the developmental stage and is in its alpha phase.",
        {
          position: "top-center",
          autoClose: false, // Set to false to allow manual closing
          closeOnClick: false, // Set to false to prevent closing on click
        }
      );
      setIsToastShown(true);
    }
  }, [isToastShown]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Container
      maxW={"100%"}
      py={4}
      position="sticky"
      top={0}
      zIndex={1000}
      background="rgba(122, 218, 148, 0.1)" // Set the background color with opacity
      backdropFilter="blur(8px)" // Set the blur effect
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Image
            src="/crest_horizontal_logo_black_nobg.png"
            alt="AfroDoge Logo"
            boxSize="auto"
            maxW="120px"
          />
        </Link>
        {isSmallerScreen ? (
          <IconButton
            aria-label="Toggle menu"
            icon={<FaBars />}
            onClick={toggleMenu}
            variant="ghost"
          />
        ) : (
          address && (
            <Flex flexDirection={"row"}>
              <Link href={"/transfer"}>
                <Text mr={8}>Transfer</Text>
              </Link>
              <Link href={"/claim"}>
                <Text mr={8}>Claim</Text>
              </Link>
              <Link href={"https://mint.AfroDoge.com"}>
                <Text mr={8}>Mint</Text>
              </Link>
              <Link href={"/deposit"}>
                <Text mr={8}>Deposit</Text>
              </Link>
              <Link href={"/withdraw"}>
                <Text mr={8}>Withdraw</Text>
              </Link>
              <Link href={`/profile/${address}`}>
                <Text>My Wallet</Text>
              </Link>
            </Flex>
          )
        )}
        <Modal isOpen={isOpen} onClose={closeMenu} size="xs">
          <ModalOverlay />
          <ModalContent
            background="rgba(0, 62, 17, 0.8)" // Set the modal background color with opacity
            backdropFilter="blur(8px)" // Set the modal blur effect
          >
            <ModalHeader color="white">Menu</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <ConnectWallet
                  theme={"dark"}
                  btnTitle={"Login"}
                  modalTitle={"Login"}
                  switchToActiveChain={true}
                  modalSize={"wide"}
                  welcomeScreen={{
                    img: {
                      src: "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/crest_icon_logo_colored_nobg.png",
                      width: 150,
                      height: 150,
                    },
                    subtitle: "Login to access your account",
                  }}
                  modalTitleIconUrl={
                    "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/favicon.ico"
                  }
                  detailsBtn={() => {
                    return <Text></Text>;
                  }}
                />
                {address && (
                  <>
                    <Link href={"/transfer"}>
                      <Text color="white" onClick={closeMenu}>
                        Transfer
                      </Text>
                    </Link>
                    <Link href={"/claim"}>
                      <Text color="white" onClick={closeMenu}>
                        Claim
                      </Text>
                    </Link>
                    <Link href={"https://mint.AfroDoge.com"}>
                      <Text color="white" onClick={closeMenu}>
                        Mint
                      </Text>
                    </Link>
                    <Link href={"/deposit"}>
                      <Text color="white" onClick={closeMenu}>
                        Deposit
                      </Text>
                    </Link>
                    <Link href={"/withdraw"}>
                      <Text color="white" onClick={closeMenu}>
                        Withdraw
                      </Text>
                    </Link>
                    <Link href={`/profile/${address}`}>
                      <Text color="white" onClick={closeMenu}>
                        My Wallet
                      </Text>
                    </Link>
                  </>
                )}
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
      <ToastContainer />
    </Container>
  );
};

export default Navbar;

```

# components\Footer.tsx

```tsx
import { Container, Divider, Image, Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container maxW={"100%"} mt={20}>
      <Divider />

      <Container maxW={"1440px"} py={8}>
        <Flex
          flexDirection={{ base: "column", md: "row" }} // Stack columns on small screens, align rows on medium screens and above
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href={"/"}>
            <Image
              src="/crest_horizontal_logo_black_nobg.png" // Replace with the actual logo image path
              alt="AfroDoge Logo"
              boxSize="auto"
              maxW="120px" // Adjust the maximum width of the logo
            />
          </Link>
          Crafted by:
          <Link href={"https://AfroDoge.com"}>
            <Image
              src="/Goshen Horizontal With Color.png" // Replace with the actual logo image path
              alt="Goshen"
              boxSize="auto"
              maxW="120px" // Adjust the maximum width of the logo
            />
          </Link>
          <Flex>
          <p>&copy; 2022-2023 AfroDoge. All rights reserved.</p>
          </Flex>
          <Flex mt={{ base: 4, md: 0 }} flexDirection="row">
            <Link href="/about" mr={4}>
              About Us
            </Link>
            <Link href="/services" mr={4}>
              Services
            </Link>
            <Link href="/contact" mr={4}>
              Contact
            </Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}

```

# components\FeatureCard.tsx

```tsx
import { Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";

type Props = {
  step: string;
  title: string;
  description: string;
};

export default function FeatureCard({ step, title, description }: Props) {
  return (
    <Card px={8} py={10}>
      <Stack spacing={8}>
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Text fontSize={"large"} mr={4}>
            {step}
          </Text>
          <Heading fontSize={"2xl"}>{title}</Heading>
        </Flex>
        <Text fontSize={"large"} ml={10}>
          {description}
        </Text>
      </Stack>
    </Card>
  );
}

```

# components\Events.tsx

```tsx
import { Box, Card, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import { ethers } from "ethers";

export default function Events() {
  function truncateAddress(address: string) {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  }

  const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS);

  const { data: events, isLoading: isEventsLoading } = useContractEvents(
    contract,
    "TransactionCompleted",
    {
      queryFilter: {
        fromBlock: -7000,
      },
    }
  );
  console.log(events);

  return (
    <Box mt={20} w={"100%"}>
      <Heading>Recent Transactions:</Heading>
      {!isEventsLoading ? (
        events
          ?.map((event: any, index) => (
            <Card key={index} p={8} my={4}>
              <Flex flexDirection={"row"} alignItems={"center"}>
                <Text
                  p={2}
                  border={"1px solid grey"}
                  borderRadius={6}
                  fontSize={"xs"}
                >
                  {truncateAddress(event.data.sender)}
                </Text>
                <Text mx={2} fontSize={"sm"}>
                  To
                </Text>
                <Text
                  p={2}
                  border={"1px solid grey"}
                  borderRadius={6}
                  fontSize={"xs"}
                >
                  {truncateAddress(event.data.receiver)}
                </Text>
              </Flex>
              <Text fontSize={"xl"} my={4}>
                {event.data.message}
              </Text>
              <Text>Amount: {ethers.utils.formatEther(event.data.amount)}</Text>
            </Card>
          ))
          .reverse()
      ) : (
        <Spinner />
      )}
    </Box>
  );
}

```

# components\DepositForm.tsx

```tsx
// WithdrawNow.tsx
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  useToast,
  ModalFooter,
} from "@chakra-ui/react";
import {
  useAddress,
} from "@thirdweb-dev/react";
import { useState } from "react";
import styles from "../styles/CashInOutForm.module.css";
import { IconButton } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

import axios from 'axios';

export default function DepositFormPage() {
  const [modalContent, setModalContent] = useState<null | JSX.Element>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  const address = useAddress();
  const [formData, setFormData] = useState({
    amount: "",
    depositCurrency: "",
    yourEmail: "",
    depositDestination: "",
    address: address
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    name: string
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));

    if (name === "withdrawalDestination" && !event.target.value) {
      // Handle the error here
      console.error("Please choose or complete the necessary fields.");
      // You might want to set an error state or show an error message to the user.
    }
  };

  const handleEmailButtonClick = () => {
    // Add logic to set the modal content based on the selected option
    setModalContent(getModalContent());
    // Open the modal
    setIsModalOpen(true);

    // have enough time to complete before sending the email
    setTimeout(async () => {

        const withdrawalApiEndpoint = '/api/depositEmail';

        try {
          const response = await axios.post(withdrawalApiEndpoint, formData);

          if (response.data.success) {
            console.log('Deposit email sent successfully');
          } else {
            console.error('Deposit email sending failed');
          }
        } catch (error) {
          console.error('Error sending Deposit email:', error);
        }
      
      // Send email
    }, 500);
  };

  const getModalContent = () => {
    switch (formData.depositDestination) {
      case "GCash":
        return (
          <>
            <center>
              <ModalHeader>GCash</ModalHeader>
            </center>
            <ModalBody>
              <Text>
                <b>GCash Holder Name:</b> AL**N BR***O C.
              </Text>{" "}
              <br></br>
              <Text>
                <b>GCash Holder Number:</b> 09760874368
              </Text>{" "}
              <br></br> <br></br> <br></br>
              <Text>
                <center>
                  <i>
                    Please transfer the exact amount you specified in the form
                    to this account for the processing of your deposit.
                  </i>
                </center>
              </Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
      case "Paynow":
        return (
          <>
            <center>
              <ModalHeader>Paynow</ModalHeader>
            </center>
            <ModalBody>
              <Text>
                <b>Paynow Number:</b> 96443927
              </Text>{" "}
              <br></br> <br></br> <br></br>
              <Text>
                <center>
                  <i>
                    Please transfer the exact amount you specified in the form
                    to this account for the processing of your deposit.
                  </i>
                </center>
              </Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
      case "BankTransfer":
        return (
          <>
            <center>
              <ModalHeader>Bank Transfer</ModalHeader>
            </center>
            <ModalBody>
              <Text>
                <b>Bank:</b> Security Bank
              </Text>{" "}
              <br></br>
              <Text>
                <b>Bank Holders Name:</b> ALLAN BRANDO B. CATAYOC
              </Text>{" "}
              <br></br>
              <Text>
                <b>Bank Holders Number:</b> 0000058650503
              </Text>{" "}
              <br></br> <br></br> <br></br>
              <Text>
                <center>
                  <i>
                    Please transfer the exact amount you specified in the form
                    to this account for the processing of your deposit.
                  </i>
                </center>
              </Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
      default:
        return (
          <>
            <ModalHeader>Deposit</ModalHeader>
            <ModalBody>
              <Text>Deposit Content Here</Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
    }
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
    // Clear the modal content
    setModalContent(null);
  };

  const handleModalClose = () => {
    // Display toast message if the image is not saved
    toast({
      title: "Kindly close this window by clicking the check button.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSaveButtonClick = () => {
    closeModal(); // Close the modal
  };


  const isDepositButtonDisabled =
    !formData.amount ||
    !formData.depositCurrency ||
    !formData.yourEmail ||
    !formData.depositDestination;

  false; // Default: enable button

  return (
    <Box
      p={4}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      className={styles.formContainer}
      width={["100%", "100%", "80%", "60%"]}
      mx="auto"
    >
      <Heading fontSize="xl" mb={4} textAlign="center">
        Deposit
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Amount:</FormLabel>
        <Input
          placeholder="0.0"
          type="number"
          value={formData.amount}
          required
          onChange={(event) => handleChange(event, "amount")}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Select Deposit Currency:</FormLabel>
        <Select
          placeholder="Deposit Currency"
          value={formData.depositCurrency}
          required
          onChange={(event) => handleChange(event, "depositCurrency")}
        >
          <option value="CFA">CFA</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </Select>
      </FormControl>

      {formData.depositCurrency === "EUR" && (
        <FormControl mb={4}>
          <FormLabel>Select Deposit Destination:</FormLabel>
          <Select
            placeholder="Deposit Destination"
            value={formData.depositDestination}
            required
            onChange={(event) => handleChange(event, "depositDestination")}
          >
            <option value="GCash">GCash</option>
            <option value="BankTransfer">Bank Transfer</option>
          </Select>
        </FormControl>
      )}

      {formData.depositCurrency === "CFA" && (
        <FormControl mb={4}>
          <FormLabel>Select Deposit Destination:</FormLabel>
          <Select
            placeholder="Deposit Destination"
            value={formData.depositDestination}
            required
            onChange={(event) => handleChange(event, "depositDestination")}
          >
            <option value="Paynow">Paynow</option>
            <option value="BankTransfer">Bank Transfer</option>
          </Select>
        </FormControl>
      )}
      {formData.depositCurrency === "USD" && (
        <FormControl mb={4}>
          <FormLabel>Select Deposit Destination:</FormLabel>
          <Select
            placeholder="Deposit Destination"
            value={formData.depositDestination}
            required
            onChange={(event) => handleChange(event, "depositDestination")}
          >
            <option value="GCash">GCash</option>
            <option value="BankTransfer">Bank Transfer</option>
          </Select>
        </FormControl>
      )}

      <FormControl mb={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          placeholder="youremail@gmail.com"
          type="email"
          value={formData.yourEmail}
          required
          onChange={(event) => handleChange(event, "yourEmail")}
        />
      </FormControl>
      <Flex justifyContent="center" mt={4}>
        <Button
          onClick={handleEmailButtonClick}
          isDisabled={isDepositButtonDisabled}
        >
          Deposit
        </Button>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deposit Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalContent}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

```

# components\BalanceCard.tsx

```tsx
import { Card, Spinner, Stack, Text } from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useContractMetadata,
  useTokenBalance,
} from "@thirdweb-dev/react";

type Props = {
  tokenAddress: string;
};

export default function BalanceCard({ tokenAddress }: Props) {
  const address = useAddress();

  const { contract } = useContract(tokenAddress);

  const { data: contractMetadata, isLoading: isContractMetadataLoading } =
    useContractMetadata(contract);

  const { data: tokenBalance, isLoading: isTokenBalanceLoading } =
    useTokenBalance(contract, address);

  const formatNumberWithCommasAndDecimal = (value: number) => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <Card
      p={4}
      width={"100%"}
      maxW={"400px"} // Set a max width for responsiveness
      border={"2px solid"}
      borderColor={"gray.100"}
      mb={4} // Margin bottom to create space between cards
    >
      <Stack textAlign={"center"} spacing={2}>
        {contractMetadata ? (
          <>
            <Text fontWeight={"bold"} fontSize={["lg", "xl", "2xl"]}>
              {contractMetadata.symbol}
            </Text>
            <Text>Balance:</Text>
            {!isTokenBalanceLoading && tokenBalance ? (
              <Text fontSize={["lg", "xl", "2xl"]} fontWeight={"bold"}>
                {formatNumberWithCommasAndDecimal(
                  parseFloat(tokenBalance.displayValue)
                )}
              </Text>
            ) : (
              <Spinner />
            )}
          </>
        ) : (
          <Spinner />
        )}
      </Stack>
    </Card>
  );
}

```

# .yarn\install-state.gz

This is a binary file of the type: Binary

# pages\profile\[walletAddress].tsx

```tsx
import React, { useState } from "react";
import {
  Avatar,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useContractRead,
  useDisconnect,
  ConnectWallet,
  useOwnedNFTs,
  ThirdwebNftMedia
} from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../../const/addresses";
import BalanceCard from "../../components/BalanceCard";
import TransactionHistory from "../../components/TransactionHistory";
import ProfilePicture from "../../components/ProfilePicture";
import { useQRCode } from "next-qrcode";
import { NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import styles from "../../styles/NFT.module.css";

  


export default function AccountPage() {
  const disconnect = useDisconnect();
  const address = useAddress();
  const [isCopied, setIsCopied] = useState(false);
  const { Canvas } = useQRCode();
  const { contract: transferContract } = useContract(TRANSFER_CONTRACT_ADDRESS);
  const { data: verifiedTokens, isLoading: isVerifiedTokensLoading } =
    useContractRead(transferContract, "getVerifiedTokens");

    const { contract: daonftContract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading, error } = useOwnedNFTs(daonftContract, address);
    


    const [parentTabIndex, setParentTabIndex] = React.useState(0);
    const [nestedTabIndex, setNestedTabIndex] = React.useState(0);

  const nftGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', // Three columns
    gap: '16px',
    height: '100%', // Set the height to 100%
    overflow: 'auto', // Enable overflow for scrolling
  };
  
  // Style for each NFT box
  const nftBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '5px',
  };
  

  function copyToClipboard(text: string) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset copied state after 3 seconds
  }

  function truncateAddress(address: string) {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  }

  return (
    <Container maxW={"1440px"} py={4}>
      {address ? (
        <Flex flexDirection={["column", "column", "row"]}>
          <Flex flexDirection={"column"} mr={[0, 0, 8]} p={10} alignItems={["center"]}>
            <ConnectWallet
              theme={"dark"}
              btnTitle={"Click Me to Login"}
              modalTitle={"Login"}
              switchToActiveChain={true}
              modalSize={"wide"}
              hideTestnetFaucet={true}
              welcomeScreen={{
                img: {
                  src: "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/crest_icon_logo_colored_nobg.png",
                  width: 150,
                  height: 150,
                },
                subtitle: "Login to access your account",
              }}
              modalTitleIconUrl={
                "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/favicon.ico"
              }
              detailsBtn={() => {
                return (
                  <Canvas
                    text={address}
                    options={{
                      width: 128,
                    }}
                  />
                );
              }}
            />
            <Flex alignItems="center" mt={[4, 4, 0]}>
              <Text as="b">UID</Text> <br></br>
            </Flex>
            <Flex alignItems="center" mt={[4, 4, 0]}>
              <Text
                fontSize={"sm"}
                border={"2px solid black"}
                textAlign={["center"]}
                borderRadius={4}
                pr={2}
              >
                {truncateAddress(address)}
              </Text>
            </Flex>

            <Flex alignItems="center" mt={[4, 4, 0]}>
              <Button size="sm" onClick={() => copyToClipboard(address)}>
                {isCopied ? "Copied!" : "Copy UID"}
              </Button>
            </Flex>
            <Flex alignItems="center" mt={[4, 4, 0]}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Button onClick={disconnect}>Logout</Button>
            </Flex>
            </Flex>
          <Flex flexDirection={"column"} w={"100%"}>
          <Tabs index={parentTabIndex} onChange={index => setParentTabIndex(index)}>
      <TabList>
        <Tab>Wallet Balance</Tab>
        <Tab>Digital Collectibles</Tab>
        <Tab>Transaction History</Tab>
      </TabList>
      <TabPanels mt={4}>
        <TabPanel>
          <Heading textAlign={["center"]}>Wallet Balance</Heading>
          <SimpleGrid columns={[1]} spacing={0} mt={1}>
    {!isVerifiedTokensLoading ? (
     verifiedTokens.map((token: string) => (
      <center key={token}><BalanceCard tokenAddress={token} /></center>
    ))
    ) : (
                      <Spinner />
                    )}
                  </SimpleGrid>
        </TabPanel>

        <TabPanel>
          <Heading textAlign={["center"]}>Digital Collectibles</Heading>
          <Tabs index={nestedTabIndex} onChange={index => setNestedTabIndex(index)}>
        <TabList>
          <Tab>AfroDoge Pass</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div style={nftGridStyle}>
              {data && data.map((nft) => (
                <a key={nft.metadata.id} href={`https://marketplace.AfroDoge.com/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`} target="_blank" rel="noopener noreferrer" style={nftBoxStyle}>
                  <ThirdwebNftMedia metadata={nft.metadata} className={styles.nftImage} />
                  <p className={styles.nftTokenId}>Digital Collectible ID #{nft.metadata.id}</p>
                  <p className={styles.nftName}>{nft.metadata.name}</p>
                </a>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
         Under Development
          </TabPanel>
        </TabPanels>
      </Tabs>
        </TabPanel>

        <TabPanel>
          <Heading textAlign={["center"]}>Transaction History</Heading>
          <TransactionHistory />
        </TabPanel>
      </TabPanels>
    </Tabs>
          </Flex>
          
        </Flex>
      ) : (        <Flex justifyContent="center" alignItems="center" height="100vh">
          <ConnectWallet
            theme={"dark"}
            btnTitle={"Please login to continue"}
            modalTitle={"Login"}
            switchToActiveChain={true}
            modalSize={"wide"}
            welcomeScreen={{
              img: {
                src: "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/crest_icon_logo_colored_nobg.png",
                width: 150,
                height: 150,
              },
              subtitle: "Login to access your account",
            }}
            modalTitleIconUrl={
              "https://raw.githubusercontent.com/getdemarked/crest-App/main/public/favicon.ico"
            }
            detailsBtn={() => {
              return <Text></Text>;
            }}
          />
        </Flex>
      )}
    </Container>
  );
}

```

# pages\api\withdrawalEmail.js

```js
// pages/api/withdrawalEmail.ts
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body; // Form data sent from the client

    // Extract the recipient email from the form data

    // Your nodemailer setup
    const transporter = nodemailer.createTransport({
      // Configure your email service
      host: process.env.SERVICE_PROVIDER,
      port: process.env.PORT,
      secure: false, // Set to true if using SSL
      auth: {
        user: process.env.USER_EMAIL, // Your SendinBlue SMTP username or API key
        pass: process.env.USER_PASS, // Your SendinBlue SMTP password or API key
      },
    });

    // Create the email content
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: 'Withdrawal Request',
      text: `Withdrawal Details:\n\n${JSON.stringify(formData, null, 2)}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Email sending failed' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

```

# pages\api\depositEmail.js

```js
// pages/api/depositEmail.ts
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body; // Form data sent from the client

    // Extract the recipient email from the form data

    // Your nodemailer setup
    const transporter = nodemailer.createTransport({
      // Configure your email service
      host: process.env.SERVICE_PROVIDER,
      port: process.env.PORT,
      secure: false, // Set to true if using SSL
      auth: {
        user: process.env.USER_EMAIL, // Your SendinBlue SMTP username or API key
        pass: process.env.USER_PASS, // Your SendinBlue SMTP password or API key
      },
    });

    // Create the email content
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: 'Deposit Request',
      text: `Deposit Details:\n\n${JSON.stringify(formData, null, 2)}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Email sending failed' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

```
