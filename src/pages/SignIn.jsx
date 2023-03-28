/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'
import { login } from '../helpers/store/auth.slice'
import { store } from '../helpers/store'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  })

  const handleClick = (e) => {
    const { name, value } = e.target
    setSignInState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function onSubmit() {
    return store.dispatch(login(signInState))
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
        <Button onClick={onSubmit}>Sign In</Button>
        <LinkText to='/signup'>Don`t have account? Sign up</LinkText>
      </FormContainer>
      <ImageContainer>
        <img src='/images/pngegg.png' />
      </ImageContainer>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 91vh;

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
    width: 0;
    height: 0;

    opacity: 0;

    transition: opacity 0.5s ease-out, width 0.5s ease 0.5s,
      height 0.5s ease 0.5s;
  }
`

export const Title = styled.h2`
  margin-bottom: 40px;

  color: ${colors.black};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 55px;
  margin-top: 20px;
  margin-bottom: 20px;

  color: ${colors.white};
  background-color: ${colors.black};

  cursor: pointer;

  :hover {
    background-color: ${colors.gray};
  }
`

export const Label = styled.label`
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: 0.25em;

  font-family: Minion W01, Times, Times New Roman, serif;
  font-size: 16px;
  line-height: 20px;
  text-rendering: optimizeLegibility;
  text-align: left;

  color: ${colors.black};
  color: #000;
  border: 0;
`

export const Input = styled.input`
  height: 38px;
  padding: 0 3%;
  margin-bottom: 10px;
  height: 55px;
  width: 50%;
  margin: 0;

  font-family: inherit;
  font-weight: inherit;
  font-size: 100%;

  border-color: ${colors.black};
  color: ${colors.black};
  border-radius: 0;
  background: #fff;
  border: 1px solid #999;

  ::placeholder {
    color: ${colors.gray};
  }
`

export const LinkText = styled(Link)`
  text-align: center;
  font-size: 15px;
  font-family: 'inherit';

  color: ${colors.black};

  :hover {
    color: ${colors.gray};
  }
`

export default SignIn
