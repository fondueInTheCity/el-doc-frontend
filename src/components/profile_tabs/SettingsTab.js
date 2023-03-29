import styled from 'styled-components'
import colors from '../../constants/colors'

const SettingsTab = () => {
  return (
    <SettingsContainer>
      <Title>Update password</Title>
      <Label>Password: </Label>
      <Input type='text' name={'email'} placeholder='Email' />
      <Label>Repeat password: </Label>
      <Input type='text' name={'name'} placeholder='Name' />
      <Button>Update password</Button>
    </SettingsContainer>
  )
}

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  height: 100%;
  width: 80%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Title = styled.h2`
  margin-bottom: 40px;

  color: ${colors.black};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 50%;
  max-width: 150px;
  height: 55px;

  color: ${colors.white};
  border-color: ${colors.black};
  background-color: ${colors.black};

  cursor: pointer;

  :hover {
    background: ${colors.gray};
  }
`

export const Label = styled.label`
  color: ${colors.black};
`

export const Input = styled.input`
  margin-bottom: 10px;
  height: 55px;
  width: 50%;
  max-width: 350px;
  padding: 0px 3%;

  color: ${colors.black};
  background-color: ${colors.white};

  ::placeholder {
    color: ${colors.gray};
  }
`

export default SettingsTab
