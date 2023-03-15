import styled from 'styled-components'
import colors from './../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

export const ImageContainer = styled.img`
  border-radius: 50%;
  width: 20%;
  height: 30%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
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
