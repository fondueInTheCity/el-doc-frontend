import { useState } from 'react'
import TabNavItem from './TabNavItem'
import TabContent from './TabContent'
import UserInfoTab from './UserInfoTab'
import KeysInfoTab from './KeysInfoTab'
import styled from 'styled-components'
import OrganizationsInfoTab from './OrganizationsTab'
import SettingsTab from './SettingsTab'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <Container>
      <NavContainer className='nav'>
        <TabNavItem
          title='User Info'
          id='tab1'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Keys'
          id='tab2'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='User organizations'
          id='tab3'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Settings'
          id='tab4'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </NavContainer>

      <div className='outlet'>
        <TabContent id='tab1' activeTab={activeTab}>
          <UserInfoTab />
        </TabContent>
        <TabContent id='tab2' activeTab={activeTab}>
          <KeysInfoTab />
        </TabContent>
        <TabContent id='tab3' activeTab={activeTab}>
          <OrganizationsInfoTab />
        </TabContent>
        <TabContent id='tab4' activeTab={activeTab}>
          <SettingsTab />
        </TabContent>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`

const NavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
  background: #053742;
  margin: 3.5rem auto 1.5rem;
  padding: 2rem 1rem;
  color: '#E8F0F2';
  border-radius: 2rem;
  flex-wrap: wrap;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`

export default Tabs
