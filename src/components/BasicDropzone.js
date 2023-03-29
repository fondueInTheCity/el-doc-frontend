import { useDropzone } from 'react-dropzone'
import { useEffect } from 'react'
import { store } from '../store'
import { fileAdded } from '../store/files.slice'
import styled from 'styled-components'
import colors from './../constants/colors'
import fileApi from '../api/FileApi'
import { useSelector } from 'react-redux'

function BasicDropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const userRedux = useSelector((x) => x.auth.entity)

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const addedFile = acceptedFiles[acceptedFiles.length - 1]

      fileApi.uploadFile(createFormData(addedFile))
      store.dispatch(fileAdded(addedFile))
    }
  }, [acceptedFiles])

  const createFormData = (file) => {
    const formData = new FormData()
    formData.append('ownerId', userRedux.id)
    formData.append('file', file)

    return formData
  }

  return (
    <DropzoneContainer {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Drag n drop some files here, or click to select files</p>
    </DropzoneContainer>
  )
}

const DropzoneContainer = styled.div`
  text-align: center;
  border: 4px dotted ${colors.black};
  padding: 36px;
  margin: 30px;
  cursor: pointer;
`

export default BasicDropzone
