import React, { Component } from 'react'
import './App.css'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {ToolbarGroup} from 'material-ui/Toolbar'
import sortBy from 'sort-by'
import { connect } from 'react-redux'

const style = {
  fontWeight: 'bold'
}

class SortPostsBy extends Component {
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

    return (
      <ToolbarGroup>
        <DropDownMenu value={this.state.valueSortPosts} style={style}>
          <MenuItem value={'Sort posts by'} primaryText='Sort posts by' disabled={true}/>
          <MenuItem value={'Recently posted'} primaryText='Recently posted' onClick={() => this.sortPosts('-timestamp', 'Recently posted')}/>
          <MenuItem value={'Most commented'} primaryText='Most commented' onClick={() => this.sortPosts('-commentCount', 'Most commented')}/>
          <MenuItem value={'Highest score'} primaryText='Highest score' onClick={() => this.sortPosts('-voteScore', 'Highest score')}/>
        </DropDownMenu>
      </ToolbarGroup>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(SortPostsBy)
