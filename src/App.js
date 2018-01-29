import React, { Component } from 'react'
import './App.css'
import AddPost from './AddPost'
import * as dataAPI from './dataAPI'
import { addCategories } from './actions'

class App extends Component {

  componentDidMount (){
    const { store } = this.props
    dataAPI.getCategories().then(res => {
      store.dispatch(addCategories(res.categories))
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readout</h1>
        </header>
        <AddPost />
      </div>
    )
  }
}

export default App;
