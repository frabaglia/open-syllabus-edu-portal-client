import React, {Component} from 'react';
import './component.sass';
import ButtonLabel from '../../Buttons/ButtonLabel/component.js'
import MostFrecuentlyAssignedTextItemList from '../../ItemList/MostFrecuentlyAssignedTextItemList/component.js'


class MostFrecuentlyAssignedTextList extends Component {

  constructor(props){
    super();
    this.state = {
      pagination: props.initPagination
    }
  }

  renderMostFrecuentlyAssignedTextItemList = () =>
  {
    let mostFrecuentlyAssignedTextItemList = [];

    if(this.props.store.length <= this.state.pagination) {
      if(this.props.store !== []) {
        this.props.store.map ( (item, i) => {
          mostFrecuentlyAssignedTextItemList.push(<MostFrecuentlyAssignedTextItemList key={i} objectItem={item}/>)
        });
      }
    }
    else {
      if(this.props.store !== []) {
        for (var i = 0; i < this.state.pagination; i++) {
          mostFrecuentlyAssignedTextItemList.push(<MostFrecuentlyAssignedTextItemList key={i} objectItem={this.props.store[i]}/>)
        }
      }
    }

    return mostFrecuentlyAssignedTextItemList;
  }

  showMore = () => this.setState({pagination:this.props.store.length})

  showLess = () => this.setState({pagination:this.props.initPagination})

  renderButtonPagination = () => {
    let button;
    if(this.props.store.length <= this.props.initPagination) button = (<div></div>)
    else if (this.state.pagination !== this.props.initPagination) {
      button =(<ButtonLabel title="See less" color="#FFFFFF" backgroundColor="#C8CFD7" border="1px solid #C8CFD7" click={this.showLess}/>)
    }
    else if (this.state.pagination === this.props.initPagination) {
      button = (<ButtonLabel title="See more" color="#FFFFFF" backgroundColor="#C8CFD7" border="1px solid #C8CFD7" click={this.showMore}/>)
    }

    return button;
  }

  renderTitle = () =>{
    return (this.props.title) ?
    (<p className="name-seccion">
      Most Frequently Assigned Text
    </p>
  ) : (<div></div>)
  }

  render() {

      return (
        <div className="most-frecuently-assigned-text-list">
          {this.renderTitle()}
          <ul>
            {this.renderMostFrecuentlyAssignedTextItemList()}
          </ul>
          {this.renderButtonPagination()}
        </div>
      )
  }
}

export default MostFrecuentlyAssignedTextList
