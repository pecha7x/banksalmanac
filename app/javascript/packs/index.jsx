/* eslint-disable import/default */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from '../src/routes'
import injectTapEventPlugin from 'react-tap-event-plugin'
require('../src/favicon.ico')
import '../src/styles.scss'
import 'font-awesome/css/font-awesome.css'
import 'flexboxgrid/css/flexboxgrid.css'

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router routes={routes} history={browserHistory} />,
    document.body.appendChild(document.createElement('div'))
  )
})
