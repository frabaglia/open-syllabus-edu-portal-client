import React, {Component} from 'react';
import './component.sass';
import TitleList from '../../Lists/TitleList/component.js';
import AuthorList from '../../Lists/AuthorList/component.js';
import InstitutionList from '../../Lists/InstitutionList/component.js';
import FieldList from '../../Lists/FieldList/component.js';
import CountryList from '../../Lists/CountryList/component.js';
import PublisherList from '../../Lists/PublisherList/component.js';


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
        return (<TitleList store={this.props.data}/>)
        break;

      case TYPE_AUTHOR:
      return (<AuthorList store={this.props.data}/>)
        break;

      case TYPE_INSTITUTION:
        return (<InstitutionList store={this.props.data}/>)
        break;

      case TYPE_FIELD:
        return (<FieldList store={this.props.data}/>)
        break;

      case TYPE_COUNTRY:
        return (<CountryList store={this.props.data}/>)
        break;

      case TYPE_PUBLISHER:
        return (<PublisherList store={this.props.data}/>)
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
