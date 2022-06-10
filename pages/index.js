import styles from '../styles/Home.module.css'
import ChatterSignup from '../public/components/ChatterSignup'
import {getChatters} from '../public/adapters/api.js'
import {Center, Box, Heading, Flex} from '@chakra-ui/react'
import { useCookies } from 'react-cookie';

export default function Home() {
  const [cookies] = useCookies();
  console.log(cookies);
  return (
    <Flex mt={50} ml='auto' mr='auto' w={500} align='center' direction='column' >
      <Heading as='h1'>Noodln</Heading>
      <br />
      <Heading as='h2' size='xl'>Get Noodln with someone new at noon every day! Sign up now to meet your daily lunch companion! 
      Grab your sandwich and hit it off!</Heading>
      <ChatterSignup  />
  </Flex>
  )
}
