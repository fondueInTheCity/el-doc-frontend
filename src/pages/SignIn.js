import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, signIn } from '../firebase/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  Container,
  FormContainer,
  ImageContainer,
  Title,
  Label,
  Button,
  Input,
} from '../components/AuthCommon'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, ,] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const navigateToSignUp = () => {
    navigate('/signup')
  }

  const completeSignIn = () => {
    signIn(email, password)
  }

  return (
    <Container>
      <FormContainer>
        <Title>Log In to FunDoc</Title>
        <Label>Email Address</Label>
        <Input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <Label>Password</Label>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <Button onClick={completeSignIn}>Sign In</Button>
        <Button onClick={navigateToSignUp}>Sign up</Button>
      </FormContainer>
      <ImageContainer />
    </Container>
  )
}

export default SignIn
