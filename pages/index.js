import styles from '../styles/Home.module.css'
import ChatterSignup from '../public/components/ChatterSignup'
import {getChatters} from '../public/adapters/api.js'
import {Text, Center, Box, Heading, Flex, Spinner} from '@chakra-ui/react'
import { useCookies } from 'react-cookie';
import { useState } from 'react';

export default function Home() {
  const [cookies] = useCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);


  return !accountCreated ? (
    <Flex mt={50} ml='auto' mr='auto' maxW={'500px'} w={'90vw'} align='center' direction='column' >
          <Heading as='h1'>Noodln</Heading>
      {!isLoading ? 
          <>
          <br />
          <p as='h2'>
            Get Noodln with someone new at noon every day! Sign up now to meet your daily lunch companion! Grab your sandwich and hit it off!
          </p>
          <ChatterSignup setAccountCreated={setAccountCreated} setIsLoading={setIsLoading} /> 
          </>
          :
          <Spinner size='xl' />
      }
  </Flex>
  ) : 
    <Flex mt={50} ml='auto' mr='auto' maxW={'500px'} w={'90vw'} align='center' direction='column' >
      <Text fontSize='2xl'>
        Congrats on signing up! Check your email for more info and get ready to start making Smalltalk!
      </Text>
    </Flex>
    
}
