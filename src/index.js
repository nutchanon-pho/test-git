import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'

const target = document.querySelector('#root')
//hello leklek
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
