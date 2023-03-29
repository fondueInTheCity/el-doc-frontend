import { useState } from 'react'
import styled from 'styled-components'
import colors from './../constants/colors'

const Checkbox = ({ id, label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false
  const [isChecked, setIsChecked] = useState(defaultChecked)
  return (
    <Label htmlFor={id}>
      <Input
        id={id}
        type='checkbox'
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        {...props}
      />
      {label}
    </Label>
  )
}

const Label = styled.label`
  display: block;
  padding: 12px;
  margin: 0;

  background-color: white;
  :hover {
    background-color: ${colors.gray};
  }
  input: {
    accent-color: #000;
  }
`

const Input = styled.input`
  accent-color: #000;
`

export default Checkbox
