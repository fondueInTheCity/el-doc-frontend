/* eslint-disable no-unused-vars */
import '../App.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BasicDropzone from '../components/BasicDropzone'
import CardContent from './../components/CardContent'
import { useEffect } from 'react'
import { getUserFiles } from '../helpers/store/files.slice'
import { store } from '../helpers/store'
import FileInfoModal from '../components/FileInfoModal'
import styled from 'styled-components'
import colors from './../constants/colors'
import Dropdown from '../components/Dropdown'
import Search from './../components/Search'

const WorkDictionary = () => {
  const files = useSelector((x) => x.files.files)
  const auth = useSelector((x) => x.auth.entity)

  const [stateFilterOpen, setStateFilterOpen] = useState(false)

  const handleOpen = () => {
    setStateFilterOpen(!stateFilterOpen)
  }

  useEffect(() => {
    store.dispatch(getUserFiles(auth.id))
  }, [])

  return (
    <>
      <Container>
        <Dropdown
          open={stateFilterOpen}
          trigger={<button onClick={handleOpen}>Dropdown</button>}
          menu={[
            { key: '23', text: 'Menu 1' },
            { key: '24', text: 'Menu 2' },
          ]}
        ></Dropdown>
        <Dropdown
          open={stateFilterOpen}
          trigger={<button onClick={handleOpen}>Dropdown</button>}
          menu={[
            { key: '23', text: 'Menu 1' },
            { key: '24', text: 'Menu 2' },
          ]}
        ></Dropdown>
        <Search></Search>
      </Container>
      <div>
        <BasicDropzone />
        <section className='container'>
          <div className='card-flex'>
            {files.map((file, index) => (
              <CardContent fileName={file.name} id={file.id} key={index} />
            ))}
          </div>
        </section>
        <FileInfoModal />
      </div>
    </>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  background-color: ${colors.white};
  border-bottom: 1px solid #ccc;
`

const StateDropdownButton = styled.button`
  padding: 22px 21px;
  border: 0;
  background-color: ${colors.backgroundColor};
  cursor: pointer;
`

export default WorkDictionary
