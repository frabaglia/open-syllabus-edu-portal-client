import React, {Component} from 'react'
import './component.sass'
import ButtonRegular from '../Buttons/ButtonRegular/component.js'
import ButtonClearFilter from '../Buttons/ButtonClearFilter/component.js'
import ButtonSearch from '../Buttons/ButtonSearch/component.js'
import BadgesFilterList from '../Lists/BadgesFilterList/component.js'
import $ from 'jquery';



class Filter extends Component {

  constructor(props){
    super();
    this.state = {
      selected: '',
      currentQuery: [],
      paramDataList:[]
    }
  }

  componentDidMount = () => {
    this.setState({
      selected:this.props.filtersCategory[0],
      paramDataList:this.props.paramData
    })

    $(window).click( (event) => {
      if(event.target.type !== 'text' && this.refs.selectMenu !== undefined) this.refs.selectMenu.className = 'select-menu'
    })

    this.refs.selectMenu.style.width = `${$(this.refs.inputSearch).width()+22}px`

    $(window).resize( () =>{
      if(this.refs.selectMenu !== undefined) this.refs.selectMenu.style.width = `${$(this.refs.inputSearch).width()+22}px`
    })
  }

  // showPlaceholder = () =>
  // {
    // console.log(this.refs.inputSearch.placeholder);
    // if(this.refs.inputSearch !== undefined && this.refs.inputSearch.placeholder !== undefined ){
    //   $(window).resize( () => {
    //     if( $(window).width() <= 414 ) this.refs.inputSearch.placeholder = 'Search for ...';
    //     else this.refs.inputSearch.placeholder = "Add Filter to Titles filters..."
    //   });
    // }
  // }

  isButtonSelected = (selected) =>
  {
    this.props.currentCategory(selected);
    this.setState({selected:selected, paramDataList:[]})
    this.refs.inputSearch.value = '';
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({paramDataList:nextProps.paramData});
  }

  renderButtonsFilter = () =>
  {
    let buttons = [];
    this.props.filtersCategory.map( (filter, i) => {
      let button = (this.state.selected === filter) ? <ButtonRegular title={filter} key={i} click={this.isButtonSelected} selected={'#FBD669'}/> : <ButtonRegular title={filter} key={i} click={this.isButtonSelected} selected={'#C8CFD7'}/>
        buttons.push(button)
    })
    return buttons;
  }

  sendString = (e) => this.props.inputString(e.target.value)

  handleEnter = (e) => {
    if(e.target.type === 'text') {
      if(e.key === 'Enter') this.props.makeSearch(0);
    }
    if ( e.target.type === undefined && this.state.selected === this.props.category) this.props.makeSearch(this.props.category);
  }

  renderSelectMenu = () => this.refs.selectMenu.className = "select-menu show-select-menu"

  addParamToQuery = (e) =>
  {
    let currentQuery = this.state.currentQuery,
        paramQuery = {
          "_id": e.target.getAttribute('data-id'),
          "name": e.target.getAttribute('data-name'),
          "category": e.target.getAttribute('data-category')
        }
    currentQuery.push(paramQuery);

    this.setState(
      {currentQuery:currentQuery}, () =>{
        this.props.inputString(''); this.props.currentParamsQuery(this.state.currentQuery);
        this.refs.inputSearch.value = '';
    });
    this.refs.selectMenu.className = 'select-menu'

  }

  makeItemSelectContent = (field,i) =>
  {
    switch (this.state.selected) {
      case 'Title':
        return
        break;

      case 'Author':
        let name_first = field.author_first || '',
            name_middle = field.author_middle || '',
            name_last = field.author_last || '';
        return (
          <li
            key={i}
            data-id={field._id}
            data-name={`${name_first} ${name_middle} ${name_last}`}
            data-category={this.state.selected}
            onClick={this.addParamToQuery}
          >
            <span
              data-id={field._id}
              data-name={`${name_first} ${name_middle} ${name_last}`}
              data-category={this.state.selected}
            >
              {`${name_first} ${name_middle} ${name_last}`}
            </span>
          </li>
        )
        break;

      case 'Field':
        return (
          <li
            key={i}
            data-id={field._id}
            data-name={field.name}
            data-category={this.state.selected}
            onClick={this.addParamToQuery}
          >
            <span
              data-id={field._id}
              data-name={field.name}
              data-category={this.state.selected}
            >
                {field.name}
              </span>
          </li>
        )
        break;

      case 'School':
      return (
        <li
          key={i}
          data-id={field._id}
          data-name={field.name}
          data-category={this.state.selected}
          onClick={this.addParamToQuery}
        >
          <span
            data-id={field._id}
            data-name={field.name}
            data-category={this.state.selected}
            >
              {field.name}
            </span>
        </li>
      )
        break;

      case 'Country':
        return (
          <li
            key={i}
            data-id={field._id}
            data-name={field.name}
            data-category={this.state.selected}
            onClick={this.addParamToQuery}
          >
            <span
              data-id={field._id}
              data-name={field.name}
              data-category={this.state.selected}
            >
                {field.name}</span>
          </li>
        )
        break;

      case 'Publisher':
      return (
        <li
          key={i}
          data-id={field._id}
          data-name={field.name}
          data-category={this.state.selected}
          onClick={this.addParamToQuery}
        >
          <span
            data-id={field._id}
            data-name={field.name}
            data-category={this.state.selected}
          >
            {field.name}
          </span>
        </li>
      )
        break;

      default:

    }
  }

  renderSelectContent = () =>
  {
    let fieldsArray = this.state.paramDataList,
        selectContent = [];
    fieldsArray.map( (field, i) =>{
      selectContent.push(
        this.makeItemSelectContent(field,i)
      )
    })
    return selectContent
  }

  eraseParamFromQuery = (paramId) =>
  {
    let currentQuery = this.state.currentQuery,
        paramPosition;

    currentQuery.map( (param, i) =>{
      if(param._id === paramId) paramPosition = i
    })

    currentQuery.splice(paramPosition,1);

    this.setState(
      {currentQuery:currentQuery}, this.props.currentParamsQuery(this.state.currentQuery)
    );

  }

  clearFilter = () =>
  {
    this.setState(
      {currentQuery:[]},
      this.props.inputString(''),
      this.props.currentParamsQuery([])

    );
    this.refs.inputSearch.value = ''
    this.props.clearAdvancedFilter();

  }

  renderTextPlaceholder = () =>{
    return (this.state.selected !== 'Author') ? `Add a ${this.state.selected}` : `Add an ${this.state.selected}`
  }

  render() {
      return (
        <div className="filter">
          <div className="title">
            <p><span>{this.props.filter.number}</span>{` ${this.props.filter.title}`}</p>
            <ButtonClearFilter click={this.clearFilter}/>
          </div>
          <div>
            <p>Refine search by</p>
            <div>
              {this.renderButtonsFilter()}
            </div>
          </div>
          <div className="search">
            <div className="search-input-content">
              <input
                ref='inputSearch'
                type="text"
                placeholder={this.renderTextPlaceholder()}
                onChange={this.sendString}
                onKeyPress={this.handleEnter}
                onFocus={this.renderSelectMenu}
              >
              </input>
              <div ref="selectMenu" className="select-menu">
                <ul>
                  {this.renderSelectContent()}
                </ul>
              </div>
            </div>
            <ButtonSearch click={this.handleEnter}/>
          </div>
          <div>
            <BadgesFilterList
              eraseParamFromQuery={this.eraseParamFromQuery}
              paramsList={this.state.currentQuery}/>
          </div>
        </div>
      )
  }
}

export default Filter
