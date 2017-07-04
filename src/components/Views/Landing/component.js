import React, {Component} from 'react'

import SVGOvalArrowDown from '../../Dummy/SVG/OvalArrowDown/component'
import SVGFeatureIcon1 from '../../Dummy/SVG/FeatureIcon1/component'
import SVGFeatureIcon2 from '../../Dummy/SVG/FeatureIcon2/component'
import SVGFeatureIcon3 from '../../Dummy/SVG/FeatureIcon3/component'
import SVGContactIconEmail from '../../Dummy/SVG/ContactIconEmail/component'
import SVGContactIconPhone from '../../Dummy/SVG/ContactIconPhone/component'
import FeatureContainer from '../../Dummy/FeatureContainer/component'
import './component.sass'
import $ from 'jquery'

class DummyLanding extends Component {

  scrollToTop = () => {
    if(document.body.scrollTop+1 <= $('.feature-container').offset().top - 400){
      $("html, body").animate({scrollTop: $('.feature-container').offset().top - 400 }, 2000);
    }
}

  render() {


    return (
        <div className="landing">
            <div className="landing-title">
              <div className="huge-container">
                <p >
                  This is a short, explicative and super <span>persuasive text</span> for our future potential customers
                </p>
              </div>
                <div className="oval-arrow-down" onClick={() =>{this.scrollToTop()}}>
                  {SVGOvalArrowDown()}
                </div>
            </div>
            <div className="huge-container landing-body">
              <div className="landing-body-title">
                <span>Awesome Features</span>
                <div></div>
              </div>
              <div className="feature-container">
                {FeatureContainer({
                  title: 'First Feature',
                  children: SVGFeatureIcon1({color: '#9BD331'}),
                  description: 'Far away, behind the word mountains, there live the blind texts.'
                })}
                {FeatureContainer({
                  title: 'Second Feature',
                  children: SVGFeatureIcon2({color: '#9BD331'}),
                  description: 'Far away, behind the word mountains, there live the blind texts.'
                })}
                {FeatureContainer({
                  title: 'Third Feature',
                  children: SVGFeatureIcon3({color: '#9BD331'}),
                  description: 'Far away, behind the word mountains, there live the blind texts.'
                })}
              </div>
            </div>
            <div className="aditional-information-container">
              <div className="huge-container aditional-information">
                <div>
                  <div className="landing-body-title aditional-information-title">
                    <span>Need more info?</span>
                    <div></div>
                  </div>
                  <div className="aditional-information-description">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  </div>
                </div>
                <div className="aditional-information-contact">
                  <div>
                    {SVGContactIconEmail()}
                    <p>info@portal.edu</p>
                  </div>
                  <div>
                    {SVGContactIconPhone()}
                    <p>(361)218-4234</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default DummyLanding
