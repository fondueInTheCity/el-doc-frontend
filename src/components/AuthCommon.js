import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  color: #fff;
  display: flex;
  font-size: 40px;
  font-weight: bold;
  white-space: nowrap;
  flex-direction: column;
  margin-bottom: 1em;
`

export const Button = styled.button`
  color: #f9fd6d;
  background-color: #16202a;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  flex-direction: column;
  border-radius: 45px;
  border-color: #f9fd6d;
  box-sizing: border-box;
  width: 50%;
  align-items: center;
  display: flex;
  height: 55px;
  justify-content: center;
  margin-bottom: 1em;
  cursor: pointer;
`

export const Label = styled.label`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  flex-direction: column;
`

export const Input = styled.input`
  color: #6b6b6b;
  font-size: 14px;
  height: 55px;
  font-weight: 500;
  flex-direction: column;
  border-radius: 45px;
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 1em;
`
