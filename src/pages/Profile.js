import { useEffect, useState } from 'react'
import axios from 'axios'
import { auth } from '../firebase/Firebase.js'
import Header from '../components/Header'
import styled from 'styled-components'
import ElementMaker from '../components/ElementMaker.js'

export default function Profile() {
  const [user, setUser] = useState({})
  const [fullName, setFullName] = useState('df')
  const [showInputEle, setShowInputEle] = useState(false)

  const getCurrentUserInfo = async () => {
    console.log(auth.currentUser)
    const baseURL = `http://localhost:3000/api/users/${auth.currentUser.uid}`
    axios.get(baseURL).then((response) => {
      console.log(response)
      setUser(response.data[0])
    })
  }

  useEffect(() => {
    getCurrentUserInfo()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <img
            src='https://i.imgur.com/yXOvdOSs.jpg'
            alt='Hedy Lamarr'
            className='photo'
          />
        </ImageContainer>
        <UserInfoContainer>
          <h1>Id: {user.id}</h1>
          <h2>Email: {user.email}</h2>
          <h2>Name: {user.name}</h2>
          <strong>Full Name: </strong>
          {/* Invoke the ElementMaker component with some attributes */}
          <ElementMaker
            value={fullName}
            handleChange={(e) => setFullName(e.target.value)}
            handleDoubleClick={() => setShowInputEle(true)}
            handleBlur={() => setShowInputEle(false)}
            showInputEle={showInputEle}
          />
        </UserInfoContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
`

const ImageContainer = styled.div`
  display: flex;

  width: 30%;
`

const UserInfoContainer = styled.div``
