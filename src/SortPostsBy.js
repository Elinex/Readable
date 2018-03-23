import React, { Component } from 'react'
import './App.css'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {ToolbarGroup} from 'material-ui/Toolbar'

const style = {
  fontWeight: 'bold'
}

class SortPostsBy extends Component {

  render() {

    return (
      <ToolbarGroup>
        <DropDownMenu value={'Sort posts by'} style={style}>
          <MenuItem value='Sort posts by' primaryText='Sort posts by' disabled={true}/>
          <MenuItem value='Recently posted' primaryText='Recently posted' onClick={() => this.props.sortPosts('-timestamp', 'Recently posted')}/>
          <MenuItem value='Most commented' primaryText='Most commented' onClick={() => this.props.sortPosts('-commentCount', 'Most commented')}/>
          <MenuItem value='Highest score' primaryText='Highest score' onClick={() => this.props.sortPosts('-voteScore', 'Highest score')}/>
        </DropDownMenu>
      </ToolbarGroup>
    )
  }
}

export default SortPostsBy
