import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';
import images from './Mark_Twain.png'

class AuthorItemList extends Component {

  render() {

    let objectItem = this.props.objectItem,
      first_name = objectItem.author_first || '',
      middle_name = objectItem.author_middle || '',
      last_name = objectItem.author_last || '',
      image = objectItem.image || images;
      return (
        <div className="author-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="author">
            <Link to={{
              pathname: "/university-portal/result/author",
              query: {id:objectItem._id}
            }}>
              <img src={image} alt="author-name"/>
              <p>{`${first_name} ${middle_name} ${last_name}`}</p>
            </Link>
          </div>
          <div className="appearances">{objectItem.appearences.total}</div>
          <div className="titles">{objectItem.text_count}</div>
        </div>
      )
  }
}

export default AuthorItemList
