import React, {Component} from 'react';
import './component.sass';
import TitleItemList from '../../ItemList/TitleItemList/component.js';

class TitleList extends Component {

  renderTitleItemList = () =>
  {
    let TitleItemsList = [];
    if(this.props.store !== []) {
      this.props.store.map ( (item, i) => {
        TitleItemsList.push(<li key={i}><TitleItemList objectItem={item}/></li>)
      });
    }

    return TitleItemsList;
  }

  render() {
      return (
        <div className="title-list">
          <ul>
            <div className="head-list">
              <div>RANK</div>
              <div>TITLE</div>
              <div>APPEARANCES</div>
              <div>SCORE</div>
            </div>
            {this.renderTitleItemList()}
          </ul>
        </div>
      )
  }
}

export default TitleList
