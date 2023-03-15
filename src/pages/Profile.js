/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { auth } from '../firebase/Firebase.js'
import Header from '../components/Header'
import ElementMaker from '../components/ElementMaker.js'
import {
  Button,
  Container,
  ImageContainer,
  UserInfoContainer,
} from '../styles/UserProfileStyle'
import { getUserInfo, updateUserInfo } from '../api/UserApi.js'

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    id: 'hbjh',
    email: 'jnjn',
    fullName: 'dfdfd',
  })

  const handleClick = (e) => {
    const { name, value } = e.target
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const [showInputEle, setShowInputEle] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const getCurrentUserInfo = async (currentUid) => {
    getUserInfo(currentUid).then((response) => {
      setUserInfo(response.data[0])
    })
  }

  useEffect(() => {
    console.log(auth.currentUser)
    getCurrentUserInfo(auth.currentUser.uid)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <ImageContainer src='/images/pdf.png' />
        <UserInfoContainer>
          <h1>Id: {userInfo.uid}</h1>
          <strong>Email: </strong>
          <ElementMaker
            value={userInfo.email}
            handleChange={handleClick}
            name={'email'}
            handleDoubleClick={() => setShowInputEle(true)}
            handleBlur={() => setShowInputEle(false)}
            showInputEle={showInputEle}
          />
          <strong>Full Name: </strong>
          {/* Invoke the ElementMaker component with some attributes */}
          <ElementMaker
            value={userInfo.fullName}
            handleChange={handleClick}
            name={'fullName'}
            handleDoubleClick={() => setShowInputEle(true)}
            handleBlur={() => setShowInputEle(false)}
            showInputEle={showInputEle}
          />
          <Button onClick={updateUserInfo(userInfo)}>Update User Info</Button>
        </UserInfoContainer>
      </Container>
    </>
  )
}

export default Profile
