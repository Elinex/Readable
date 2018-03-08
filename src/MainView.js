import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './posts/Post'
import sortBy from 'sort-by'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import * as dataAPI from './dataAPI'
import { getCategories } from './categories/actions'
import { getPostsAction } from './posts/actions'
import { getCommentsAction } from './comments/actions'


export class MainView extends Component {
  state = {
    valueSortPosts: 'Sort posts by',
    valueCategory: 'none'
  }

  // componentWillMount(){
  //   dataAPI.getPostsAPI().then(postsList => {
  //     this.props.dispatch(getPostsAction(postsList))
  //   })
  //   .then(() => {
  //     this.props.posts.map(post => {
  //       return (
  //         dataAPI.getCommentsAPI(post.id).then(commentsList => {
  //           if (commentsList.length > 0) {
  //             commentsList.map(comment => {
  //               return this.props.dispatch(getCommentsAction(comment))
  //             })
  //           }
  //         })
  //       )
  //     })
  //   })
  //   .then(() => {
  //     return this.props.posts.sort(sortBy('-voteScore'))
  //   })
  //
  //   dataAPI.getCategoriesAPI().then(categoriesList => {
  //     this.props.dispatch(getCategoriesAction(categoriesList.categories))
  //   })
  // }

  sortPosts = (option, value) => {
    this.setState({
      valueSortPosts: value
    })
    // this.props.posts.sort(sortBy(option))
  }

  changeCategory = (value) => {
    this.setState({
      valueCategory: value
    })
  }

  render() {

    return (
      <div>Mainview component</div>
      // <div>
      //   <Toolbar>
      //     <ToolbarGroup>
      //       <DropDownMenu value={this.state.valueSortPosts} style={{fontWeight: 'bold' }}>
      //         <MenuItem value={'Sort posts by'} primaryText='Sort posts by' disabled={true}/>
      //         <MenuItem value={'Recently posted'} primaryText='Recently posted' onClick={() => this.sortPosts('-timestamp', 'Recently posted')}/>
      //         <MenuItem value={'Most commented'} primaryText='Most commented' onClick={() => this.sortPosts('-commentCount', 'Most commented')}/>
      //         <MenuItem value={'Highest score'} primaryText='Highest score' onClick={() => this.sortPosts('-voteScore', 'Highest score')}/>
      //       </DropDownMenu>
      //     </ToolbarGroup>
      //
      //     <ToolbarGroup firstChild={true}>
      //       <DropDownMenu value={this.state.valueCategory} style={{fontWeight: 'bold' }}>
      //         <MenuItem value={'none'} primaryText='Posts by category' />
      //         {this.props.categories.map(category => {
      //           return (
      //             <MenuItem key={category.name} children={
      //               <Link to={`/${category.name}/posts`}>{category.name}</Link>
      //             } />
      //           )
      //         })}
      //       </DropDownMenu>
      //     </ToolbarGroup>
      //   </Toolbar>
      //
      //   {this.props.posts.map(post => {
      //     return (
      //       <Post
      //         key={post.id}
      //         post={post}
      //       />
      //     )
      //   })}
      //   <Link to='/addPost' className='btn btn-secondary btn-sm'>NEW POST</Link>
      // </div>
    )
  }
}

export default MainView
