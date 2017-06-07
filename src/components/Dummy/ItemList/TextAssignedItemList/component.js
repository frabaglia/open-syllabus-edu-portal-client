import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';

class TextAssignedItemList extends Component {

  render() {
      // let objectItem = this.props.objectItem;
      return (
        <div className="text-assigned-item">
          <div className="count">7</div>
          <div className="text">
            <p>
              <Link to={{
                pathname: "/result/title",
                query: {id:'id'}
              }}>
                MLA Handbook for Writers of Research Papers
              </Link>
            </p>
            <span className="name">
              <Link to={{
                pathname: "/result/author",
                query: {id:'id'}
              }}>
                Gibaldi, Joseph
              </Link>
            </span>
            <span>1942</span>
          </div>
        </div>
      )
  }
}

export default TextAssignedItemList
