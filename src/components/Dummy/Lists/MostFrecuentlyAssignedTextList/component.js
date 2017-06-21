import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';
import ButtonLabel from '../../Buttons/ButtonLabel/component.js'
import MostFrecuentlyAssignedTextItemList from '../../ItemList/MostFrecuentlyAssignedTextItemList/component.js'


class MostFrecuentlyAssignedTextList extends Component {

  constructor(){
    super();
    this.state = {
      pagination: 3
    }
  }

  renderMostFrecuentlyAssignedTextItemList = () =>
  {
    let mostFrecuentlyAssignedTextItemList = [];

    if(this.props.store.length <= 3) {
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

  showLess = () => this.setState({pagination:3})

  renderButtonPagination = () => {
    let button;
    if(this.props.store.length <= 3) button = (<div></div>)
    else if (this.state.pagination !== 3) {
      button =(<ButtonLabel title="See less" color="#FFFFFF" backgroundColor="#C8CFD7" border="1px solid #C8CFD7" click={this.showLess}/>)
    }
    else if (this.state.pagination === 3) {
      button = (<ButtonLabel title="See more" color="#FFFFFF" backgroundColor="#C8CFD7" border="1px solid #C8CFD7" click={this.showMore}/>)
    }

    return button;
  }

  render() {

      return (
        <div className="most-frecuently-assigned-text-list">
          <p className="name-seccion">
            Most Frequently Assigned Text
          </p>
          <ul>
            {this.renderMostFrecuentlyAssignedTextItemList()}
          </ul>
          {this.renderButtonPagination()}
        </div>
      )
  }
}

export default MostFrecuentlyAssignedTextList
