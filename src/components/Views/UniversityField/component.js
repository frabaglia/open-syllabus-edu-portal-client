import React, {Component} from 'react'
import Filter from '../../Dummy/Filter/component'
import SyllabyAvailableByYear from '../../Dummy/SyllabiAvailableByYearContainer/component'
import CloestPeerTeachingProfiles from '../../Dummy/CloestPeerTeachingProfilesContainer/component'
import ContainerTopRankedList from '../../Dummy/ContainerTopRankedList/component'
import BarChart from '../../Dummy/BarChart/component.js'
import LineChart from '../../Dummy/LineChart/component.js'
import InternalNavbar from '../../Dummy/InternalNavbar/component'
import SyllabiCounter from '../../Dummy/SyllabiCounter/component'
import './component.sass'

const barChartData = [{
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
}]

const lineChartData = [{
  label: 'Economics',
  values: [
    {x: '2010', y: 20},
    {x: '2011', y: 60},
    {x: '2012', y: 25},
    {x: '2013', y: 55},
    {x: '2014', y: 60},
    {x: '2015', y: 40},
    {x: '2016', y: 40},
  ]
},
{
  label: 'Literature',
  values: [
    {x: '2011', y: 0},
    {x: '2012', y: 20},
    {x: '2013', y: 0},
    {x: '2014', y: 20},
    {x: '2015', y: 30},
    {x: '2016', y: 30},
  ]
}]

const syllabyAvailableByYear = [
  {
    year: 2010,
    syllabus_count: 20,
    _id: 10,
    id_year: 2010
  },
  {
    year: 2011,
    syllabus_count: 20,
    _id: 10,
    id_year: 2011
  },
  {
    year: 2012,
    syllabus_count: 300,
    _id: 10,
    id_year: 2012
  },
  {
    year: 2013,
    syllabus_count: 40,
    _id: 10,
    id_year: 2013
  },
]

const cloestPeerTeachingProfiles = [
  {
    title: 'New York University',
    url: 'www.google.com'
  },
  {
    title: 'Yale University',
    url: 'www.google.com'
  },
  {
    title: 'University of Chicago',
    url: 'www.google.com'
  },
  {
    title: 'University of California - Berkley',
    url: 'www.google.com'
  },
  {
    title: 'University of Virginia',
    url: 'www.google.com'
  },
]

const containerTopRankedList = {
      "columbia": [
        {
          "_id": 52,
          "rank": 1,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 2,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 3,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 4,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 5,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 6,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 7,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 8,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 9,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 10,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 11,
          "name": "Columbia",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
      },
    ],
      "allSchools": [
        {
          "_id": 52,
          "rank": 1,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 2,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 3,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 4,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 5,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 6,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 7,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 8,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 9,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 10,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
        },
        {
          "_id": 52,
          "rank": 11,
          "name": "All Schools",
          "author": {
              "_id": 51,
              "author_first": "Neil",
              "author_middle": null,
              "author_last": "Cambell",
          },
          "appearences": {
              "total": 100
          },
          "score": 9.9,
          "pub_year": 1943
      },
    ],

  }

class UniversityField extends Component {



    render() {
      let store = this.props.store;
        return (
            <div className="university-field">
              <div className="search-view-header">
                <div className="search-view-header-title">
                  <span className="third-color small-font-size">University Portal</span>
                  <p className="large-font-size font-bold">Columbia University: Architecture</p>
                </div>
                <div className="search-view-header-navigation">
                  <div className="internal-navbar-filter-container">
                    <div className="internal-navbar-component">
                      <InternalNavbar router={this.props}/>
                    </div>
                    <div className="filter-component">
                      <Filter/>
                    </div>
                  </div>
                  <div className="filter-syllabi-component">
                    {SyllabiCounter({
                      count: 438,
                      subtitle:'Architecture'
                    })}
                  </div>
                </div>
              </div>
              <div className="content-container">
                <div className="left-side">
                  <div className="syllabi-available-by-year-component">
                    <SyllabyAvailableByYear
                      store={syllabyAvailableByYear}
                      router={this.props.router}
                    />
                  </div>
                  <div className="closest-peer-teaching-profiles-component">
                    <CloestPeerTeachingProfiles
                      store={cloestPeerTeachingProfiles}
                    />
                  </div>
                  <div className="most-frequently-assigned-text-component">
                    <ContainerTopRankedList
                      store={containerTopRankedList}
                      navigation={true}
                      defaultListType={"Columbia"}
                      listTypes={["Columbia","All Schools"]}
                    />
                  </div>
                </div>
                <div className="right-side">
                  <div className="bar-chart-component">
                    <BarChart
                      title={"Syllabi by Field and Year"}
                      legend={false}
                      store={barChartData}
                      isNormalizable={false}
                      getDataNormalizedOrRAW={"Normalized"}
                    />
                  </div>
                  <div className="line-chart-component">
                    {/* // FIXME:  */}
                    {/* <LineChart
                      title={"Syllabi by Field and Year"}
                      legend={false}
                      store={barChartData}
                      isNormalizable={false}
                      getDataNormalizedOrRAW={"Normalized"}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default UniversityField
