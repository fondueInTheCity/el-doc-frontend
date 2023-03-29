import styled from 'styled-components'
import colors from './../../constants/colors'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id)
  }

  return (
    <NavTabItem onClick={handleClick} active={activeTab === id}>
      {title}
    </NavTabItem>
  )
}

const NavTabItem = styled.li`
  padding: 1rem;
  width: auto;

  list-style: none;
  text-align: center;

  border-bottom: 1px solid transparent;
  border-bottom-color: ${({ active }) => (active ? colors.black : 'none')};

  transition: all 0.7s;

  cursor: pointer;

  :hover {
    border-bottom-color: ${colors.black};
  }
`

export default TabNavItem
