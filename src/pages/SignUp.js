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
} from '../styles/AuthStyle'

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleClick = (e) => {
    const { name, value } = e.target
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const completeSignUp = () => {
    signUp(signUp)
    navigateToSignIn()
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
          name='name'
          type='text'
          value={userInfo.name}
          onChange={handleClick}
          placeholder='Full Name'
        />
        <Label>Email</Label>
        <Input
          name='email'
          type='text'
          value={userInfo.email}
          onChange={handleClick}
          placeholder='Email'
        />
        <Label>Password</Label>
        <Input
          name='password'
          type='password'
          value={userInfo.password}
          onChange={handleClick}
          placeholder='Password'
        />
        <Button onClick={completeSignUp}>Sign Up</Button>
        <Title>Already on FunDoc?</Title>
        <Button onClick={navigateToSignIn}>Click to Sign In</Button>
      </FormContainer>
      <ImageContainer src='/images/pdf.png' />
    </Container>
  )
}

export default SignUp
