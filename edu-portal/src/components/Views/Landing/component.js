import React, {Component} from 'react'
import InternalNavBar from '../../Dummy/InternalNavBar/component'
import NetworkGraph from '../../Dummy/NetworkGraph/component'
import MostFrecuentContainerList from '../../Dummy/MostFrecuentContainerList/component.js'
import Map from '../../Dummy/Map/component.js'
import BarChart from '../../Dummy/BarChart/component.js'
import './component.sass'

const data= [
  {
    label: 'Economics',
    values: [
      {x: '1997', y: 2000},
      {x: '1998', y: 2000},
      {x: '1999', y: 2000},
      {x: '2000', y: 2000},
      {x: '2001', y: 2000},
      {x: '2002', y: 2000},
      {x: '2003', y: 2000},
      {x: '2004', y: 2000},
      {x: '2005', y: 2000},
      {x: '2006', y: 2000},
      {x: '2007', y: 2000},
      {x: '2008', y: 2000},
      {x: '2009', y: 2000},
      {x: '2010', y: 2000},
      {x: '2011', y: 6000},
      {x: '2012', y: 2500},
      {x: '2013', y: 5500},
      {x: '2014', y: 6000},
      {x: '2015', y: 4000},
      {x: '2016', y: 4000},
    ]
  },
  {
    label: 'Literature',
    values: [
      {x: '1997', y: 3000},
      {x: '1998', y: 5000},
      {x: '1999', y: 0},
      {x: '2000', y: 4000},
      {x: '2001', y: 0},
      {x: '2002', y: 1500},
      {x: '2003', y: 3000},
      {x: '2004', y: 0},
      {x: '2005', y: 6000},
      {x: '2006', y: 0},
      {x: '2007', y: 0},
      {x: '2008', y: 7000},
      {x: '2009', y: 0},
      {x: '2010', y: 10000},
      {x: '2011', y: 0},
      {x: '2012', y: 20000},
      {x: '2013', y: 0},
      {x: '2014', y: 2000},
      {x: '2015', y: 3000},
      {x: '2016', y: 3000},
    ]
  },
  {
    label: 'History',
    values: [
      {x: '1997', y: 3800},
      {x: '1998', y: 3800},
      {x: '1999', y: 3800},
      {x: '2000', y: 3800},
      {x: '2001', y: 3800},
      {x: '2002', y: 3800},
      {x: '2003', y: 3800},
      {x: '2004', y: 3800},
      {x: '2005', y: 3800},
      {x: '2006', y: 3800},
      {x: '2007', y: 3800},
      {x: '2008', y: 3800},
      {x: '2009', y: 3800},
      {x: '2010', y: 3800},
      {x: '2011', y: 3800},
      {x: '2012', y: 7000},
      {x: '2013', y: 3800},
      {x: '2014', y: 2000},
      {x: '2015', y: 2000},
      {x: '2016', y: 2000},
    ]
  },
  {
    label: 'English',
    values: [
      {x: '1997', y: 3000},
      {x: '1998', y: 5000},
      {x: '1999', y: 0},
      {x: '2000', y: 4000},
      {x: '2001', y: 0},
      {x: '2002', y: 1500},
      {x: '2003', y: 3000},
      {x: '2004', y: 0},
      {x: '2005', y: 6000},
      {x: '2006', y: 0},
      {x: '2007', y: 0},
      {x: '2008', y: 7000},
      {x: '2009', y: 0},
      {x: '2010', y: 0},
      {x: '2011', y: 0},
      {x: '2012', y: 2000},
      {x: '2013', y: 0},
      {x: '2014', y: 0},
      {x: '2015', y: 2000},
      {x: '2016', y: 3800},
    ]
  },
  {
    label: 'Biology',
    values: [
      {x: '1997', y: 3000},
      {x: '1998', y: 5000},
      {x: '1999', y: 0},
      {x: '2000', y: 4000},
      {x: '2001', y: 0},
      {x: '2002', y: 1500},
      {x: '2003', y: 3000},
      {x: '2004', y: 0},
      {x: '2005', y: 6000},
      {x: '2006', y: 0},
      {x: '2007', y: 0},
      {x: '2008', y: 7000},
      {x: '2009', y: 0},
      {x: '2010', y: 0},
      {x: '2011', y: 0},
      {x: '2012', y: 2000},
      {x: '2013', y: 0},
      {x: '2014', y: 0},
      {x: '2015', y: 0},
      {x: '2016', y: 4000},
    ]
  },
]

const mapData = [
  {
    "_id": 55,
    "lat": 39.61,
    "lon": -105.02,
    "name": "FICH - Universidad Nacional del Litoral",
    "formatedAdress": "Santa fe, Santa fe",
    "syllabus_count": 20000
  },
  {
    "_id": 55,
    "lat": 39.74,
    "lon": -104.99,
    "name": "FICH - Universidad Nacional del Litoral",
    "formatedAdress": "Santa fe, Santa fe",
    "syllabus_count": 20000
  },
  {
    "_id": 55,
    "lat": 39.73,
    "lon": -104.8,
    "name": "FICH - Universidad Nacional del Litoral",
    "formatedAdress": "Santa fe, Santa fe",
    "syllabus_count": 20000
  },
  {
    "_id": 55,
    "lat": 39.77,
    "lon": -105.23,
    "name": "FICH - Universidad Nacional del Litoral",
    "formatedAdress": "Santa fe, Santa fe",
    "syllabus_count": 20000
  },
]

class DummyLanding extends Component {

  render() {
    return (
        <div className="landing">
            <div className="column landing-title">
                <p>
                    Mapping the college curriculum acros <span>2,230,117</span> syllabi.
                </p>
            </div>
            <InternalNavBar/>
            <div className="landing-content">
              <div className="left-content">
                <MostFrecuentContainerList
                  router={this.props.router}
                  changeCurrentCategoryType={this.props.changeCurrentCategoryType}
                  currentCategoryType={this.props.currentCategoryType}
                  currentCategoryData={this.props.currentCategoryData}
                />
              </div>
              <div className="right-content">
                <Map
                  title={'Syllaby Map'}
                  lat={39.73}
                  lng={-104.99}
                  zoom={10}
                  store={mapData}
                />
                <BarChart
                  title={"Syllabi by Field and Year"}
                  legend={true}
                  store={data}
                  isNormalizable={false}
                />
                <div className="container-network-graph">
                  <NetworkGraph/>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default DummyLanding
