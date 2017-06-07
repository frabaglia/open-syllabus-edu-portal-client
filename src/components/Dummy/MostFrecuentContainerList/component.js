import React, {Component} from 'react';
import './component.sass';

import ButtonPagination from '../Buttons/ButtonPagination/component.js';
import ButtonMostFrecuentDropdown from '../Buttons/ButtonMostFrecuentDropdown/component.js';
import MostFrecuentList from '../Lists/MostFrecuentList/component.js'
import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    // TYPE_INSTITUTION_FIELD
} from '../../../store/storeTypes'

const listType = {
  TYPE_TITLE:'Titles',
  TYPE_AUTHOR:'Authors',
  TYPE_FIELD:'Fields',
  TYPE_INSTITUTION:'Schools',
  TYPE_COUNTRY:'Countries',
  TYPE_PUBLISHER:'Publishers'
};

class MostFrecuentContainerList extends Component {

  setType = (type) =>
  {
    this.setState({type:type}, () =>{this.props.changeCurrentCategoryType(type)})
  }

  toResultsList = () =>
  {
    switch (this.props.currentCategoryType) {
        case TYPE_TITLE:
          return this.props.router.push('/results-list/title')
          break;

        case TYPE_AUTHOR:
          return this.props.router.push('/results-list/author')
          break;

        case TYPE_FIELD:
          return this.props.router.push('/results-list/field')
          break;

        case TYPE_INSTITUTION:
          return this.props.router.push('/results-list/school')
          break;

        case TYPE_COUNTRY:
          return this.props.router.push('/results-list/country')
          break;

        case TYPE_PUBLISHER:
          return this.props.router.push('/results-list/publisher')
          break;

          default:
    }

  }

  renderCategoryName = () =>{
    for (var i in listType) {
      if(this.props.currentCategoryType === i) return listType[i]
    }
  }

  render() {
      return (
        <div className="most-frecuent-container-list">
          <div className="most-frecuent-container-title">
            <p>{`Most Frequently Taught ${this.renderCategoryName()}`}</p>
            <ButtonMostFrecuentDropdown
              click={this.setType}
              title={this.renderCategoryName()}
              listType={listType}
            />
          </div>
            <MostFrecuentList
              type={this.props.currentCategoryType}
              data={this.props.currentCategoryData}
            />
          <div className="buttons">
            <ButtonPagination title={`SEARCH FOR ${this.renderCategoryName()}`} click={this.toResultsList}/>
          </div>
        </div>
      )
  }
}

export default MostFrecuentContainerList
