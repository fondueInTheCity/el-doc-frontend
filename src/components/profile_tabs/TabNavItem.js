import styled from 'styled-components'
import colors from './../../constants/colors'

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id)
  }

  return (
    <NavTabItem
      onClick={handleClick}
      className={activeTab === id ? 'active' : ''}
    >
      {title}
    </NavTabItem>
  )
}

const NavTabItem = styled.li`
  padding: 1rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  border-bottom: 1px solid transparent;
  width: auto;
  :hover {
    border-bottom-color: ${colors.black};
  }
  &.active {
    border-bottom-color: ${colors.black};
  }
`

export default TabNavItem
