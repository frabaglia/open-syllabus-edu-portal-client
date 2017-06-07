import React, {Component} from 'react';
import './component.sass';
import {Link} from 'react-router';

class MostFrecuentPublisherItemList extends Component {
// CAMBIAR ESTO Y SASS
  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="most-frecuent-publisher-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="publisher">
            <p>
              <Link to={{
                pathname: "/result/publisher",
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

export default MostFrecuentPublisherItemList
