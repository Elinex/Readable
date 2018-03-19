import React, { Component } from 'react'
import './App.css'
import EditPost from './posts/EditPost'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Post from './posts/Post'
import { BrowserRouter } from 'react-router-dom'
import MainView from './MainView'
import { getCategories } from './categories/actions'
import { getPosts } from './posts/actions'
import { getCommentsAction } from './comments/actions'
import sortBy from 'sort-by'
import CategoriesMenu from './categories/CategoriesMenu'
import * as dataAPI from './dataAPI'

export class App extends Component {

  componentWillMount(){
    this.props.getCategories()
    this.props.getPosts()
  }

  // componentDidMount(){
  //   this.props.posts.map(post =>
  //     dataAPI.getCommentsAPI(post.id)
  //       .then(res =>
  //         this.props.dispatch(getCommentsAction(post.id, res))
  //       )
  //   )
  // }

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
          // <div>{JSON.stringify(match.params.id)}</div>
            render={({match}) => {
              const post = this.props.posts
                .filter(post => post.id === match.params.id)
                .reduce((acc, cur) => {
                  return cur
                }, {})

              return (
                <div>
                  <CategoriesMenu />
                  <Post post={post} />
                  {/* <PostDetail post={post}/> */}
                </div>
              )
            }}
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

function mapStateToProps(state, ownProps){
  return {
    ...state,
    posts: state.posts.sort(sortBy('-voteScore'))
  }
}

const mapDispatchToProps = { getCategories, getPosts }

export default connect(mapStateToProps, mapDispatchToProps)(App)
