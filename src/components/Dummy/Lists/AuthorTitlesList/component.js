import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';


class AuthorTitlesList extends Component {

  // renderFieldItemList = () =>
  // {
  //   let FieldItemsList = [];
  //   if(this.props.store !== []) {
  //     this.props.store.map ( (item, i) => {
  //       FieldItemsList.push(<li key={i}><FieldItemList objectItem={item}/></li>)
  //     });
  //   }
  //
  //   return FieldItemsList;
  // }

  render() {

      return (
        <div className="author-titles-list">
          <p className="name-seccion">
            Author Titles
          </p>
          <ul>
            <li>
              <p className="name-title">
                <Link to={{
                  pathname: "/result/title",
                  query: {id:'id'}
                }}>
                  The Antinomies Of Realism
                </Link>
              </p>
              <p className="name-editorial">
                <Link to={{
                  pathname: "/result/publisher",
                  query: {id:'id'}
                }}>
                Penguin Books
                </Link>
                , 2013
              </p>
              <div>
                <span className="appearances">
                  540 appearances in English, Biology, Architecture, Film
                </span>
                <span className="unattributed">8 unattributed</span>
                <span className="score">SCORE 12.0</span>
              </div>
            </li>

            <li>
              <p className="name-title">
                <Link to={{
                  pathname: "/result/title",
                  query: {id:'id'}
                }}>
                  Archaeologies of the Future: The Desire Called Utopia and Other Science Fictions
                </Link>
              </p>
              <p className="name-editorial">
                <Link to={{
                  pathname: "/result/publisher",
                  query: {id:'id'}
                }}>
                Basic Books
                </Link>
                , 2013
              </p>
              <div>
                <span className="appearances">
                  315 appearances in English, Architecture
                </span>
                <span className="unattributed">8 unattributed</span>
                <span className="score">SCORE 12.0</span>
              </div>
            </li>

            <li>
              <p className="name-title">
                <Link to={{
                  pathname: "/result/title",
                  query: {id:'id'}
                }}>
                  The Geopolitical Aesthetic: Cinema and Space in the World System (Perspectives)
                </Link>
              </p>
              <p className="name-editorial">
                <Link to={{
                  pathname: "/result/publisher",
                  query: {id:'id'}
                }}>
                Duke University Press
                </Link>
                , 1995
              </p>
              <div>
                <span className="appearances">
                  115 appearances in English, Film
                </span>
                <span className="unattributed">8 unattributed</span>
                <span className="score">SCORE 12.0</span>
              </div>
            </li>

            <li>
              <p className="name-title">
                <Link to={{
                  pathname: "/result/title",
                  query: {id:'id'}
                }}>
                  Postmodernism, or, The Cultural Logic of Late Capitalism (Post-Contemporary Interventions)
                </Link>
              </p>
              <p className="name-editorial">
                <Link to={{
                  pathname: "/result/publisher",
                  query: {id:'id'}
                }}>
                Rutgers University Press
                </Link>
                , 1992
              </p>
              <div>
                <span className="appearances">
                  60 appearances in English, Politics
                </span>
                <span className="unattributed">8 unattributed</span>
                <span className="score">SCORE 12.0</span>
              </div>
            </li>
          </ul>
        </div>
      )
  }
}

export default AuthorTitlesList
