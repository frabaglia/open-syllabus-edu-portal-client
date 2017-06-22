import React, {Component} from 'react'
import {Link} from 'react-router';
import Filter from '../../Dummy/Filter/component'
import BadgeContainer from '../../Dummy/BadgeContainer/component'
import BarChart from '../../Dummy/BarChart/component.js'
import MostFrecuentlyAssignedTextList from '../../Dummy/Lists/MostFrecuentlyAssignedTextList/component.js'
import './component.sass'

const chartData = [{
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
},]

const most_frecuently_assigned_texts = [
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
  {
    "_id": 12,
    "title": "Introduction to Economics",
    "author": {
        "_id": 32,
        "author_first": "Neil",
        "author_middle": null,
        "author_last": "Cambell",
    },
    "publisher": {
        "_id": 14,
        "name": "Pengiun Books"
    },
    "pub_year": 2000,
    "appearences": {
        "by_unique_field": {
            "_id": 152,
            "name": "Math",
            "syllabus_count": 9
        }
    }
  },
]

class UniversityLanding extends Component {



    render() {
      let store = this.props.store;
        return (
            <div className="university-landing">
              <div className="filter-container">
                <Filter/>
                <div className="search-view-syllabi-counter">
                  <p>
                    <span>4500</span>
                    Syllabi
                  </p>
                </div>
              </div>
              <div className="content-container">
                <div className="left-side">
                  <div className="badge-component">
                    <BadgeContainer
                      router={this.props.router}
                    />
                  </div>
                  <div className="most-frequently-assigned-text-container">
                    <MostFrecuentlyAssignedTextList
                      store={most_frecuently_assigned_texts}
                      title={true}
                      initPagination={3}
                    />
                  </div>
                </div>
                <div className="right-side">
                  <BarChart
                    title={"Syllabi by Field and Year"}
                    legend={false}
                    store={chartData}
                    isNormalizable={false}
                    getDataNormalizedOrRAW={"Normalized"}
                  />
                </div>
              </div>
            </div>
        )
    }
}

export default UniversityLanding
