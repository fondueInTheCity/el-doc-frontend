import Checkbox from './Checkbox'
import styled from 'styled-components'
import colors from '../constants/colors'
import { useState, useEffect } from 'react'
import Icon from './Icon'

const Dropdown = ({ menu }) => {
  const [open, setOpen] = useState(false)
  const [icon, setIcon] = useState('arrow-right2')

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    setIcon(open ? 'arrow-down2' : 'arrow-right2')
  }, [open])

  return (
    <Container>
      <StateDropdownButton onClick={handleOpen}>
        State <Icon color='#000' size={10} icon={icon} />
      </StateDropdownButton>
      {open ? (
        <CheckList>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <Checkbox id={index} label={menuItem.text} checked={true} />
            </li>
          ))}
        </CheckList>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.white};
`
const StateDropdownButton = styled.button`
  padding: 22px 21px;
  border: 0;
  background-color: ${colors.white};
  cursor: pointer;
`

const CheckList = styled.ul`
  position: absolute;

  list-style-type: none;
  margin: 5px 0;
  padding: 0;

  border: 1px solid grey;
  width: 150px;
`

export default Dropdown
