import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './../constants/colors'

const CardContent = (props) => {
  const fileLink = `/file/${props.id}`

  return (
    <LinkContainer id={'file-' + props.id} to={fileLink}>
      <DocumentImage src='/images/contract-svgrepo-com.svg' />
      <DocumentName>{props.fileName}</DocumentName>
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 10px;
  min-height: 200px;

  text-decoration: none;

  background-color: ${colors.white};
  border: 1px solid rgb(0, 0, 0);

  :visited {
    color: ${colors.black};
  }
  @media (min-width: 768px) {
    width: 10%;
    :hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
    }
  }
`

const DocumentImage = styled.img`
  max-width: 100%;
  height: 155px;

  opacity: 1;
`

const DocumentName = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  color: ${colors.black};

  :visited {
    color: ${colors.black};
  }
`

export default CardContent
