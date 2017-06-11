import React, {Component} from 'react';
import './component.sass';
import InstitutionItemList from '../../ItemList/InstitutionItemList/component.js';

class InstitutionList extends Component {

  renderInstitutionItemList = () =>
  {
    let InstitutionItemsList = [];
    if(this.props.store !== []) {
      this.props.store.map ( (item, i) => {
        InstitutionItemsList.push(<li key={i}><InstitutionItemList objectItem={item}/></li>)
      });
    }

    return InstitutionItemsList;
  }

  render() {

      return (
        <div className="institution-list">
          <ul>
            <div className="head-list">
                <div>RANK</div>
                <div>SCHOOL</div>
                <div>SYLLABI</div>
            </div>
            {this.renderInstitutionItemList()}
          </ul>
        </div>
      )
  }
}

export default InstitutionList
