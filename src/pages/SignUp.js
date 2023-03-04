import { useState } from 'react'
import { signUp } from '../firebase/Firebase'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  FormContainer,
  ImageContainer,
  Title,
  Label,
  Button,
  Input,
} from '../components/AuthCommon'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const completeSignUp = () => {
    signUp(name, email, password)
  }

  const navigateToSignIn = () => {
    navigate('/signin')
  }

  return (
    <Container>
      <FormContainer>
        <Title>FunDoc</Title>
        <Label>Full Name</Label>
        <Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        />
        <Label>Email</Label>
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
        <Button onClick={completeSignUp}>Sign Up</Button>
        <Title>Already on FunDoc?</Title>
        <Button onClick={navigateToSignIn}>Click to Sign In</Button>
      </FormContainer>
      <ImageContainer />
    </Container>
  )
}

export default SignUp
