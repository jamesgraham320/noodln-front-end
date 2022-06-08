import styles from '../styles/Home.module.css'
import Profile from '../public/components/Profile'
import ChatterSignup from '../public/components/ChatterSignup'
import {getChatters} from '../public/adapters/api.js'
import {Center, Box} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box mt={50} w="50%">
    <h1>Meet your new best friend!</h1>
      <Profile />
      <ChatterSignup />
  </Box>
  )
}
