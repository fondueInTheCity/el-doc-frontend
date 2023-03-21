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
        />
        <Label>Full Name: </Label>
        <Input
          type='text'
          value={userInfo?.name}
          onChange={handleClick}
          name={'name'}
          disabled={isDisabled}
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
  color: ${colors.black};
`

export default UserInfoTab
