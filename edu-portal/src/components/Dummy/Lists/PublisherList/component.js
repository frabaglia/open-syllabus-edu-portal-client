import React, {Component} from 'react';
import './component.sass';
import PublisherItemList from '../../ItemList/PublisherItemList/component.js';

class PublisherList extends Component {

  renderPublisherItemList = () =>
  {
    let PublisherItemsList = [];
    if(this.props.store !== []) {
      this.props.store.map ( (item, i) => {
        PublisherItemsList.push(<li key={i}><PublisherItemList objectItem={item}/></li>)
      });
    }

    return PublisherItemsList;
  }


  render() {

      return (
        <div className="publisher-list">
          <ul>
            <div className="head-list">
                <div>RANK</div>
                <div>PUBLISHERS</div>
                <div>APPEARANCES</div>
                <div>TITLES</div>
            </div>
            {this.renderPublisherItemList()}
          </ul>
        </div>
      )
  }
}

export default PublisherList
