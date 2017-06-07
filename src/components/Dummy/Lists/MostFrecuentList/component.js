import React, {Component} from 'react';
import './component.sass';
import MostFrecuentTitleItemList from '../../ItemList/MostFrecuentTitleItemList/component.js';
import MostFrecuentAuthorItemList from '../../ItemList/MostFrecuentAuthorItemList/component.js';
import MostFrecuentInstitutionItemList from '../../ItemList/MostFrecuentInstitutionItemList/component.js';
import MostFrecuentFieldItemList from '../../ItemList/MostFrecuentFieldItemList/component.js';
import MostFrecuentCountryItemList from '../../ItemList/MostFrecuentCountryItemList/component.js';
import MostFrecuentPublisherItemList from '../../ItemList/MostFrecuentPublisherItemList/component.js';

import {
    TYPE_TITLE,
    TYPE_AUTHOR,
    TYPE_INSTITUTION,
    TYPE_FIELD,
    TYPE_COUNTRY,
    TYPE_PUBLISHER,
    // TYPE_INSTITUTION_FIELD
} from '../../../../store/storeTypes'

class MostFrecuentList extends Component {

  renderMostFrecuentList = () =>
  {
    switch (this.props.type) {
      case TYPE_TITLE:
        let titleItems = this.props.data.map( (item,i) => {
          return(
            <li key={i}>
              <MostFrecuentTitleItemList objectItem={item}/>
            </li>
          )
        })
        return (<ul>{titleItems}</ul>)
        break;

      case TYPE_AUTHOR:
      let authorItems = this.props.data.map( (item,i) => {
        return(
          <li key={i}>
            <MostFrecuentAuthorItemList objectItem={item}/>
          </li>
        )
      })
      return (<ul>{authorItems}</ul>)
        break;

      case TYPE_INSTITUTION:
        let insttitutionItems = this.props.data.map( (item,i) => {
          return(
            <li key={i}>
              <MostFrecuentInstitutionItemList objectItem={item}/>
            </li>
          )
        })
        return (<ul>{insttitutionItems}</ul>)
        break;

      case TYPE_FIELD:
        let fieldItems = this.props.data.map( (item,i) => {
          return(
            <li key={i}>
              <MostFrecuentFieldItemList objectItem={item}/>
            </li>
          )
        })
        return (<ul>{fieldItems}</ul>)
        break;

      case TYPE_COUNTRY:
        let countryItems = this.props.data.map( (item,i) => {
          return(
            <li key={i}>
              <MostFrecuentCountryItemList objectItem={item}/>
            </li>
          )
        })
        return (<ul>{countryItems}</ul>)
        break;

      case TYPE_PUBLISHER:
        let publisherItems = this.props.data.map( (item,i) => {
          return(
            <li key={i}>
              <MostFrecuentPublisherItemList objectItem={item}/>
            </li>
          )
        })
        return (<ul>{publisherItems}</ul>)
        break;
        default:
    }
  }

  render() {
      return (
        <div className="most-frecuent-list">
          {this.renderMostFrecuentList()}
        </div>
      )
  }
}

export default MostFrecuentList
