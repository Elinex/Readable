import React, { Component } from 'react'
import './App.css'
import EditPost from './posts/EditPost'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PostDetail from './posts/PostDetail'
import { BrowserRouter } from 'react-router-dom'
import MainView from './MainView'
import { getCategories } from './categories/actions'
import { getPosts } from './posts/actions'

export class App extends Component {

  componentWillMount(){
    this.props.getCategories()
    this.props.getPosts()
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Readout</h1>
          </header>

          <Route exact path='/'
            render={() => (
              <MainView posts={this.props.posts}/>
            )}
          />

          <Route exact path='/posts/:id'
            render={({match}) => (
              // <div>{JSON.stringify(match.params.id)}</div>
              <PostDetail
                postId={match.params.id}
              />
            )}
          />

          <Route exact path='/editPost/:id'
            render={({match}) => (
              <EditPost
                postID={match.params.id}
              />
            )}
          />

          <Route path='/:category/posts'
            render={({match}) => (
              <MainView posts={this.props.posts.filter(post =>
                (post.category === match.params.category))}/>
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state,
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: (categoriesList) => dispatch(getCategories(categoriesList)),
    getPosts: (postsList) => dispatch(getPosts(postsList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
