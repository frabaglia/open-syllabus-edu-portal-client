import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';

class PublisherItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="publisher-item">
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
          <div className="appearances">{objectItem.assignment_count}</div>
          <div className="titles">{objectItem.text_count}</div>
        </div>
      )
  }
}

export default PublisherItemList
