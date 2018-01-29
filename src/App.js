import React, { Component } from 'react'
import './App.css'
import AddPost from './AddPost'


class App extends Component {

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

export default App
