import React, {Component} from 'react';
import './component.sass';
import TitleList from '../Lists/TitleList/component.js';
import AuthorList from '../Lists/AuthorList/component.js';


class ContainerTopRankedList extends Component {

  constructor() {
    super();
    this.state = {
      listType : 'TITLES'
    }
  }

  storeTitle = () =>
  {
    return (
      [
        {
          "title": "The Elements of Style",
          "pub_year": 1920,
          "rank": 1,
          "appearances": 3934,
          "score": 100.0,
          "author_first": "William",
          "author_middle": "A.",
          "author_last": "Strunk",
          "_id":1
      }, {
          "title": "Biology",
          "pub_year": 1987,
          "rank": 2,
          "appearances": 3057,
          "score": 97.2,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "_id":2
      }, {
          "title": "Frankenstein",
          "pub_year": 1818,
          "rank": 3,
          "appearances": 2320,
          "score": 95.0,
          "author_first": "Mary",
          "author_middle": "Wollstonecraft",
          "author_last": "Shelley",
          "_id":3
      }, {
          "title": "The Elements of Style",
          "pub_year": 1920,
          "rank": 1,
          "appearances": 3934,
          "score": 100.0,
          "author_first": "William",
          "author_middle": "A.",
          "author_last": "Strunk",
          "_id":4
      }, {
          "title": "Biology",
          "pub_year": 1987,
          "rank": 2,
          "appearances": 3057,
          "score": 97.2,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
          "_id":5
      }, {
          "title": "Frankenstein",
          "pub_year": 1818,
          "rank": 3,
          "appearances": 2320,
          "score": 95.0,
          "author_first": "Mary",
          "author_middle": "Wollstonecraft",
          "author_last": "Shelley",
          "_id":6
      }
    ]
    )
  }

  storeAuthors = () =>
  {
    return (
      [{
          "name_first": "Mark",
          "name_middle": null,
          "name_last": "Twain",
          "rank": 1,
          "appearances": 4400,
          "text_count": 20,
          "_id":1
      }, {
          "name_first": "Mary",
          "name_middle": "Wollstonecraft",
          "name_last": "Shelley",
          "rank": 2,
          "appearances": 2000,
          "text_count": 13,
          "_id":2
      }, {
          "name_first": "William",
          "name_middle": "A.",
          "name_last": "Strunk",
          "rank": 3,
          "appearances": 1000,
          "text_count": 10,
          "_id":3
      }, {
          "name_first": "Mark",
          "name_middle": null,
          "name_last": "Twain",
          "rank": 1,
          "appearances": 4400,
          "text_count": 20,
          "_id":4
      }, {
          "name_first": "Mary",
          "name_middle": "Wollstonecraft",
          "name_last": "Shelley",
          "rank": 2,
          "appearances": 2000,
          "text_count": 13,
          "_id":5
      }, {
          "name_first": "William",
          "name_middle": "A.",
          "name_last": "Strunk",
          "rank": 3,
          "appearances": 1000,
          "text_count": 10,
          "_id":6
      }]
    )
  }

  renderList = () =>
  {
    switch (this.state.listType) {
      case 'TITLES':
        return (<TitleList store={this.storeTitle()}/>)
        break;

      case 'AUTHORS':
        return (<AuthorList store={this.storeAuthors()}/>)
        break;

      default:

    }
  }

  changeList = (e) => this.setState({listType:e.target.innerHTML})


  renderButtonsNavigation = () =>
  {
    let titlesClassName,
        authorsClassName;
    if(this.state.listType === 'TITLES') {
      titlesClassName = 'selected';
      authorsClassName = '';
    }
    else {
      titlesClassName = '';
      authorsClassName = 'selected';
    }

    return (
      <div className="buttons-navigation">
        <span ref="TITLES" className={titlesClassName} onClick={this.changeList}>TITLES</span>
        <span ref="AUTHORS" className={authorsClassName} onClick={this.changeList}>AUTHORS</span>
      </div>
    )
  }

  render() {

      return (
        <div className="container-top-ranked-list">
          <div className="navigation">
            <p>Top Ranked</p>
            {this.renderButtonsNavigation()}
          </div>
          {this.renderList()}
        </div>
      )
  }
}

export default ContainerTopRankedList
