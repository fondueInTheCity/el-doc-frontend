import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './../constants/colors'

const CardContent = (props) => {
  const fileLink = `/file/${props.id}`

  return (
    <LinkContainer id={'file-' + props.id} to={fileLink}>
      <DocumentImage
        src='/images/contract-svgrepo-com.svg'
        alt='img placeholder'
      />
      <DocumentName>{props.fileName}</DocumentName>
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  display: flex;
  width: 100%;
  padding-right: 0;
  max-height: 100 px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffcc;
  border-radius: 5px;
  margin-bottom: 1em;
  margin-right: 0;
  padding: 1em;
  margin: 10px;
  background-color: ${colors.white};
  text-decoration: none;
  border: 1px solid rgb(0, 0, 0);

  :visited {
    color: ${colors.black};
  }
  @media (min-width: 768px) {
    width: 10%;
    padding-right: 1em;
    :hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
    }
  }
`

const DocumentImage = styled.img`
  opacity: 1;
  max-width: 100%;
  height: 155px;
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
