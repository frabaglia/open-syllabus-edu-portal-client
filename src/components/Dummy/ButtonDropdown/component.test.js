import React from 'react'
import ReactDOM from 'react-dom'
import ButtonDropdown from './component'

it('renders without crashing', () => {
    const div = document.createElement('div')

    const router = {
      children:{},
      location:{
        pathname: 'pathname/pathname/pathname'
      },
      params:{},
      route:{},
      routeParams:{},
      router:{},
      routes:[
        {
          childRoutes:[],
          component: '',
          path: 'path'
        },
        {
          childRoutes:[],
          component: '',
          path: 'path'
        }
      ]
    }
    ReactDOM.render(
        <ButtonDropdown reactRouter={router}/>, div)
})
