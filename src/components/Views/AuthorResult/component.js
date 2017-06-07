import React, {Component} from 'react'
import './component.sass'

import ButtonLabel from '../../Dummy/Buttons/ButtonLabel/component.js'
import SVGFacebookLogo from '../../Dummy/SVG/FacebookLogo/component.js'
import SVGTwitterLogo from '../../Dummy/SVG/TwitterLogo/component.js'
import BadgesList from '../../Dummy/Lists/BadgesList/component.js'
import AuthorTitlesList from '../../Dummy/Lists/AuthorTitlesList/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import image from './Fredric_Jameson.png'

class DummyAuthorResult extends Component {
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
      ]
        return (
          <div className="result-view">
            <div className="result-view-content">
              <div className="title-view">
                <ButtonLabel title="AUTHORS" backgroundColor="#9BD331" color="#FFFFFF" border=""/>
                <SVGFacebookLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
                <SVGTwitterLogo colorOval="#C8CFD7" colorShape="#FFFFFF"/>
              </div>
              <div className="left-content">
                <div className="title-view">
                  <img src={image} alt="image-author"/>
                  <p>
                    Fredric Jameson
                  </p>
                </div>

                <p className="description">
                  Fredric Jameson (born 14 April 1934) is an American literary critic and Marxist political theorist. He is best known for his analysis of contemporary cultural trends. He once described postmodernism as the spatialization of culture under the pressure of organized capitalism. Jameson's best-known books include Postmodernism, or, The Cultural Logic of Late Capitalism, The Political Unconscious, and Marxism and Form.
                </p>
                <div className="buttons-label">
                  <ButtonLabel title="APPEARANCES 575" backgroundColor="#A9B4C0" color="#FFFFFF" border=""/>

                </div>
                <div className="badge">
                  <BadgesList store={badgetList} />
                </div>
                <div className="author-titles">
                  <AuthorTitlesList/>
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

export default DummyAuthorResult
