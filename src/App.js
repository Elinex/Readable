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
import sortBy from 'sort-by'

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
            <h1 className="App-title">Readable</h1>
          </header>

          <Route exact path='/'
            render={() => {
              this.props.posts.sort(sortBy('-voteScore'))
              return (
                <MainView posts={this.props.posts}/>
              )
            }}
          />

          <Route exact path='/:category/:id'
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

          <Route exact path='/:category'
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
    posts: state.posts.sort(sortBy('-voteScore'))
  }
}

const mapDispatchToProps = { getCategories, getPosts }

export default connect(mapStateToProps, mapDispatchToProps)(App)
