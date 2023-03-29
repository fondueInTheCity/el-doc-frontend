import styled from 'styled-components'
import colors from '../../constants/colors'
import { useState } from 'react'

const KeysInfoTab = () => {
  const [keyInfo] = useState({
    name: 'key',
    dateStart: '29.03.2023',
    dateEnd: '30.02.2045',
    sshOpenKey: 'dfsdfnkaknnqlwlekf',
  })

  return (
    <KeysContainer>
      <Title>Key info</Title>
      <KeyInfoField>Name: {keyInfo.name}</KeyInfoField>
      <KeyInfoField>Name: {keyInfo.dateStart}</KeyInfoField>
      <KeyInfoField>Name: {keyInfo.dateEnd}</KeyInfoField>
      <KeyInfoField>Name: {keyInfo.sshOpenKey}</KeyInfoField>
      <ManipulateContainer>
        <Button>Update valid key</Button>
        <Button>Recreate loosed key</Button>|
      </ManipulateContainer>
    </KeysContainer>
  )
}

const KeysContainer = styled.div`
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

const Title = styled.h2`
  margin-bottom: 40px;

  color: ${colors.black};
`

const KeyInfoField = styled.h4`
  margin-bottom: 40px;

  color: ${colors.black};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 30px;
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

const ManipulateContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default KeysInfoTab
