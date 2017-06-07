import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import ContainerList from '../../Dummy/ContainerList/component.js'
import BarChart from '../../Dummy/BarChart/component.js'

class InstitutionFieldResult extends Component {

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
      }, {
          "title": "Biology",
          "pub_year": 1987,
          "rank": 2,
          "appearances": 3057,
          "score": 97.2,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      }, {
          "title": "Frankenstein",
          "pub_year": 1818,
          "rank": 3,
          "appearances": 2320,
          "score": 95.0,
          "author_first": "Mary",
          "author_middle": "Wollstonecraft",
          "author_last": "Shelley",
      }, {
          "title": "The Elements of Style",
          "pub_year": 1920,
          "rank": 1,
          "appearances": 3934,
          "score": 100.0,
          "author_first": "William",
          "author_middle": "A.",
          "author_last": "Strunk",
      }, {
          "title": "Biology",
          "pub_year": 1987,
          "rank": 2,
          "appearances": 3057,
          "score": 97.2,
          "author_first": "Neil",
          "author_middle": null,
          "author_last": "Cambell",
      }, {
          "title": "Frankenstein",
          "pub_year": 1818,
          "rank": 3,
          "appearances": 2320,
          "score": 95.0,
          "author_first": "Mary",
          "author_middle": "Wollstonecraft",
          "author_last": "Shelley",
      }
    ]
    )
  }

    render() {
        return (
          <div className="result-view">
              <div className="result-view-content">
                <div className="title-view">
                  <ButtonLabel title="SCHOOLS/FIELDS" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                  <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                  <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                </div>
                <div className="left-content">
                  <p className="title-view">
                    Amherst College: History
                  </p>
                  <div className="top-ranked">
                    <div className="top-ranked-header">
                      <p>Top Ranked Titles</p>
                      <ButtonLabel title="360 SYLLABI" backgroundColor="#67AAF9" color="#FFFFFF" border=""/>
                    </div>
                    <ContainerList list="titleList" store={this.storeTitle()}/>
                  </div>
                </div>

                <aside className="right-content">
                  <BarChart title={"Top Titles by Year"} legend={false}/>
                </aside>
              </div>
          </div>
        )
    }
}

export default InstitutionFieldResult
