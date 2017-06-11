import React, {Component} from 'react'
import './component.sass'
import {Link} from 'react-router'
import TitlesIcon from '../SVG/TitlesIcon/component'
import SchoolsIcon from '../SVG/SchoolsIcon/component'
import AuthorsIcon from '../SVG/AuthorsIcon/component'
import FieldsIcon from '../SVG/FieldsIcon/component'
import CountriesIcon from '../SVG/CountriesIcon/component'
import PublishersIcon from '../SVG/PublishersIcon/component'

class InternalNavBar extends Component {

    render() {
        return (
            <div className="internal-navbar">
                <div className="button-title">
                    <div>
                        EXPLORER
                    </div>
                </div>
                <div className="container-navbar">
                    <p>What are you looking for?</p>
                    <div className="row-navbar">
                        <div className="links">
                            <Link to="/results-list/title">
                                <figure className='first'>
                                    <div>
                                        <TitlesIcon/>
                                        <figcaption>TITLES</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/author">
                                <figure>
                                    <div>
                                        <AuthorsIcon/>
                                        <figcaption>AUTHORS</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/school">
                                <figure>
                                    <div>
                                        <SchoolsIcon/>
                                        <figcaption>SCHOOLS</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/field">
                                <figure>
                                    <div>
                                        <FieldsIcon/>
                                        <figcaption>FIELDS</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/country">
                                <figure>
                                    <div>
                                        <CountriesIcon/>
                                        <figcaption>COUNTRIES</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/publisher">
                                <figure>
                                    <div>
                                        <PublishersIcon/>
                                        <figcaption>PUBLISHERS</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InternalNavBar
