import styles from '../styles/Home.module.css'
import Profile from '../public/components/Profile'
import ChatterSignup from '../public/components/ChatterSignup'

export default function Home() {
  return (
    <div>
    <h1>Meet your new best friend!</h1>
      <Profile />
      <ChatterSignup />
  </div>
  )
}
