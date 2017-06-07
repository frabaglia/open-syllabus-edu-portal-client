import React, {Component} from 'react';
import './component.sass';
import {Link} from 'react-router'

class MostFrecuentFieldItemList extends Component {
// CAMBIAR ESTO Y SASS
  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="most-frecuent-field-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="field">
            <p>
              <Link to={{
                pathname: "/result/field",
                query: {id:objectItem._id}
              }}>
                {objectItem.name}
              </Link>
            </p>
          </div>
        </div>
      )
  }
}

export default MostFrecuentFieldItemList
