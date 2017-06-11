import React, {Component} from 'react';
import './component.sass';
import image from './Mark_Twain.png'
import {Link} from 'react-router';

class MostFrecuentAuthorItemList extends Component {
// CAMBIAR ESTO Y SASS
  render() {
      let objectItem = this.props.objectItem,
          name_first = objectItem.name_first || '',
          name_middle = objectItem.name_middle || '',
          name_last = objectItem.name_last || '';

      return (
        <div className="most-frecuent-author-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="author">
            <Link to={{
              pathname: "/result/author",
              query: {id:objectItem._id}
            }}>
              <img src={image} alt="author-name"/>
              <p>{`${name_first} ${name_middle} ${name_last}`}</p>
            </Link>
          </div>
        </div>
      )
  }
}

export default MostFrecuentAuthorItemList
