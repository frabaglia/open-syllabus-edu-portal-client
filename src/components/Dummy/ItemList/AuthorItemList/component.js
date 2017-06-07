import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';
import image from './Mark_Twain.png'

class AuthorItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="author-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="author">
            <Link to={{
              pathname: "/result/author",
              query: {id:objectItem._id}
            }}>
              <img src={image} alt="author-name"/>
              <p>{`${objectItem.name_first} ${objectItem.name_last}`}</p>
            </Link>
          </div>
          <div className="appearances">{objectItem.appearances}</div>
          <div className="titles">{objectItem.text_count}</div>
        </div>
      )
  }
}

export default AuthorItemList
