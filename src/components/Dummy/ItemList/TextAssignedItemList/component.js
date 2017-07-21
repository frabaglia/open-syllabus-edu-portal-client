import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';

class TextAssignedItemList extends Component {

  render() {
      let objectItem = this.props.objectItem,
          first_name = objectItem.author.author_first || '',
          middle_name = objectItem.author.author_middle || '',
          last_name = objectItem.author.author_last || '';
      return (
        <div className="text-assigned-item">
          <div className="count">{objectItem.rank}</div>
          <div className="text">
            <p>
              <Link to={{
                pathname: "/university-portal/result/title",
                query: {id:objectItem._id}
              }}>
                {objectItem.name}
              </Link>
            </p>
            <span className="name">
              <Link to={{
                pathname: "/university-portal/result/author",
                query: {id:objectItem.author._id}
              }}>
                {`${first_name}, ${middle_name} ${last_name}`}
              </Link>
            </span>
            <span>{objectItem.pub_year}</span>
          </div>
        </div>
      )
  }
}

export default TextAssignedItemList
