import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';
import image from './EEUU.svg'

class CountryItemList extends Component {

  render() {
      let objectItem = this.props.objectItem;
      return (
        <div className="country-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="country">
            <Link to={{
              pathname: "/result/country",
              query: {id:objectItem._id}
            }}>
              <img src={image} alt="country-name"/>
              <p>{objectItem.name}</p>
            </Link>
          </div>
          <div className="syllabi">{objectItem.syllabus_count}</div>
          <div className="schools">{objectItem.inst_count}</div>
        </div>
      )
  }
}

export default CountryItemList
