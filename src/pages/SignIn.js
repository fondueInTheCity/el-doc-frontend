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
} from '../styles/AuthStyle'

const SignIn = () => {
  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  })
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleClick = (e) => {
    const { name, value } = e.target
    setSignInState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  const navigateToSignUp = () => {
    navigate('/signup')
  }

  const completeSignIn = () => {
    signIn(signInState)
  }

  return (
    <Container>
      <FormContainer>
        <Title>Log In to FunDoc</Title>
        <Label>Email Address</Label>
        <Input
          name='email'
          type='text'
          value={signInState.email}
          onChange={handleClick}
          placeholder='Email'
        />
        <Label>Password</Label>
        <Input
          name='password'
          type='password'
          value={signInState.password}
          onChange={handleClick}
          placeholder='Password'
        />
        <Button onClick={completeSignIn}>Sign In</Button>
        <Button onClick={navigateToSignUp}>Sign up</Button>
      </FormContainer>
      <ImageContainer src='/images/pdf.png' />
    </Container>
  )
}

export default SignIn
