import React, {Component} from 'react';
import './component.sass';
import image from './EEUU.svg'

class MostFrecuentCountrydItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="most-frecuent-country-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="country">
            <img src={image} alt="country-name"/>
            <p>{objectItem.name}</p>
          </div>
        </div>
      )
  }
}

export default MostFrecuentCountrydItemList
