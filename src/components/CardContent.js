import './CardContent.css'

const CardContent = (props) => {
  return (
    <div className='card-flex-wrapper'>
      <div className='card-flex-image'>
        <img src='/images/pdf.png' alt='img placeholder' />
      </div>
      <div className='card-flex-content'>
        <h3>{props.headerText}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default CardContent
