import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';

class TitleItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="title-item">
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
                {`${objectItem.author_first} ${objectItem.author_middle} ${objectItem.author_last}`}
              </Link>
            </span>
            <span>{objectItem.pub_year}</span>
          </div>
          <div className="appearances">{objectItem.appearances}</div>
          <div className="score">{objectItem.score}</div>
        </div>
      )
  }
}

export default TitleItemList
