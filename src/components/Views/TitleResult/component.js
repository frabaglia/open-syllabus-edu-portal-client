import React, {Component} from 'react'
import {Link} from 'react-router';
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import TextAssignedList from '../../Dummy/Lists/TextAssignedList/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import Map from '../../Dummy/Map/component.js'


class DummyTitleResult extends Component {



    render() {
      const badgetList = [
        {
          title: 'Public Administration',
          count: 9
        },
        {
          title: 'Business',
          count: 5
        },
        {
          title: 'Undefined',
          count: 1
        },
        {
          title: 'Urban Planing',
          count: 4
        }
      ]
        return (
            <div className="result-view">
                <div className="result-view-content">
                  <div className="title-view">
                    <ButtonLabel title="TITLES" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                    <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                    <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                  </div>
                  <div className="left-content">
                    <p className="title-view">
                      A Manual for Writers of Term Papers, Theses, and Dissertations
                    </p>
                    <p className="author-view">
                      <Link to={{
                        pathname: "/result/author",
                        query: {id:'id'}
                      }}>
                        Georgia Levenson Keohane
                      </Link>
                    </p>
                    <p className="editorial">
                      <Link to={{
                        pathname: "/result/publisher",
                        query: {id:'id'}
                      }}>
                        Pantheon Press, 2013
                      </Link>
                    </p>
                    <p className="description">
                      Whether you’re a policymaker, investor, or involved in a nonprofit, Social Entrepreneurship for the 21st Century gives you the knowledge you need to make the best possible decisions for the future. A former McKinsey consultant reveals how social entrepreneurship has filtered into the workings of government and private enterprise, where social sector values are now shaping “social impact” capitalism.
                    </p>
                    <div className="buttons-label">
                      <ButtonLabel title="RANK 43" backgroundColor="#3188D3" color="#FFFFFF" border=""/>
                      <ButtonLabel title="APPEARANCES 22" backgroundColor="#A9B4C0" color="#FFFFFF" border=""/>
                      <ButtonLabel title="SCORE 100.0" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                    </div>
                    <div className="badge">
                      <BadgesList store={badgetList} type={0}/>
                    </div>
                    <div className="text-assigned">
                      <p className="text-assigned-discription">Texts assigned with <span>A Manual for Writers of Term Papers, Theses, and Dissertations:</span></p>
                      <TextAssignedList/>
                      <ButtonLabel title="Show all" backgroundColor="#A9B4C0" border="" color="#FFFFFF"/>
                    </div>
                  </div>

                  <aside className="right-content">
                    <div className="availability">
                      <p>
                        Availability
                      </p>
                      <p>
                        Open Version:
                        <span><a href="#">Project Gutenberg, SSRN</a></span>
                      </p>
                      <p>
                        Via Your Institution:
                        <span><a href="#">Pearson</a></span>
                      </p>
                    </div>
                    <div className="text-syllabi">
                      <p>
                        See the Text on 24 Syllabi
                      </p>
                      <ul>
                        <li><span>Sociology 1 (MIT)</span></li>
                        <li><span>Sociology 2 (MIT)</span></li>
                        <li><span>Public Policy State 1 (UNER University)</span></li>
                        <li><span>Biology 1 (MIT)</span></li>
                        <li><span>Philosophy 2 (University of Denver)</span></li>
                      </ul>
                    </div>
                    <Map/>
                    <BarChart title={"Top Field by Year"} legend={false}/>
                  </aside>
                </div>
            </div>
        )
    }
}

export default DummyTitleResult
