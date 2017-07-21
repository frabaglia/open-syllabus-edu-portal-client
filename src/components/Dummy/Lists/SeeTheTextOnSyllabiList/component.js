import React, {Component} from 'react';
import ButtonLabel from '../../Buttons/ButtonLabel/component.js'

class SeeTheTextOnSyllabiList extends Component {

  constructor(){
    super();
    this.state = {
      pagination: 5
    }
  }

  renderSyllabies = () =>
  {
    let syllabies = [];
    if(this.props.store.length <= 5) {
      this.props.store.map ( (item, i) => {
        syllabies.push(<li key={i}><span>{item.name}</span></li>)
      });
    }
    else {
      for (var i = 0; i < this.state.pagination; i++) {
        syllabies.push(<li key={i}><span>{this.props.store[i].name}</span></li>)
      }
    }
    return syllabies;
  }

  showMore = () => this.setState({pagination:this.props.store.length})

  showLess = () => this.setState({pagination:5})

  renderButtonPagination = () => {
    let button;
    if(this.props.store.length <= 5) button = (<div></div>)
    else if (this.state.pagination !== 5) {
      button =(<ButtonLabel title="Show less" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showLess}/>)
    }
    else if (this.state.pagination === 5) {
      button = (<ButtonLabel title="Show all" backgroundColor="#A9B4C0" border="" color="#FFFFFF" click={this.showMore}/>)
    }

    return button;
  }

  render() {

      return (
        <div className="see-the-text-on-syllabi-list">
          <p className="font-semibold mid-font-size">
            See the Text on 24 Syllabi
          </p>
          <ul>
            {this.renderSyllabies()}
          </ul>
          {this.renderButtonPagination()}
        </div>
      )
  }
}

export default SeeTheTextOnSyllabiList
