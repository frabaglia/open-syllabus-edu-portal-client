import React, {Component} from 'react';
import './component.sass';
import TextAssignedItemList from '../../ItemList/TextAssignedItemList/component.js';
import ButtonLabel from '../../Buttons/ButtonLabel/component.js'

class TextAssignedList extends Component {

  constructor(){
    super();
    this.state = {
      pagination: 6
    }
  }

  renderFieldItemList = () =>
  {
    let FieldItemsList = [];
    if(this.props.store.length <= 6) {
      this.props.store.map ( (item, i) => {
        FieldItemsList.push(<li key={i}><TextAssignedItemList objectItem={item}/></li>)
      });
    }
    else {
      for (var i = 0; i < this.state.pagination; i++) {
        FieldItemsList.push(<li key={i}><TextAssignedItemList objectItem={this.props.store[i]}/></li>)
      }
    }
    return FieldItemsList;
  }

  showMore = () => this.setState({pagination:this.props.store.length})

  showLess = () => this.setState({pagination:6})

  renderButtonPagination = () => {
    let button;
    if(this.props.store.length <= 6) button = (<div></div>)
    else if (this.state.pagination !== 6) {
      button =(<ButtonLabel title="Show less" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showLess}/>)
    }
    else if (this.state.pagination === 6) {
      button = (<ButtonLabel title="Show all" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showMore}/>)
    }

    return button;
  }

  render() {

      return (
        <div className="text-assigned-list">
          <ul>
            <div className="head-list">
                <div>RANK</div>
                <div>TEXT</div>
            </div>
            {this.renderFieldItemList()}
          </ul>
          {this.renderButtonPagination()}
        </div>
      )
  }
}

export default TextAssignedList
