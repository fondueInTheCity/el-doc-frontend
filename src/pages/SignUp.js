import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'
import {
  Container,
  FormContainer,
  ImageContainer,
  Title,
  Label,
  Button,
  Input,
  LinkText,
} from './SignIn'

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
    AuthService.signUp(userInfo).then(() => navigate('/signin'))
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
        <LinkText to='/signin'>Already on FunDoc? Sign in</LinkText>
      </FormContainer>
      <ImageContainer>
        <img src='/images/pngegg.png' />
      </ImageContainer>
    </Container>
  )
}

export default SignUp
