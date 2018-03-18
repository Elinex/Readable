import React, { Component } from 'react'
import './App.css'
import Post from './posts/Post'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import AddPost from './posts/AddPost'
import sortBy from 'sort-by'
import CategoriesMenu from './categories/CategoriesMenu'

class MainView extends Component {
  state = {
    valueSortPosts: 'Sort posts by',
  }

  sortPosts = (option, value) => {
    this.setState({
      valueSortPosts: value
    })
    this.props.posts.sort(sortBy(option))
  }

  render() {

    const { posts } = this.props

    return (
      <div>
        <Toolbar>
          <CategoriesMenu />

          <ToolbarGroup>
            <DropDownMenu value={this.state.valueSortPosts} style={{fontWeight: 'bold' }}>
              <MenuItem value={'Sort posts by'} primaryText='Sort posts by' disabled={true}/>
              <MenuItem value={'Recently posted'} primaryText='Recently posted' onClick={() => this.sortPosts('-timestamp', 'Recently posted')}/>
              <MenuItem value={'Most commented'} primaryText='Most commented' onClick={() => this.sortPosts('-commentCount', 'Most commented')}/>
              <MenuItem value={'Highest score'} primaryText='Highest score' onClick={() => this.sortPosts('-voteScore', 'Highest score')}/>
            </DropDownMenu>
          </ToolbarGroup>

        </Toolbar>
        {posts.map(post => {
          return <Post key={post.id} post={post}/>
        })}
        <FlatButton label="Add new post" containerElement={<AddPost />} />
      </div>
    )
  }
}

export default MainView
