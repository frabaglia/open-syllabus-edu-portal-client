import React, {Component} from 'react';
import './component.sass';
import TitleList from '../Lists/TitleList/component.js';
import ButtonLabel from '../Buttons/ButtonLabel/component.js'
import ButtonFilterDropdown from '../Buttons/ButtonFilterDropdown/component'
import {data} from '../../../os-toolkit/Data/component'



class ContainerTopRankedList extends Component {

  constructor(props) {
    super();
    this.state = {
      defaultListType : props.defaultListType,
      pagination: 10,
      columbiaStore: [],
      allSchoolsStore: [],
    }
  }

  componentDidMount = () =>{
    if(this.props.store.columbia !== undefined) this.makeColumbiaPagination(this.state.pagination)
    if(this.props.store.allSchools !== undefined) this.makeAllSchoolsPagination(this.state.pagination)
  }

  renderList = () =>
  {
      switch (this.state.defaultListType) {
        case 'Columbia':
          return (<TitleList store={this.state.columbiaStore} showLessInfo={this.props.isTextAssigned}/>)
          break;

        case 'All Schools':
          return (<TitleList store={this.state.allSchoolsStore} showLessInfo={this.props.isTextAssigned}/>)
          break;

        default:

      }
  }

  changeList = (e) => {
    let selectedList = e.target.innerHTML;
      this.setState({defaultListType:selectedList, pagination:10}, () =>{
      this.makeAllSchoolsPagination(this.state.pagination);
      this.makeColumbiaPagination(this.state.pagination)
    })
  }

  changeDataFromSelects = (year) => this.props._makeRequest(year)

  renderButtonsNavigation = () =>
  {
    let columbiaClassName,
        allSchoolsClassName,
        navigationTab;

    switch (this.state.defaultListType) {
      case 'Columbia':
        columbiaClassName = 'selected';
        allSchoolsClassName = '';
        break;

      case 'All Schools':
        columbiaClassName = '';
        allSchoolsClassName = 'selected';
        break;

      default:

    }


    if(this.props.navigation){
      if(this.props.isYearSelectable){
        navigationTab = (
          <div className="navigation">
            <ButtonFilterDropdown
              title="Since"
              arrayData={data('yearsData')}
              color="#A9B4C0"
              changeDataFromSelects={this.changeDataFromSelects}
            />
            <div className="buttons-navigation">
              <span ref="Columbia" className={columbiaClassName} onClick={this.changeList}>Columbia</span>
              <span ref="All Schools" className={allSchoolsClassName} onClick={this.changeList}>All Schools</span>
            </div>
          </div>
        );
      }
      else {
        navigationTab = (
          <div className="navigation">
            <div className="buttons-navigation">
              <span ref="Columbia" className={columbiaClassName} onClick={this.changeList}>Columbia</span>
              <span ref="All Schools" className={allSchoolsClassName} onClick={this.changeList}>All Schools</span>
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

  makeColumbiaPagination = (count) =>
  {
    let columbiaStore=[];
    if(this.props.store.columbia.length >= this.state.pagination){
      for (let i = 0; i < count; i++) {
        columbiaStore.push(this.props.store.columbia[i])
      }
    }
    else {
      for (let i = 0; i < this.props.store.columbia.length; i++) {
        columbiaStore.push(this.props.store.columbia[i])
      }
    }
    this.setState({columbiaStore:columbiaStore})
  }

  makeAllSchoolsPagination = (count) =>
  {
    let allSchoolsStore=[];
    if(this.props.store.allSchools.length >= this.state.pagination){
      for (let i = 0; i < count; i++) {
        allSchoolsStore.push(this.props.store.allSchools[i])
      }
    }
    else {
      for (let i = 0; i < this.props.store.allSchools.length; i++) {
        allSchoolsStore.push(this.props.store.allSchools[i])
      }
    }

    this.setState({allSchoolsStore:allSchoolsStore})
  }

  showMore = () =>{
    switch (this.state.defaultListType) {
      case 'Columbia':
        this.makeColumbiaPagination(this.props.store.columbia.length)
        break;

      case 'All Schools':
        this.makeAllSchoolsPagination(this.props.store.allSchools.length)
        break;

      default:

    }
    this.setState({pagination:1})
  }

  showLess = () => {
    this.setState({pagination:10}, () =>{
      switch (this.state.defaultListType) {
        case 'Columbia':
          this.makeColumbiaPagination(this.state.pagination)
          break;

        case 'All Schools':
          this.makeAllSchoolsPagination(this.state.pagination)
          break;

        default:
      }
    })
  }

  renderButtonPagination = () => {
    let button;
    switch (this.state.defaultListType) {
      case 'Columbia':
        if(this.props.store.columbia.length <= 10) button = (<div></div>)
        else if (this.state.pagination !== 10) {
          button =(<ButtonLabel title="Show less" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showLess}/>)
        }
        else if (this.state.pagination === 10) {
          button = (<ButtonLabel title="Show all" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showMore}/>)
        }
        break;

      case 'All Schools':
        if(this.props.store.allSchools.length <= 10) button = (<div></div>)
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
          {this.props.title}
          {this.renderButtonsNavigation()}
          {this.renderList()}
          {this.renderButtonPagination()}
        </div>
      )
  }
}

export default ContainerTopRankedList
