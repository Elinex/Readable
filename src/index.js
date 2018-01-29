import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import categories from './reducers'

const store = createStore(categories,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store)

ReactDOM.render(
  <MuiThemeProvider>
    <App store={store}/>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
