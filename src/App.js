import React, { Component } from 'react'
import './App.css'
import AddPost from './AddPost'
import * as dataAPI from './dataAPI'
import { addCategories, addPost } from './actions'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Post from './Post'
import sortBy from 'sort-by'

class App extends Component {
  componentDidMount (){
    dataAPI.getCategories().then(res => {
      this.props.dispatch(addCategories(res.categories))
    })
    dataAPI.getPosts().then(res =>{
      this.props.dispatch(addPost(res))
    })

  }

  // sortPosts = (value) => {
  //   this.setState({
  //     posts: this.state.posts.sort(sortBy(value))
  //   })
  // }


  render() {
    console.log(this.props)

    this.props.posts.sort(sortBy('-voteScore'))
    
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readout</h1>
        </header>

        <Route exact path='/'
          render={() => (
            <div>
              <div>MAIN PAGE</div>
              {this.props.posts.map(post => {
                return (
                  <Post
                    key={post.id}
                    title={post.title}
                    timestamp={post.timestamp}
                    body={post.body}
                    author={post.author}
                    category={post.category}
                    commentCount={post.commentCount}
                    voteScore={post.voteScore}
                  />
                )
              })}
              <Link to='/addPost' className="btn btn-secondary btn-sm">NEW POST</Link>
            </div>
          )}
        />

        <Route exact path='/addPost'
          render={() => (
            <AddPost />
          )}
        />

        {this.props.categories.map(category => (
          <Route exact path={`/${category.name}`}
            key={category.name}
            render={() => (
              <div>
                <div>POSTS BY CATEGORY</div>
                {this.props.posts.filter(post => (post.category === category.name)).map(post => (
                  <Post
                    key={post.id}
                    title={post.title}
                    timestamp={post.timestamp}
                    body={post.body}
                    author={post.author}
                    category={post.category}
                    commentCount={post.commentCount}
                    voteScore={post.voteScore}
                  />
                ))}
              </div>
            )}
          />
        ))}
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
