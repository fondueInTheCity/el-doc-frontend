import './CardContent.css'
import CardItem from './CardItem'

const CardContainer = (props) => {
  var cards = []
  for (var i = 0; i < props.files.length; i += 1) {
    cards.push(<CardItem fileName={props.files[i]} id={i} />)
  }
  return <div className='card-flex'>{cards}</div>
}

export default CardContainer
