import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';

class FieldItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="field-item">
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
          <div className="syllabi">{objectItem.syllabus_count}</div>
        </div>
      )
  }
}

export default FieldItemList
