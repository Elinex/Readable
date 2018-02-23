import React, { Component } from 'react'
import './App.css'
import AddPost from './AddPost'
import EditPost from './EditPost'
import * as dataAPI from './dataAPI'
import { addCategoriesAction, getPostsAction, addCommentsAction } from './actions'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Post from './Post'
import sortBy from 'sort-by'
import { BrowserRouter } from 'react-router-dom'
import MainView from './MainView'

export class App extends Component {

  componentWillMount(){
    dataAPI.getPostsAPI().then(postsList => {
      this.props.dispatch(getPostsAction(postsList))
    })
    .then(() => {
      this.props.posts.map(post => {
        return (
          dataAPI.getCommentsAPI(post.id).then(commentsList => {
            if (commentsList.length > 0) {
              commentsList.map(comment => {
                return this.props.dispatch(addCommentsAction(comment))
              })
            }
          })
        )
      })
    })
    .then(() => {
      return this.props.posts.sort(sortBy('-voteScore'))
    })

    dataAPI.getCategoriesAPI().then(categoriesList => {
      this.props.dispatch(addCategoriesAction(categoriesList.categories))
    })

  }

  sortPosts = (option, value) => {
    this.setState({
      valueSortPosts: value
    })
    this.props.posts.sort(sortBy(option))
  }

  changeCategory = (value) => {
    this.setState({
      valueCategory: value
    })
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
                {this.props.posts.filter(post => (post.category === match.params.category)).map(post => (
                  <Post
                    key={post.id}
                    post={post}
                  />
                ))}
              </div>
            )}
          />

          <Route path='/posts/:id'
            render={({match}) => (
              <div>
                <div>POST VISUALIZATION</div>
                {this.props.posts.filter(post => (post.id === match.params.id)).map(post => (
                  <Post
                    key={post.id}
                    post={post}
                  />
                ))}
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App)
