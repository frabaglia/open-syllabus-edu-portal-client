import React, {Component} from 'react';
// import {Link} from 'react-router';
import './component.sass';

class SyllabiItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="syllabi-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="title-email-container">
            <p onClick={this.props.click} className="title mid-font-size">
                {objectItem.title.titleName}
            </p>
            <span className="email">
                {objectItem.title.titleEmail}
            </span>
          </div>
        </div>
      )
  }
}

export default SyllabiItemList
