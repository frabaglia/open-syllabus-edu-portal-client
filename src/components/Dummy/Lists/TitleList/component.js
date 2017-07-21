import React, {Component} from 'react';
import './component.sass';
import TitleItemList from '../../ItemList/TitleItemList/component.js';
import TextAssignedItemList from '../../ItemList/TextAssignedItemList/component.js';

class TitleList extends Component {
  renderTitleItemList = () =>
  {
    let TitleItemsList = [];
    if(this.props.store !== []) {
      if(this.props.showLessInfo){
        this.props.store.map ( (item, i) => {
          TitleItemsList.push(<li key={i}><TextAssignedItemList objectItem={item}/></li>)
        });
      }
      else {
        this.props.store.map ( (item, i) => {
          TitleItemsList.push(<li key={i}><TitleItemList objectItem={item}/></li>)
        });
      }

    }

    return TitleItemsList;
  }

  renderHeaderList = () =>{
    return (this.props.showLessInfo) ? (
      <div className="head-shor-list">
        <div>RANK</div>
        <div>TITLE</div>
      </div>
    ):(
      <div className="head-list">
        <div>RANK</div>
        <div>TITLE</div>
        <div>APPEARANCES</div>
        <div>SCORE</div>
      </div>
    )
  }

  render() {
      return (
        <div className="title-list">
          <ul>
            {this.renderHeaderList()}
            {this.renderTitleItemList()}
          </ul>
        </div>
      )
  }
}

export default TitleList
