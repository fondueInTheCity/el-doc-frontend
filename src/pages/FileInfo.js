import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import fileApi from '../api/FileApi'
import { useState } from 'react'
import colors from '../constants/colors'

function FileInfo() {
  const [fileInfo, setFileInfo] = useState({})
  const pathParams = useParams()

  const getFileById = async () => {
    let file
    await fileApi
      .getFileInfoById(pathParams.id)
      .then((res) => (file = res.data))
    if (file) {
      setFileInfo(file)
    }
  }

  useEffect(() => {
    getFileById()
  }, [])

  return (
    <Container>
      <h1>{fileInfo?.name}</h1>
      <FileImage src='/images/contract-svgrepo-com.svg' />
      <h2>Owner: Aizek Dobrush</h2>
      <Button>Download</Button>
      <Button>Send to sign</Button>
      <ManipulateContainer>
        <Button>Sign</Button>
        <Button>Not Sign</Button>
      </ManipulateContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const FileImage = styled.img`
  width: 155px;
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

const ManipulateContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default FileInfo
