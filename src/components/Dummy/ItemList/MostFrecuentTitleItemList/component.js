import React, {Component} from 'react';
import './component.sass';
import {Link} from 'react-router';

class MostFrecuentTitleItemList extends Component {
// CAMBIAR ESTO y SASS
  render() {
    let objectItem = this.props.objectItem,
        author_first = objectItem.author_first || '',
        author_middle = objectItem.author_middle || '',
        author_last = objectItem.author_last || '';
      return (
        <div className="most-frecuent-title-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="title">
            <p>
              <Link to={{
                pathname: "/result/title",
                query: {id:objectItem._id}
              }}>
                {objectItem.title}
              </Link>
            </p>
            <span className="name">
              <Link to={{
                pathname: "/result/author",
                query: {id:objectItem._id}
              }}>
                {`${author_first} ${author_middle} ${author_last}`}
              </Link>
            </span>
            <span>{objectItem.pub_year}</span>
          </div>
        </div>
      )
  }
}

export default MostFrecuentTitleItemList
