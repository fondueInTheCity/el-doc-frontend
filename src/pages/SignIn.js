import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'
import styled from 'styled-components'
import colors from '../constants/colors'

const SignIn = () => {
  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleClick = (e) => {
    const { name, value } = e.target
    setSignInState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const navigateToSignUp = () => {
    navigate('/signup')
  }

  const completeSignIn = () => {
    AuthService.signIn(signInState)
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
      <ImageContainer>
        <img src='/images/pdf.png' />
      </ImageContainer>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Title = styled.div`
  color: ${colors.white};
  margin-bottom: 40px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.yellow};
  border-radius: 45px;
  border-color: ${colors.yellow};
  background-color: ${colors.backgroundColor};
  width: 50%;
  height: 55px;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    background: ${colors.yellow};
    color: ${colors.backgroundColor};
  }
`

export const Label = styled.label`
  color: ${colors.yellow};
`

export const Input = styled.input`
  border-radius: 45px;
  border-color: ${colors.yellow};
  margin-bottom: 10px;
  height: 55px;
  width: 50%;
  color: ${colors.yellow};
`

export default SignIn
