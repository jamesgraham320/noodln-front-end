import { useState } from "react";
import ChatterSignup from "/components/ChatterSignup";
import { getOrg } from "/adapters/api";
import { useFormik } from "formik";
import {
  Heading,
  Image,
  VStack,
  Flex,
  Spinner,
  Container,
  Button,
  Text,
} from "@chakra-ui/react";

export default function SignupLink({ org, validOrg }) {
  const [isLoading, setIsLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  if (!validOrg) {
    return (
      <VStack mt={100}>
        <Image
          height={150}
          width="auto"
          src="/logos/Noodln-no-background.png"
          alt="Noodln Logo"
        />
        <Heading>{"Sorry, I can't find that organization!"}</Heading>
      </VStack>
    );
  }

  if (accountCreated) {
    return (
      <Flex
        ml="auto"
        mb={100}
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
        <Text fontSize="2xl">
          Congrats on signing up! Check your email for more info and get ready
          to start making Smalltalk!
        </Text>
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
    );
  }

  return (
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
      <Heading mb={10} textAlign="center">
        Signup here to Noodl {"\n"} @ {org.name}!
      </Heading>
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <Container w="70%" minWidth="300px">
          <ChatterSignup
            setAccountCreated={setAccountCreated}
            setIsLoading={setIsLoading}
            orgId={org.id}
          />
        </Container>
      )}
    </Flex>
  );
}

export async function getServerSideProps(context) {
  let { data, error } = await getOrg(context.params.id);
  if (error) {
    return { props: { org: data || null, validOrg: false } };
  }
  return { props: { org: data, validOrg: true } };
}
