import React from 'react'
import ReactDOM from 'react-dom'
import BarChartComponent from './component'

const store = [{
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

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BarChartComponent store={store}/>, div)
})
