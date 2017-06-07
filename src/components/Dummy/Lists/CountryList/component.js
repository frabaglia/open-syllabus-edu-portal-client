import React, {Component} from 'react';
import './component.sass';
import CountryItemList from '../../ItemList/CountryItemList/component.js';

class CountryList extends Component {

  renderCountryItemList = () =>
  {
    let CountryItemsList = [];
    if(this.props.store !== []) {
      this.props.store.map ( (item, i) => {
        CountryItemsList.push(<li key={i}><CountryItemList objectItem={item}/></li>)
      });
    }

    return CountryItemsList;
  }

  render() {

      return (
        <div className="country-list">
          <ul>
            <div className="head-list">
                <div>RANK</div>
                <div>COUNTRIES</div>
                <div>SYLLABI</div>
                <div>SCHOOLS</div>
            </div>
            {this.renderCountryItemList()}
          </ul>
        </div>
      )
  }
}

export default CountryList
