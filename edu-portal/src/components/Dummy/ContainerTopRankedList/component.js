import React, {Component} from 'react';
import './component.sass';
import TitleList from '../Lists/TitleList/component.js';
import AuthorList from '../Lists/AuthorList/component.js';
import InstitutionList from '../Lists/InstitutionList/component.js';
import ButtonLabel from '../Buttons/ButtonLabel/component.js'


class ContainerTopRankedList extends Component {

  constructor(props) {
    super();
    this.state = {
      defaultListType : props.defaultListType,
      pagination: 10,
      titleStore: [],
      authorStore: [],
      institutionStore: []
    }
  }

  componentDidMount = () =>{
    if(this.props.store.titles !== undefined) this.makeTitlePagination(this.state.pagination)
    if(this.props.store.authors !== undefined) this.makeAuthorPagination(this.state.pagination)
    if(this.props.store.institutions !== undefined) this.makeInstitutionPagination(this.state.pagination)
  }

  renderList = () =>
  {
      switch (this.state.defaultListType) {
        case 'TITLES':
          return (<TitleList store={this.state.titleStore}/>)
          break;

        case 'AUTHORS':
          return (<AuthorList store={this.state.authorStore}/>)
          break;

        case 'COUNTRIES':
          return (<InstitutionList store={this.state.institutionStore}/>)
          break;

        default:

      }
  }

  changeList = (e) => {
    let selectedList = e.target.innerHTML;
    if(this.props.listTypes.length !== 2){

      if(e.target.innerHTML === 'UNIVERSITIES') selectedList = 'COUNTRIES';

      this.setState({defaultListType:selectedList, pagination:10}, () =>{
      this.makeAuthorPagination(this.state.pagination);
      this.makeTitlePagination(this.state.pagination)
      this.makeInstitutionPagination(this.state.pagination)
      })
    }
    else {
      this.setState({defaultListType:selectedList, pagination:10}, () =>{
      this.makeAuthorPagination(this.state.pagination);
      this.makeTitlePagination(this.state.pagination)
      })
    }
}


  renderButtonsNavigation = () =>
  {
    let titlesClassName,
        authorsClassName,
        countriesClassName,
        navigationTab;

    switch (this.state.defaultListType) {
      case 'TITLES':
        titlesClassName = 'selected';
        authorsClassName = '';
        countriesClassName = '';
        break;

      case 'AUTHORS':
        titlesClassName = '';
        authorsClassName = 'selected';
        countriesClassName = '';
        break;

      case 'COUNTRIES':
        titlesClassName = '';
        authorsClassName = '';
        countriesClassName = 'selected';
        break;

      default:

    }


    if(this.props.navigation){
      if(this.props.listTypes.length !== 2){
        navigationTab = (
          <div className="navigation">
            <p>Top Ranked</p>
            <div className="buttons-navigation">
              <span ref="COUNTRIES" className={countriesClassName} onClick={this.changeList}>UNIVERSITIES</span>
              <span ref="TITLES" className={titlesClassName} onClick={this.changeList}>TITLES</span>
              <span ref="AUTHORS" className={authorsClassName} onClick={this.changeList}>AUTHORS</span>
            </div>
          </div>
        );
      }
      else {
        navigationTab = (
          <div className="navigation">
            <p>Top Ranked</p>
            <div className="buttons-navigation">
              <span ref="TITLES" className={titlesClassName} onClick={this.changeList}>TITLES</span>
              <span ref="AUTHORS" className={authorsClassName} onClick={this.changeList}>AUTHORS</span>
            </div>
          </div>
        );
      }
    }
    else {
      navigationTab = (<div></div>);
    }

    return navigationTab;
  }

  makeTitlePagination = (count) =>
  {
    let titleStore=[];
    if(this.props.store.titles.length >= this.state.pagination){
      for (let i = 0; i < count; i++) {
        titleStore.push(this.props.store.titles[i])
      }
    }
    else {
      for (let i = 0; i < this.props.store.titles.length; i++) {
        titleStore.push(this.props.store.titles[i])
      }
    }
    this.setState({titleStore:titleStore})
  }

  makeAuthorPagination = (count) =>
  {
    let authorStore=[];
    if(this.props.store.authors.length >= this.state.pagination){
      for (let i = 0; i < count; i++) {
        authorStore.push(this.props.store.authors[i])
      }
    }
    else {
      for (let i = 0; i < this.props.store.authors.length; i++) {
        authorStore.push(this.props.store.authors[i])
      }
    }

    this.setState({authorStore:authorStore})
  }

  makeInstitutionPagination = (count) =>
  {
    let institutionStore=[];
    if(this.props.store.institutions.length >= this.state.pagination){
      for (let i = 0; i < count; i++) {
        institutionStore.push(this.props.store.institutions[i])
      }
    }
    else {
      for (let i = 0; i < this.props.store.institutions.length; i++) {
        institutionStore.push(this.props.store.institutions[i])
      }
    }

    this.setState({institutionStore:institutionStore})
  }

  showMore = () =>{
    switch (this.state.defaultListType) {
      case 'TITLES':
        this.makeTitlePagination(this.props.store.titles.length)
        break;

      case 'AUTHORS':
        this.makeAuthorPagination(this.props.store.authors.length)
        break;

      case 'COUNTRIES':
        this.makeInstitutionPagination(this.props.store.institutions.length)
        break;

      default:

    }
    this.setState({pagination:1})
  }

  showLess = () => {
    this.setState({pagination:10}, () =>{
      switch (this.state.defaultListType) {
        case 'TITLES':
          this.makeTitlePagination(this.state.pagination)
          break;

        case 'AUTHORS':
          this.makeAuthorPagination(this.state.pagination)
          break;

        case 'COUNTRIES':
          this.makeInstitutionPagination(this.state.pagination)
          break;

        default:
      }
    })
  }

  renderButtonPagination = () => {
    let button;
    switch (this.state.defaultListType) {
      case 'TITLES':
        if(this.props.store.titles.length <= 10) button = (<div></div>)
        else if (this.state.pagination !== 10) {
          button =(<ButtonLabel title="Show less" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showLess}/>)
        }
        else if (this.state.pagination === 10) {
          button = (<ButtonLabel title="Show all" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showMore}/>)
        }
        break;

      case 'AUTHORS':
        if(this.props.store.authors.length <= 10) button = (<div></div>)
        else if (this.state.pagination !== 10) {
          button =(<ButtonLabel title="Show less" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showLess}/>)
        }
        else if (this.state.pagination === 10) {
          button = (<ButtonLabel title="Show all" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showMore}/>)
        }
        break;

      case 'COUNTRIES':
        if(this.props.store.institutions.length <= 10) button = (<div></div>)
        else if (this.state.pagination !== 10) {
          button =(<ButtonLabel title="Show less" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showLess}/>)
        }
        else if (this.state.pagination === 10) {
          button = (<ButtonLabel title="Show all" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showMore}/>)
        }
        break;

      default:

    }

    return button;
  }


  render() {
      return (
        <div className="container-top-ranked-list">
          {this.renderButtonsNavigation()}
          {this.renderList()}
          {this.renderButtonPagination()}
        </div>
      )
  }
}

export default ContainerTopRankedList
