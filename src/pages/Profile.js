import { useEffect, useState } from 'react'
import axios from 'axios'
import { auth } from '../firebase/Firebase.js'

export default function Profile() {
  const [user, setUser] = useState({})

  // eslint-disable-next-line no-unused-vars
  const getCurrentUserInfo = async () => {
    const baseURL = `http://localhost:3000/api/users?email=${auth.user.email}`
    axios.get(baseURL).then((response) => {
      console.log(response)
      setUser(response)
    })
  }

  useEffect(() => {})

  return (
    <>
      <h1>${user.id}</h1>
      <img
        src='https://i.imgur.com/yXOvdOSs.jpg'
        alt='Hedy Lamarr'
        className='photo'
      />
      <ul>
        <li>Email: ${user.email}</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  )
}
