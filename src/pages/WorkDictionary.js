import '../App.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BasicDropzone from '../components/BasicDropzone'
import CardContent from './../components/CardContent'
import { useEffect } from 'react'
import { getUserFiles } from '../helpers/store/files.slice'
import { store } from '../helpers/store'
import styled from 'styled-components'
import colors from './../constants/colors'
import Dropdown from '../components/DropdownCheckbox'
import Search from './../components/Search'

const WorkDictionary = () => {
  const files = useSelector((x) => x.files.files)
  const auth = useSelector((x) => x.auth.entity)

  const [stateFilterOpen, setStateFilterOpen] = useState(false)

  const stateSelects = [
    { key: '23', text: 'All' },
    { key: '24', text: 'Signed' },
    { key: '25', text: 'Awaiting signing' },
    { key: '26', text: 'Not signed' },
    { key: '27', text: 'You have to sign' },
  ]

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
          trigger={<button onClick={handleOpen}>State</button>}
          menu={stateSelects}
        ></Dropdown>
        <Dropdown
          open={stateFilterOpen}
          trigger={<button onClick={handleOpen}>Options</button>}
          menu={[
            { key: '23', text: 'Menu 1' },
            { key: '24', text: 'Menu 2' },
          ]}
        ></Dropdown>
        <Search></Search>
      </Container>
      <div>
        <BasicDropzone />
        <CardFlex>
          {files.map((file, index) => (
            <CardContent fileName={file.name} id={file.id} key={index} />
          ))}
        </CardFlex>
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

const CardFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 100%;
  margin: 30px;
`

export default WorkDictionary
