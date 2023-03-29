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
  width: auto;

  list-style: none;
  text-align: center;

  border-bottom: 1px solid transparent;

  transition: all 0.7s;

  cursor: pointer;

  :hover {
    border-bottom-color: ${colors.black};
  }
  &.active {
    border-bottom-color: ${colors.black};
  }
`

export default TabNavItem
