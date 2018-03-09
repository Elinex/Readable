import React, { Component } from 'react'
import './App.css'
import AddPost from './posts/AddPost'
import EditPost from './posts/EditPost'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Post from './posts/Post'
import { BrowserRouter } from 'react-router-dom'
import MainView from './MainView'
import { Link } from 'react-router-dom'
import { getCategories } from './categories/actions'
import { getPosts } from './posts/actions'

export class App extends Component {

  componentWillMount(){
    this.props.getCategories()
    this.props.getPosts()
  }

  render() {
    console.log(this.props);

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Readout</h1>
          </header>

          <Route exact path='/'
            render={() => (
              <MainView />
            )}
          />

          <Route exact path='/addPost'
            render={() => (
              <AddPost />
            )}
          />

          <Route exact path='/editPost/:id'
            render={({match}) => (
              // <div>{JSON.stringify(match.params.id)}</div>
              <EditPost
                postID={match.params.id}
              />
            )}
          />

          <Route path='/:category/posts'
            render={({match}) => (
              // <div>{JSON.stringify(match.params.category)}</div>
              <div>
                <div>POSTS BY CATEGORY</div>
                {/* {this.props.posts.filter(post => (post.category === match.params.category)).map(post => (
                  <Post
                    key={post.id}
                    post={post}
                  />
                ))} */}
                <Link to='/'>Go to MainView</Link>
              </div>
            )}
          />

          <Route path='/posts/:id'
            render={({match}) => (
              <div>
                <div>POST VISUALIZATION</div>
                {/* {this.props.posts.filter(post => (post.id === match.params.id)).map(post => (
                  <Post
                    key={post.id}
                    post={post}
                  />
                ))} */}
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
}

// function mapStateToProps(state){
//   return {
//     posts: state.posts,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    getCategories: (categoriesList) => dispatch(getCategories(categoriesList)),
    getPosts: (postsList) => dispatch(getPosts(postsList)),
  }
}

export default connect(null, mapDispatchToProps)(App)
