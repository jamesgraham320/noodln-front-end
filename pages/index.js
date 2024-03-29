import styles from "../styles/Home.module.css";
import ChatterSignup from "/components/ChatterSignup";
import Head from "next/head";
import { getChatters } from "../adapters/api.js";
import {
  Text,
  Container,
  Center,
  Box,
  Heading,
  VStack,
  Flex,
  Spinner,
  Image,
  Button,
} from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useState } from "react";
import logo from "../public/logos/Noodln-no-background.png";

const generalOrgId =
  process.env.NODE_ENV === "development"
    ? "552e6d44-6ff4-43ba-942d-039212d5ecde"
    : "e38058c0-0baa-4966-a2cf-c98665677fb6";

export default function Home() {
  const [cookies] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Head>
        <title>Noodln - Lunch buddies!</title>
      </Head>
      {!accountCreated ? (
        <Flex
          bgColor="#fbf2ea"
          mb={100}
          ml="auto"
          mr="auto"
          maxW={"500px"}
          w={"90vw"}
          align="center"
          direction="column"
        >
          <Image
            height={150}
            width="auto"
            src="/logos/Noodln-no-background.png"
            alt="Noodln Logo"
          />
          <Heading as="h1">Noodln</Heading>
          {!isLoading ? (
            <>
              <br />
              <Text mb={5}>
                Start Noodln with someone new at noon every day! Sign up now to
                meet your daily lunch companion. Grab your sandwich and hit it
                off!
              </Text>
              <Container w="70%" minWidth="300px">
                <ChatterSignup
                  setAccountCreated={setAccountCreated}
                  setIsLoading={setIsLoading}
                  orgId={generalOrgId}
                />
              </Container>
            </>
          ) : (
            <Spinner size="xl" />
          )}
          <VStack mt={5} spacing={4} align="center">
            <Text>
              {`If you can't wait to Noodl, subscribe to our Noodln all the time room!`}
            </Text>
            <a
              href="https://atslt.com/aqJvd3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button bg="#982022" color="#d2caca">
                Noodl Now!
              </Button>
            </a>
          </VStack>
        </Flex>
      ) : (
        <Flex
          mt={50}
          ml="auto"
          mb={100}
          mr="auto"
          maxW={"500px"}
          w={"90vw"}
          align="center"
          direction="column"
        >
          <Text fontSize="2xl">
            Congrats on signing up! Check your email for more info and get ready
            to start making Smalltalk!
          </Text>
        </Flex>
      )}
    </>
  );
}
