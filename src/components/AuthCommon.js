import styled from 'styled-components'
import colors from '../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 274px;
  }
`
export const ImageContainer = styled.div`
  background-image: url('/images/login_fon.jpg');
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 900px;
  }
`

export const Title = styled.div`
  color: ${colors.white};
  margin-bottom: 40px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.yellow};
  border-radius: 45px;
  border-color: ${colors.white};
  background-color: ${colors.backgroundColor};
  width: 50%;
  height: 55px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const Label = styled.label`
  color: ${colors.yellow};
`

export const Input = styled.input`
  border-radius: 45px;
  border-color: ${colors.white};
  background-color: ${colors.backgroundColor};
  margin-bottom: 10px;
  height: 55px;
  width: 50%;
  color: ${colors.yellow};
`
