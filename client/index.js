import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import App from './containers/App'
import ListItem from './components/ListItem'

const store = configureStore()

render(
  <Provider store ={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
