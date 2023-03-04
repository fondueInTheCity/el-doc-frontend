import styled from 'styled-components'
import colors from '../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`
export const ImageContainer = styled.div`
  background-image: url('/images/login_fon.jpg');
  width: 50%;
`

export const Title = styled.div`
  color: ${colors.white};
  margin-bottom: 40px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.white};
  background-color: ${colors.black};
  border-radius: 45px;
  border-color: ${colors.white};
  box-sizing: border-box;
  width: 50%;
  height: 55px;
  margin-bottom: 3px;
  cursor: pointer;
`

export const Label = styled.label`
  color: ${colors.white};
`

export const Input = styled.input`
  color: #6b6b6b;
  height: 55px;
  border-radius: 45px;
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 10px;
`
