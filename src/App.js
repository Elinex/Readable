import React, { Component } from 'react'
import './App.css'
import AddPost from './AddPost'
import * as dataAPI from './dataAPI'
import { addCategories, addPost } from './actions'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount (){
    dataAPI.getCategories().then(res => {
      this.props.dispatch(addCategories(res.categories))
    })
    dataAPI.getPosts().then(res =>{
      this.props.dispatch(addPost(res))
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

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);
