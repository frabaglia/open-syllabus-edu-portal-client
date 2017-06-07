import React, {Component} from 'react';
import './component.sass';
import image from './Texas-University.png'
import {Link} from 'react-router';

class MostFrecuentInstitutionItemList extends Component {
// CAMBIAR ESTO Y SASS
  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="most-frecuent-institution-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="institution">
            <Link to={{
              pathname: "/result/school",
              query: {id:objectItem._id}
            }}>
              <img src={image} alt="institution-name"/>
              <p>{`${objectItem.name},`}<span>{` ${objectItem.country}`}</span></p>
              </Link>
          </div>
        </div>
      )
  }
}

export default MostFrecuentInstitutionItemList
