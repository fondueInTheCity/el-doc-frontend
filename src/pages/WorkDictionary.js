import '../App.css'
import BasicDropzone from '../components/BasicDropzone'
import CardContent from './../components/CardContent'
import { useEffect } from 'react'
import { getUserFiles } from '../store/files.slice'
import { store } from '../store'
import styled from 'styled-components'
import colors from './../constants/colors'
import Dropdown from '../components/DropdownCheckbox'
import Search from './../components/Search'
import { useSelector } from 'react-redux'

const WorkDictionary = () => {
  const userRedux = useSelector((x) => x.auth.entity)

  const filesReducer = useSelector((x) => x.files.files)

  const stateSelects = [
    { key: '23', text: 'All' },
    { key: '24', text: 'Signed' },
    { key: '25', text: 'Awaiting signing' },
    { key: '26', text: 'Not signed' },
    { key: '27', text: 'You have to sign' },
  ]

  const formatSelects = [
    { key: '13', text: 'All' },
    { key: '14', text: 'Pdf' },
    { key: '15', text: 'Doc' },
  ]

  useEffect(() => {
    store.dispatch(getUserFiles(userRedux.id))
  }, [])

  return (
    <>
      <Container>
        <Dropdown menu={stateSelects} name='Format'></Dropdown>
        <Dropdown menu={formatSelects} name='State'></Dropdown>
        <Search></Search>
      </Container>
      <div>
        <BasicDropzone />
        <CardFlex>
          {filesReducer.map((file, index) => (
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

  margin: 30px;
`

export default WorkDictionary
