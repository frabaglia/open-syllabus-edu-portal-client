import React, {Component} from 'react';
import './component.sass';
import TextAssignedItemList from '../../ItemList/TextAssignedItemList/component.js';

class TextAssignedList extends Component {

  // renderFieldItemList = () =>
  // {
  //   let FieldItemsList = [];
  //   if(this.props.store !== []) {
  //     this.props.store.map ( (item, i) => {
  //       FieldItemsList.push(<li key={i}><FieldItemList objectItem={item}/></li>)
  //     });
  //   }
  //
  //   return FieldItemsList;
  // }

  render() {

      return (
        <div className="text-assigned-list">
          <ul>
            <div className="head-list">
                <div>RANK</div>
                <div>TEXT</div>
            </div>
            <li><TextAssignedItemList/></li>
            <li><TextAssignedItemList/></li>
            <li><TextAssignedItemList/></li>
            <li><TextAssignedItemList/></li>
            <li><TextAssignedItemList/></li>
            <li><TextAssignedItemList/></li>
          </ul>
        </div>
      )
  }
}

export default TextAssignedList
