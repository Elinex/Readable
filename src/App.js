import React, { Component } from 'react'
import './App.css'
import AddPost from './posts/AddPost'
import EditPost from './posts/EditPost'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import PostResume from './posts/PostResume'
import PostDetail from './posts/PostDetail'
import { BrowserRouter } from 'react-router-dom'
import MainView from './MainView'
import { getCategories } from './categories/actions'
import { getPosts } from './posts/actions'

export class App extends Component {

  componentWillMount(){
    this.props.getCategories()
    this.props.getPosts()
    // this.props.getComments()
  }

  // componentDidMount(){
  //   if (this.props.posts.length > 0){
  //     this.props.posts.map(post => {
  //       this.props.getComments(post.id)
  //     })
  //   }
  // }

  // componentWillReceiveProps(nextProps){
  //   if (nextProps.posts.length > 0){
  //     const a = this.props.posts.reduce((acc, cur) => {
  //       return acc.concat(cur.id)
  //     }, [])
  //     console.log(a);
  //   } else {
  //     return null
  //   }
  // }

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

          <Route exact path='/posts/:id'
            render={({match}) => (
              // <div>{JSON.stringify(match.params.id)}</div>
              <PostDetail
                // post={this.props.posts.filter(post => post.id === match.params.id)[0]}
                postId={match.params.id}
              />
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
                <div>Posts by {match.params.category} category</div>
                {this.props.posts.filter(post => (post.category === match.params.category))
                    .map(post => (
                      <PostResume key={post.id} post={post}/>
                ))}
                <Link to='/'>Go to MainView</Link>
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
    ...state,
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: (categoriesList) => dispatch(getCategories(categoriesList)),
    getPosts: (postsList) => dispatch(getPosts(postsList)),
    // getComments: (commentsList) => dispatch(getComments(commentsList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
