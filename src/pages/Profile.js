import { useState } from 'react'
import TabNavItem from '../components/profile_tabs/TabNavItem'
import TabContent from '../components/profile_tabs/TabContent'
import UserInfoTab from '../components/profile_tabs/UserInfoTab'
import KeysInfoTab from '../components/profile_tabs/KeysInfoTab'
import OrganizationsInfoTab from '../components/profile_tabs/OrganizationsTab'
import SettingsTab from '../components/profile_tabs/SettingsTab'
import styled from 'styled-components'
import colors from './../constants/colors'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('UserInfo')

  return (
    <Container>
      <NavContainer>
        <TabNavItem
          title='User Info'
          id='UserInfo'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Keys'
          id='Keys'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='User organizations'
          id='UserOrganizations'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Settings'
          id='Settings'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </NavContainer>
      <TabContent id='UserInfo' activeTab={activeTab}>
        <UserInfoTab />
      </TabContent>
      <TabContent id='Keys' activeTab={activeTab}>
        <KeysInfoTab />
      </TabContent>
      <TabContent id='UserOrganizations' activeTab={activeTab}>
        <OrganizationsInfoTab />
      </TabContent>
      <TabContent id='Settings' activeTab={activeTab}>
        <SettingsTab />
      </TabContent>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const NavContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;

  border-bottom: 1px solid ${colors.lightBlack};

  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`

export default Profile
