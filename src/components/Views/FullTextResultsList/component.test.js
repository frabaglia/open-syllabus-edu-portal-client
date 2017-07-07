import React from 'react'
import ReactDOM from 'react-dom'
import FullTextResultList from './component'

const store={
  syllabus_count: 300,
  syllabi_list: [{
      data: {
        rank: 1,
        title: {
          titleName: 'More Sons About Buildings and Food',
          titleEmail: 'asd@gmail.com'
        }
      },
      dataWrapper: {
        field: 'Architecture',
        year: 'Spring 2010',
        title: "More Sons About Buildings and Food",
        email: 'asd@gmail.com'
      }
    }
  ]
}
const router ={
  location:{
    pathname: 'somePathname'
  }
}

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <FullTextResultList store={store} router={router}/>, div)
})
