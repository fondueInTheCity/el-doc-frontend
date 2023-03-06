import './CardContent.css'
import CardContent from './CardContent'
/* eslint-disable prettier/prettier */
const CardItem = (props) => {
    return(
        <div id={'file-' + props.id} className="card-flex-item">
            <CardContent
        headerText={props.fileName}
        description={props.fileName}
        url='https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout'
      />
        </div>
    );
}

export default CardItem
