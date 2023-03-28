import { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { getUserInfo } from '../../api/UserApi.js'
import AuthService from '../../services/auth.service'

const UserInfoTab = () => {
  const [userInfo, setUserInfo] = useState({
    id: 'hbjh',
    email: 'jnjn',
    name: 'dfdfd',
  })
  const [isDisabled, setIsDisabled] = useState(true)

  const handleClick = (e) => {
    const { name, value } = e.target
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const getCurrentUserInfo = (currentUid) => {
    getUserInfo(currentUid).then((response) => {
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
      <ImageContainer src='/images/pdf.png' />
      <UserInfoContainer>
        <Title>Id: {userInfo?.id}</Title>
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
        {isDisabled && (
          <Button onClick={inverseDisabled}>Update User Info</Button>
        )}
        {!isDisabled && (
          <Button onClick={inverseDisabled}>Confirm updated user Info</Button>
        )}
      </UserInfoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.img`
  border-radius: 50%;
  width: 20%;
  height: 30%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 100%;
  width: 80%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Title = styled.h2`
  color: ${colors.black};
  margin-bottom: 40px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.black};
  border-color: ${colors.black};
  background-color: ${colors.backgroundColor};
  width: 50%;
  height: 55px;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    background: ${colors.black};
    color: ${colors.backgroundColor};
  }
`

export const Label = styled.label`
  color: ${colors.black};
`

export const Input = styled.input`
  margin-bottom: 10px;
  height: 55px;
  width: 50%;
  color: ${colors.black};
  background-color: ${colors.white};
  padding: 0px 3%;
  ::placeholder {
    color: ${colors.gray};
  }
`

export default UserInfoTab
