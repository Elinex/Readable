import React, { Component } from 'react'
import './App.css'
import EditPost from './posts/EditPost'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Post from './posts/Post'
import { BrowserRouter } from 'react-router-dom'
import MainView from './MainView'
import { getCategories } from './categories/actions'
import { getPosts } from './posts/actions'
import sortBy from 'sort-by'
import CategoriesMenu from './categories/CategoriesMenu'
import AddComment from './comments/AddComment'
import * as dataAPI from './dataAPI'
import { getCommentsAction } from './comments/actions'
import Comment from './comments/Comment'
import {CardHeader} from 'material-ui/Card'

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
          <Switch>
            <Route exact path='/'
              render={() => {
                this.props.posts.sort(sortBy('-voteScore'))
                return (
                  <MainView posts={this.props.posts}/>
                )
              }}
            />

            <Route path='/:category/:id'
              render={({match}) => {

                const post = this.props.posts
                  .filter(post => post.id === match.params.id)
                  .reduce((acc, cur) => {
                    return cur
                  }, {})

                console.log(this.props.comments)

                return (
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
                <MainView posts={this.props.posts.filter(post =>
                  (post.category === match.params.category))}/>
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
