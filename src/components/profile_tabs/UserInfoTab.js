import { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { getUserInfo } from '../../api/UserApi.js'
import AuthService from '../../services/auth.service'

const UserInfoTab = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    name: '',
  })
  const [isDisabled, setIsDisabled] = useState(true)

  const handleClick = (e) => {
    const { name, value } = e.target
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const getCurrentUserInfo = (currentId) => {
    getUserInfo(currentId).then((response) => {
      setUserInfo(response.data[0])
    })
  }

  const getProfileUser = () => {
    const currentUser = AuthService.getCurrentUser()
    if (currentUser) {
      getCurrentUserInfo(currentUser.id)
    }
  }

  const inverseDisabled = () => {
    setIsDisabled(!isDisabled)
  }

  useEffect(() => {
    getProfileUser()
  }, [])

  return (
    <Container>
      <ImageContainer src='/images/login_fon.jpg' />
      <UserInfoContainer>
        <Title>User info</Title>
        <Label>Email: </Label>
        <Input
          type='text'
          value={userInfo?.email}
          onChange={handleClick}
          name={'email'}
          disabled={isDisabled}
          placeholder='Email'
        />
        <Label>Full Name: </Label>
        <Input
          type='text'
          value={userInfo?.name}
          onChange={handleClick}
          name={'name'}
          disabled={isDisabled}
          placeholder='Name'
        />
        {isDisabled ? (
          <Button onClick={inverseDisabled}>Update User Info</Button>
        ) : (
          <Button onClick={inverseDisabled}>Confirm updated user Info</Button>
        )}
      </UserInfoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.img`
  width: 270px;
  height: 270px;
  margin: 68px;

  border-radius: 50%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  height: 100%;
  width: 80%;
  @media screen and (max-width: 600px) {
    width: 100%;
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
  margin-bottom: 20px;
  width: 50%;
  max-width: 150px;
  height: 55px;

  color: ${colors.white};
  border-color: ${colors.black};
  background-color: ${colors.black};

  cursor: pointer;

  :hover {
    background: ${colors.gray};
  }
`

export const Label = styled.label`
  color: ${colors.black};
`

export const Input = styled.input`
  margin-bottom: 10px;
  height: 55px;
  width: 50%;
  max-width: 350px;
  padding: 0px 3%;

  color: ${colors.black};
  background-color: ${colors.white};

  ::placeholder {
    color: ${colors.gray};
  }
`

export default UserInfoTab
