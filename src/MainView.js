import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './posts/Post'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

export class MainView extends Component {
  state = {
    valueSortPosts: 'Sort posts by',
    valueCategory: 'Posts by category'
  }

  sortPosts = (option, value) => {
    this.setState({
      valueSortPosts: value
    })
  }

  changeCategory = (event, index, value) => this.setState({valueCategory: value})

  render() {
    console.log(this.props);

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <DropDownMenu value={this.state.valueSortPosts} style={{fontWeight: 'bold' }}>
              <MenuItem value={'Sort posts by'} primaryText='Sort posts by' disabled={true}/>
              <MenuItem value={'Recently posted'} primaryText='Recently posted' onClick={() => this.sortPosts('-timestamp', 'Recently posted')}/>
              <MenuItem value={'Most commented'} primaryText='Most commented' onClick={() => this.sortPosts('-commentCount', 'Most commented')}/>
              <MenuItem value={'Highest score'} primaryText='Highest score' onClick={() => this.sortPosts('-voteScore', 'Highest score')}/>
            </DropDownMenu>
          </ToolbarGroup>

          <ToolbarGroup firstChild={true}>
            <DropDownMenu
              value={this.state.valueCategory}
              style={{fontWeight: 'bold' }}
              onChange={this.changeCategory}
            >
              <MenuItem value={this.state.valueCategory} primaryText='Posts by category' disabled={true} />
              {this.props.categories.map(category => {
                return (
                  <MenuItem
                    key={category}
                    value={category}
                    primaryText={<Link to={`/${category}/posts`}>{category}</Link>}
                  />
                )
              })}
            </DropDownMenu>
          </ToolbarGroup>
        </Toolbar>

        {this.props.posts.map(post => {
          return (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>Post link</Link>
            </div>

          )
        })}
        <Link to='/addPost' className='btn btn-secondary btn-sm'>NEW POST</Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    categories: state.categories.reduce((acc,cur) => {
      return acc.concat(cur.name)
    }, []),
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(MainView)
