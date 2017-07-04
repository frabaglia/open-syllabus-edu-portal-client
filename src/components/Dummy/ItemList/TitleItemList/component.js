import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';
import ToolTip from '../../ToolTip/component.js'

class TitleItemList extends Component {

  render() {
      let objectItem = this.props.objectItem,
          first_name = objectItem.author.author_first || '',
          middle_name = objectItem.author.author_middle || '',
          last_name = objectItem.author.author_last || '';
      return (
        <div className="title-item">
          <div className="rank">{objectItem.rank}</div>
          <div className="title">
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
                query: {id:objectItem._id}
              }}>
                {`${first_name} ${middle_name} ${last_name}`}
              </Link>
            </span>
            <span>{objectItem.pub_year}</span>
          </div>
          <div className="appearances">{objectItem.appearences.total}</div>

            <div className="score">
              {/* <ToolTip tooltipText="Lorem Ipsum"> */}
              {objectItem.score}
              {/* </ToolTip> */}
            </div>

        </div>
      )
  }
}

export default TitleItemList
