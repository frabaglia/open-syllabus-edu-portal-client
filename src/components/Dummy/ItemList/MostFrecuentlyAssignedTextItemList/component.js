import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';

class MostFrecuentlyAssignedTextItemList extends Component {

  render() {
      let objectItem = this.props.objectItem,
          first_name = objectItem.author.author_first || '',
          middle_name = objectItem.author.author_middle || '',
          last_name = objectItem.author.author_last || '';
      return (
        <li>
          <p className="name-title">
            <Link
              // to={{
              // pathname: "/result/title",
              // query: {id:objectItem._id}
              // }}
            >
              {objectItem.title}
            </Link>
          </p>
          <p className="name-author">
            {`${first_name} ${middle_name} ${last_name}`}
          </p>
          <p className="name-editorial">
            <Link
              // to={{
              // pathname: "/result/publisher",
              // query: {id:objectItem.publisher._id}
              // }}
            >
              {objectItem.publisher.name}
            </Link>
            , {objectItem.pub_year}
          </p>
          <div>
            <span className="appearances">
              {`${objectItem.appearences.by_unique_field.syllabus_count} appearances in ${objectItem.appearences.by_unique_field.name}`}
            </span>
          </div>
        </li>
      )
  }
}

export default MostFrecuentlyAssignedTextItemList
