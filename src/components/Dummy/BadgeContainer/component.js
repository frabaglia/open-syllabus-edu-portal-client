import React, {Component} from 'react'
import ButtonFilterDropdown from '../Buttons/ButtonFilterDropdown/component'
import BadgesList from '../Lists/BadgesList/component'
import {data} from '../../../os-toolkit/Data/component'
import './component.sass';

const store = [
  {
    name: 'History',
    syllabus_count: 360,
    _id: 1
  },
  {
    name: 'Political Science',
    syllabus_count: 316,
    _id: 2
  },
  {
    name: 'Astronomy',
    syllabus_count: 290,
    _id: 3
  },
  {
    name: 'Classics',
    syllabus_count: 22,
    _id: 4
  },
]

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
            store={store}
            router={this.props.router}
          />
        </div>
      </div>
    );
  }
}

export default BadgeContainer
