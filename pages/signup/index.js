import { useState } from "react";
import { useFormik } from "formik";
import { createOrg } from "../../adapters/api.js";
import {
  Text,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";

export default function Signup() {
  const orgForm = useFormik({
    initialValues: {
      orgName: "",
      orgContactEmail: "",
      orgContactName: "",
      orgTime: 12,
      orgTimeZone: "",
      chatterData: [],
    },
    onSubmit: (values) => {
      let org = {
        name: values.orgName,
        contact_email: values.orgContactEmail,
        contact_name: values.orgContactName,
        noodln_time: values.orgTime,
        timezone: values.orgTimeZone,
      };
      createOrg({
        organization: org,
        chatters: values.chatterData,
      });
    },
  });

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
      <Heading>Sign up your org here!</Heading>
      <Text>
        Sign up your organization to start Noodln today! Boost connectivity and
        combat work from home isolation for you and your team with one easy
        signup.
      </Text>
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
            <FormErrorMessage>We need a name for your org!</FormErrorMessage>
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
            <FormErrorMessage>We need a name for your org!</FormErrorMessage>
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
            <FormErrorMessage>We need a name for your org!</FormErrorMessage>
          </FormControl>
          <Button bg="#982022" color="#d2caca" type="submit">
            Get Noodln!
          </Button>
        </VStack>
      </form>
    </Flex>
  );
}
