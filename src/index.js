import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import categories from './reducers'

const store = createStore(categories,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
