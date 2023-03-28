import './toel.css'
import Checkbox from './Checkbox'
import styled from 'styled-components'
import colors from './../constants/colors'
import { useState } from 'react'

const Dropdown = ({ menu }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <StateDropdownButton onClick={handleOpen}>Dropdown</StateDropdownButton>
      {open ? (
        <ul className='menu'>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <Checkbox id={index} label={menuItem.text} checked={true} />
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.backgroundColor};
`
const StateDropdownButton = styled.button`
  padding: 22px 21px;
  border: 0;
  background-color: ${colors.backgroundColor};
  cursor: pointer;
`

export default Dropdown
