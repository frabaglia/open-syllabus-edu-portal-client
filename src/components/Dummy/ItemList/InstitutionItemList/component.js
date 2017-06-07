import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';
import image from './Texas-University.png'

class InstitutionItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="institution-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="institution">
            <Link to={{
              pathname: "/result/school",
              query: {id:objectItem._id}
            }}>
              <img src={image} alt="institution-name"/>
              <p>{`${objectItem.name}, `}<span>{objectItem.country}</span></p>
            </Link>
          </div>
          <div className="syllabi">{objectItem.syllabus_count}</div>
        </div>
      )
  }
}

export default InstitutionItemList
