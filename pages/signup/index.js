import { useState } from "react";
import { useFormik } from "formik";
import { createOrg } from "../../adapters/api.js";
import {
  Text,
  Center,
  Spinner,
  Container,
  Image,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  VStack,
} from "@chakra-ui/react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [org, setOrg] = useState({});
  const [isCopied, setIsCopied] = useState(false);

  const orgForm = useFormik({
    initialValues: {
      orgName: "",
      orgContactEmail: "",
      orgContactName: "",
      orgTime: 12,
      orgTimeZone: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      let org = {
        name: values.orgName,
        contact_email: values.orgContactEmail,
        contact_name: values.orgContactName,
        noodln_time: values.orgTime,
        timezone: values.orgTimeZone,
      };
      let { data, error } = await createOrg({
        organization: org,
      });
      setIsLoading(false);
      setAccountCreated(true);
      setOrg(data);
    },
  });

  const copyText = (e) => {
    if (window) {
      navigator.clipboard.writeText(org.signupUrl);
      setIsCopied(true);
    }
  };

  if (!org && accountCreated) {
    return (
      <Center>
        <Heading textAlign="center">
          Whoops, something went wrong! Please refresh.
        </Heading>
      </Center>
    );
  }

  if (org && accountCreated) {
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
        <Heading pb={15}>Your org is signed up!</Heading>
        <Text pb={15} textAlign="center">
          ${`Just copy this link below and send it to your org so they can sign up
          and start Noodln together! Don't forget to fill it out yourself!`}
        </Text>
        <Button onClick={copyText} bg="#982022" color="#d2caca">
          {isCopied ? "Copied!" : "Get Link"}
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      bgColor="#fbf2ea"
      mt={50}
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
      <Heading pb={15}>Sign up your org here!</Heading>
      <Text pb={15}>
        Sign up your organization to start Noodln today! Boost connectivity and
        combat work from home isolation for you and your team with one easy
        signup.
      </Text>
      {!isLoading ? (
        <Container w="70%" minWidth="300px">
          <form onSubmit={orgForm.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel>Organization Name</FormLabel>
                <Input
                  bg="white"
                  type="text"
                  name="orgName"
                  value={orgForm.values.orgName}
                  onChange={orgForm.handleChange}
                />
                <FormErrorMessage>
                  We need a name for your org!
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Contact Email</FormLabel>
                <Input
                  bg="white"
                  type="email"
                  name="orgContactEmail"
                  value={orgForm.values.orgContactEmail}
                  onChange={orgForm.handleChange}
                />
                <FormErrorMessage>
                  We need a name for your org!
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Contact Name</FormLabel>
                <Input
                  bg="white"
                  type="text"
                  name="orgContactName"
                  value={orgForm.values.orgContactName}
                  onChange={orgForm.handleChange}
                />
                <FormErrorMessage>
                  We need a name for your org!
                </FormErrorMessage>
              </FormControl>
              <Button bg="#982022" color="#d2caca" type="submit">
                Get Noodln!
              </Button>
            </VStack>
          </form>
        </Container>
      ) : (
        <Spinner size="xl" />
      )}
    </Flex>
  );
}
