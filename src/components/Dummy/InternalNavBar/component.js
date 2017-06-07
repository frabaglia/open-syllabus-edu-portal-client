import React, {Component} from 'react'
import './component.sass'
import titles_logo from './titles_logo.svg'
import authors_logo from './authors_logo.svg'
import countries_logo from './countries_logo.svg'
import fields_logo from './fields_logo.svg'
import publishers_logo from './publishers_logo.svg'
import schools_logo from './schools_logo.svg'
import {Link} from 'react-router'

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
                                        <img src={titles_logo} alt="titles_logo"/>
                                        <figcaption>TITLES</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/author">
                                <figure>
                                    <div>
                                        <img src={authors_logo} alt="authors_logo"/>
                                        <figcaption>AUTHORS</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/school">
                                <figure>
                                    <div>
                                        <img src={schools_logo} alt="schools_logo"/>
                                        <figcaption>SCHOOLS</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/field">
                                <figure>
                                    <div>
                                        <img src={fields_logo} alt="fields_logo"/>
                                        <figcaption>FIELDS</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/country">
                                <figure>
                                    <div>
                                        <img src={countries_logo} alt="countries_logo"/>
                                        <figcaption>COUNTRIES</figcaption>
                                    </div>
                                </figure>
                            </Link>
                        </div>
                        <div className="links">
                            <Link to="/results-list/publisher">
                                <figure>
                                    <div>
                                        <img src={publishers_logo} alt="publishers_logo"/>
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
