import { useState } from 'react'
import TabNavItem from '../components/profile_tabs/TabNavItem'
import TabContent from '../components/profile_tabs/TabContent'
import UserInfoTab from '../components/profile_tabs/UserInfoTab'
import KeysInfoTab from '../components/profile_tabs/KeysInfoTab'
import OrganizationsInfoTab from '../components/profile_tabs/OrganizationsTab'
import SettingsTab from '../components/profile_tabs/SettingsTab'
import styled from 'styled-components'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <Container>
      <NavContainer>
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
  color: '#E8F0F2';
  flex-wrap: wrap;
  margin: 0;
  border-bottom: 1px solid #ccc;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`

export default Profile
