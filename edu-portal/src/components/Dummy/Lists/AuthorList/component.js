import React, {Component} from 'react';
import './component.sass';
import AuthorItemList from '../../ItemList/AuthorItemList/component.js';

class AuthorList extends Component {

  renderAuthorItemList = () =>
  {
    let AuthorItemsList = [];
    if(this.props.store !== []) {
      this.props.store.map ( (item, i) => {
        AuthorItemsList.push(<li key={i}><AuthorItemList objectItem={item}/></li>)
      });
    }

    return AuthorItemsList;
  }

  render() {

      return (
        <div className="author-list">
          <ul>
            <div className="head-list">
                <div>RANK</div>
                <div>AUTHOR</div>
                <div>APPEARANCES</div>
                <div>TITLES</div>
            </div>
            {this.renderAuthorItemList()}
          </ul>
        </div>
      )
  }
}

export default AuthorList
