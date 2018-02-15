import React, { Component } from 'react'
import './App.css'
import AddPost from './AddPost'
import * as dataAPI from './dataAPI'
import { addCategories, addPost } from './actions'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Post from './Post'
import sortBy from 'sort-by'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

class App extends Component {
  state = {
    valueSortPosts: 1,
    valueCategory: 'none',
    // postsIds: ['8xf0y6ziyjabvozdd253nd', '6ni6ok3ym7mf1p33lnez']
  }

  componentWillMount (){
    this.props.getAllPosts().then(() => {
      this.props.posts.map(post => {
        return (
          dataAPI.getComments(post.id).then(res => {
            console.log(res);
          })
        )
      })
    })

    this.props.getAllCategories()
    // this.props.getComments()
  }

  componentDidMount(){
    this.props.posts.sort(sortBy('-voteScore'))
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


    console.log(this.props);
    // this.props.getAllPosts()
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Readout</h1>
        </header>

        <Route exact path='/'
          render={() => (
            <div>
              <Toolbar>
                <ToolbarGroup>
                  <DropDownMenu value={this.state.valueSortPosts} style={{fontWeight: 'bold' }}>
                    <MenuItem value={1} primaryText="Sort posts by" disabled={true}/>
                    <MenuItem value={2} primaryText="Recently posted" onClick={() => this.sortPosts('-timestamp', 2)}/>
                    <MenuItem value={3} primaryText="Most commented" onClick={() => this.sortPosts('-commentCount', 3)}/>
                    <MenuItem value={4} primaryText="Highest score" onClick={() => this.sortPosts('-voteScore', 4)}/>
                  </DropDownMenu>
                </ToolbarGroup>

                <ToolbarGroup firstChild={true}>
                  <DropDownMenu value={this.state.valueCategory} style={{fontWeight: 'bold' }}>
                    <MenuItem value={'none'} primaryText="Posts by category" />
                    {this.props.categories.map(category => {
                      return (
                        <MenuItem key={category.name} children={
                          <Link to={`/${category.name}/posts`}>{category.name}</Link>
                        } />
                      )
                    })}
                  </DropDownMenu>
                </ToolbarGroup>
              </Toolbar>

              {this.props.posts.map(post => {
                return (
                  <Post
                    key={post.id}
                    id={post.id}
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

        <Route path='/:category/posts'
          render={({match}) => (
            // <div>{JSON.stringify(match.params.category)}</div>
            <div>
              <div>POSTS BY CATEGORY</div>
              {this.props.posts.filter(post => (post.category === match.params.category)).map(post => (
                <Post
                  key={post.id}
                  id={post.id}
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

        <Route path='/posts/:id'
          render={({match}) => (
            // <div>{match.params.id}</div>
            <div>
              <div>POST VISUALIZATION</div>
              {this.props.posts.filter(post => (post.id === match.params.id)).map(post => (
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
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state,
    // comments: state.comments.reduce((acc, cur) => {
    //   return acc.concat(cur.id)
    // }, [])
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return ({
    // getComments: (ownProps) => {
    //   return (
    //     dataAPI.getComments(ownProps).then(res => {
    //       console.log(res);
    //       dispatch(addComments(res))
    //     })
    //   )
    // },

    getAllPosts: () => {
      return (
        dataAPI.getPosts().then(res => {
          dispatch(addPost(res))
        })
      )
    },

    getAllCategories: () => {
      return (
        dataAPI.getCategories().then(res => {
          dispatch(addCategories(res.categories))
        })
      )
    }

  })
}




export default connect(mapStateToProps, mapDispatchToProps)(App)
