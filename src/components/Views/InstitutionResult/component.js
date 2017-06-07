import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import MostTaughtTextOverallList from '../../Dummy/Lists/MostTaughtTextOverallList/component.js'
import Map from '../../Dummy/Map/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import image from './Amherst_College.png'

class InstitutionResult extends Component {
    render() {
      const badgetList = [
        {
          title: 'English',
          count: 420
        },
        {
          title: 'Politics',
          count: 210
        },
        {
          title: 'Architecture',
          count: 99
        },
        {
          title: 'Philosophy',
          count: 72
        },
        {
          title: 'unattributed',
          count: 320
        },
        {
          title: 'English',
          count: 420
        },
        {
          title: 'Politics',
          count: 210
        },
        {
          title: 'Architecture',
          count: 99
        },
        {
          title: 'Philosophy',
          count: 72
        },
        {
          title: 'unattributed',
          count: 320
        },
        {
          title: 'English',
          count: 420
        },
        {
          title: 'Politics',
          count: 210
        },
        {
          title: 'Architecture',
          count: 99
        },
        {
          title: 'Philosophy',
          count: 72
        },
        {
          title: 'unattributed',
          count: 320
        },
        {
          title: 'English',
          count: 420
        },
        {
          title: 'Politics',
          count: 210
        },
        {
          title: 'Architecture',
          count: 99
        },
        {
          title: 'Philosophy',
          count: 72
        },
        {
          title: 'unattributed',
          count: 320
        },
      ]
        return (
          <div className="result-view">
            <div className="result-view-content">
              <div className="title-view">
                <ButtonLabel title="SCHOOLS" backgroundColor="#9BD331" border="" color="#FFFFFF"/>
                <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
              </div>
              <div className="left-content">
                <div className="title-view">
                  <img src={image} alt="image-author"/>
                  <p>
                    Amherst College
                  </p>
                </div>

                <p className="description">
                  Amherst College is a private liberal arts college located in Amherst, Massachusetts, United States. Founded in 1821 as an attempt to relocate Williams College by its president, Zephaniah Swift Moore, Amherst is the third oldest institution of higher education in Massachusetts.[6] The institution was named after the town, which in turn had been named after Lord Jeffery Amherst. Amherst was established as a men's college and became coeducational in 1975.
                </p>
                <div className="buttons-label">
                  <ButtonLabel title="435 SYLLABI" backgroundColor="#3188D3" color="#FFFFFF" border=""/>
                </div>
                <div className="badge">
                  <BadgesList store={badgetList} type={1}/>
                  <p className="legend-badge">
                    <span></span>
                    More than 250 Syllabi, click for more info
                  </p>
                </div>
                <div className="most-taught-texts-overall">
                  <MostTaughtTextOverallList/>
                </div>
              </div>

              <aside className="right-content">
                <div className="institution-container-map">
                  <Map/>
                </div>
                <BarChart title={"Top Titles by Year"} legend={false}/>
              </aside>
            </div>
          </div>
        )
    }
}

export default InstitutionResult
