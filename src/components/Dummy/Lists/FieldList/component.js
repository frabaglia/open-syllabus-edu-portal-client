import React, {Component} from 'react';
import './component.sass';
import FieldItemList from '../../ItemList/FieldItemList/component.js';

class FieldList extends Component {

  renderFieldItemList = () =>
  {
    let FieldItemsList = [];
    if(this.props.store !== []) {
      this.props.store.map ( (item, i) => {
        FieldItemsList.push(<li key={i}><FieldItemList objectItem={item}/></li>)
      });
    }

    return FieldItemsList;
  }

  render() {

      return (
        <div className="field-list">
          <ul>
            <div className="head-list">
                <div>RANK</div>
                <div>FIELDS</div>
                <div>SYLLABI</div>
            </div>
            {this.renderFieldItemList()}
          </ul>
        </div>
      )
  }
}

export default FieldList
