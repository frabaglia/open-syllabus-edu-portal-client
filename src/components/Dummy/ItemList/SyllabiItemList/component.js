import React, {Component} from 'react';
// import {Link} from 'react-router';
import './component.sass';

class SyllabiItemList extends Component {

  renderSyllabi = () =>{
    let syllabi;
    if(this.props.isInstructorEmails){
      syllabi = (
        <div className="title-email-container">
          <p onClick={this.props.click} className="title small-font-size">
              {this.props.objectItem.title.titleName}
          </p>
          <span className="email">
              {this.props.objectItem.title.titleEmail}
          </span>
        </div>
      )
    }
    else {
      syllabi = (
        <div className="title-email-container">
          <p onClick={this.props.click} className="title small-font-size">
              {`..."${this.props.objectItem.title.titleName}"...`}
          </p>
        </div>
      )
    }

    return syllabi
  }

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="syllabi-item">
          <div className="rank">{objectItem.rank}</div>
          {this.renderSyllabi()}
        </div>
      )
  }
}

export default SyllabiItemList
