import React, { Component } from 'react'
import './App.css'
import EditPost from './posts/EditPost'
import Post from './posts/Post'
import { getPosts } from './posts/actions'
import AddPost from './posts/AddPost'
import { connect } from 'react-redux'
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import SortPostsBy from './SortPostsBy'
import sortBy from 'sort-by'
import { getCategories } from './categories/actions'
import CategoriesMenu from './categories/CategoriesMenu'
import AddComment from './comments/AddComment'
import Comment from './comments/Comment'
import {CardHeader} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Toolbar } from 'material-ui/Toolbar'

export class App extends Component {

  componentWillMount(){
    this.props.getCategories()
    this.props.getPosts()
  }

  render() {

    const { posts } = this.props

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Readable</h1>
          </header>
          <Switch>

            <Route exact path='/'
              render={() => (
                <div>
                  <Toolbar>
                    <CategoriesMenu />
                    <SortPostsBy />
                  </Toolbar>
                  {posts.map(post =>
                    <Post key={post.id} post ={post} />
                  )}
                  <FlatButton label="Add new post" containerElement={<AddPost />} />
                </div>
              )}
            />

            <Route path='/:category/:id'
              render={({match}) => {

                const post = posts
                  .filter(post => post.id === match.params.id)
                  .reduce((acc, cur) => {
                    return cur
                  }, {})

                return (
                  <div>
                    {(post.deleted === false) && (
                      <div>
                        <CategoriesMenu />
                        <Post post={post}/>
                        {this.props.comments[post.id].map(comment =>
                          <CardHeader
                            key={comment.id}
                            style={{backgroundColor: 'rgb(232, 232, 232)', margin: '0px 10px 0px 10px'}}
                            subtitle={<Comment comment={comment} />}
                            textStyle={{display: 'contents'}}
                          />
                        )}
                        <AddComment parentId={post.id} />
                      </div>
                    )}
                    {((post.deleted === true) || (post.id === undefined)) && (
                      <div>
                        <h2>Page not found</h2>
                        <center><Link to="/">Return to Home Page</Link></center>
                      </div>
                    )}
                  </div>
                )
              }}
            />

            <Route path='/editPost/:id'
              render={({match}) => (
                <EditPost
                  postID={match.params.id}
                />
              )}
            />

            <Route path='/:category'
              render={({match}) => (
                <div>
                  <Toolbar>
                    <CategoriesMenu />
                    <SortPostsBy />
                  </Toolbar>
                  {posts
                    .filter(post => (post.category === match.params.category))
                    .map(post => <Post key={post.id} post ={post} />)
                  }
                  <FlatButton label="Add new post" containerElement={<AddPost />} />
                </div>
              )}
            />

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    ...state,
    posts: state.posts.sort(sortBy('-voteScore')),
    comments: state.comments
  }
}

const mapDispatchToProps = { getCategories, getPosts }

export default connect(mapStateToProps, mapDispatchToProps)(App)
