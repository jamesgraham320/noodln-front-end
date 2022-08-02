import { useState } from "react";
import { useFormik } from "formik";
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

export function getServerSideProps() {
  fetch();
}

export default function SignupLink({ id }) {
  return <Heading>Signup here!</Heading>;
}
