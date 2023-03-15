/* eslint-disable no-unused-vars */
import { useDropzone } from 'react-dropzone'
import { useEffect } from 'react'
import CardContainer from '../components/CardContainer'
import { uploadFile } from '../api/FileApi'

function BasicDropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  const files = acceptedFiles.map((file) => file.path)
  const filesInfo = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData()
      formData.append('ownerUid', 11)
      formData.append('file', acceptedFiles[0])
      uploadFile(formData)
    }
  }, [acceptedFiles])

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
      <CardContainer files={files} />
      <aside>
        <h4>Files</h4>
        <ul>{filesInfo}</ul>
      </aside>
    </section>
  )
}

export default BasicDropzone
