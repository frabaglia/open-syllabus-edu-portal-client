import React, {Component} from 'react';
import {Link} from 'react-router';
import './component.sass';
import ButtonLabel from '../../Buttons/ButtonLabel/component.js'


class MostTaughtTextOverallList extends Component {

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
        <div className="most-taught-texts-overall-list">
          <p className="name-seccion">
            Most Taught Text Overall
          </p>
          <ul>
            <li>
              <p className="name-title">
                <Link to={{
                  pathname: "/result/title",
                  query: {id:'id'}
                }}>
                  Introduction to Economics
                </Link>
              </p>
              <p className="name-author">
                Paul Samuelson
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
                  9 appearances in Economics, Business
                </span>
              </div>
            </li>

            <li>
              <p className="name-title">
                <Link to={{
                  pathname: "/result/title",
                  query: {id:'id'}
                }}>
                  Biology
                </Link>
              </p>
              <p className="name-author">
                Olivia Passat
              </p>
              <p className="name-editorial">
                <Link to={{
                  pathname: "/result/publisher",
                  query: {id:'id'}
                }}>
                  Routledge
                </Link>
              , 2012
              </p>
              <div>
                <span className="appearances">
                  4 appearances in Biology
                </span>
              </div>
            </li>
          </ul>
          <ButtonLabel title="SEE MORE" color="#A9B4C0" backgroundColor="" border="1px solid #E8E8E8"/>
        </div>
      )
  }
}

export default MostTaughtTextOverallList
