import React, {Component} from 'react'
import ButtonFilterDropdown from '../Buttons/ButtonFilterDropdown/component'
import BadgesList from '../Lists/BadgesList/component'
import {data} from '../../../os-toolkit/Data/component'
import './component.sass';

class BadgeContainer extends Component {

  changeDataFromSelects = (year) =>{
    console.log(year);
  }

  render () {
    return (
      <div className="badge-container">
        <div className="badge-container-header">
          <span className="badge-container-header-title">Select Year</span>
          <ButtonFilterDropdown
            title="All"
            arrayData={data('yearsData')}
            color="#A9B4C0"
            changeDataFromSelects={this.changeDataFromSelects}
          />
        </div>
        <div className="badge-container-body">
          <BadgesList
            store={this.props.store}
            router={this.props.router}
          />
        </div>
      </div>
    );
  }
}

export default BadgeContainer
