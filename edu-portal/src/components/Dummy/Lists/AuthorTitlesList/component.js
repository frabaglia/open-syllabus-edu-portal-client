import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';


class AuthorTitlesList extends Component {

  renderAuthorTitleItem = () =>
  {
    let FieldItemsList = [];
    if(this.props.store !== []) {
      this.props.store.map ( (item, i) => {
        FieldItemsList.push(
          <li key={i}>
            <p className="name-title">
              <Link to={{
                pathname: "/result/title",
                query: {id:item._id}
              }}>
                {item.title}
              </Link>
            </p>
            <p className="name-editorial">
              <Link to={{
                pathname: "/result/publisher",
                query: {id:item.publisher._id}
              }}>
              {item.publisher.name}
              </Link>
              , {item.pub_year}
            </p>
            <div>
              <span className="appearances">
                {`${item.appearences.by_unique_field.syllabus_count} appearances in ${item.appearences.by_unique_field.name}`}
              </span>
              <span className="unattributed">{`${item.unattributed} unattributed`}</span>
              <span className="score">{`SCORE ${item.score}`}</span>
            </div>
          </li>
        )
      });
    }

    return FieldItemsList;
  }

  render() {

      return (
        <div className="author-titles-list">
          <p className="name-seccion">
            Author Titles
          </p>
          <ul>
            {this.renderAuthorTitleItem()}
          </ul>
        </div>
      )
  }
}

export default AuthorTitlesList
