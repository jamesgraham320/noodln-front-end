import styles from '../styles/Home.module.css'
import ChatterSignup from '../public/components/ChatterSignup'
import Head from 'next/head';
import {getChatters} from '../public/adapters/api.js'
import {
  Text, 
  Container, 
  Center, 
  Box, 
  Heading, 
  Flex, 
  Spinner,
  Image,
} from '@chakra-ui/react'
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import logo from '../public/logos/Noodln-big.jpeg';

export default function Home() {
  const [cookies] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  return <>
    <Head>
      <title>Noodln - Lunch buddies!</title>
    </Head>
    { !accountCreated ? (
    <Flex bgColor='#fbf2ea' mt={50} mb={100} ml='auto' mr='auto' maxW={'500px'} w={'90vw'} align='center' direction='column' >
      <Image mb={10} height={150} width='auto' src="/logos/Noodln-big.jpeg" alt="Noodln Logo"/>
          <Heading as='h1'>Noodln</Heading>
      {!isLoading ? 
          <>
          <br />
          <p as='h2'>
            Start Noodln with someone new at noon every day! Sign up now to meet your daily lunch companion. Grab your sandwich and hit it off!
          </p>
          <Container w="70%" minWidth="300px">
          <ChatterSignup setAccountCreated={setAccountCreated} setIsLoading={setIsLoading} /> 
          </Container>
          </>
          :
          <Spinner size='xl' />
      }
  </Flex>
  ) : 
    <Flex mt={50} ml='auto' mb={100} mr='auto' maxW={'500px'} w={'90vw'} align='center' direction='column' >
      <Text fontSize='2xl'>
        Congrats on signing up! Check your email for more info and get ready to start making Smalltalk!
      </Text>
    </Flex>
  }</>
    
}

