import React, {Component} from 'react';
import './component.sass';
import TitleList from '../Lists/TitleList/component.js';
import AuthorList from '../Lists/AuthorList/component.js';
import FieldList from '../Lists/FieldList/component.js';
import CountryList from '../Lists/CountryList/component.js';
import InstitutionList from '../Lists/InstitutionList/component.js';
import PublisherList from '../Lists/PublisherList/component.js';
import ButtonPagination from '../Buttons/ButtonPagination/component.js';
import ButtonExportCSV from '../Buttons/ButtonExportCSV/component.js';

class ContainerList extends Component {

  showList = () =>
  {
    // let showList = (this.props.list === 'titleList') ? (<TitleList/>) : (<AuthorList/>);
    // return showList;

    switch (this.props.list) {
      case 'titleList':
        return (<TitleList store={this.props.store}/>)
        break;

      case 'authorList':
        return (<AuthorList store={this.props.store}/>)
        break;

      case 'fieldList':
        return (<FieldList store={this.props.store}/>)
        break;

      case 'institutionList':
        return (<InstitutionList store={this.props.store}/>)
        break;

      case 'countryList':
        return (<CountryList store={this.props.store}/>)
        break;

      case 'publisherList':
        return (<PublisherList store={this.props.store}/>)
        break;
      default:

    }
  }

  render() {
      return (
        <div className="container-list">
          {this.showList()}
          <div className="buttons">
            <div>
              <ButtonPagination title="SHOW MORE"/>
            </div>
            <ButtonExportCSV/>
          </div>
        </div>
      )
  }
}

export default ContainerList
