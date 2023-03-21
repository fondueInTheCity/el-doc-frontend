import styled from 'styled-components'

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
  width: auto;
  :hover {
    background: rgba(50, 224, 196, 0.15);
  }
  .active {
    background: '#39A2DB';
  }
`

export default TabNavItem
