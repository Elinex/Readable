import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

const style = {
  fontWeight: {fontWeight: 'bold' }
}

class CategoriesMenu extends Component{
  state = {
    valueCategory: 'Posts by category'
  }

  changeCategory = (event, index, value) => this.setState({valueCategory: value})

  render(){

    const { categories } = this.props

    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu
            value={this.state.valueCategory}
            style={style.fontWeight}
            onChange={this.changeCategory}
          >
            <MenuItem value={this.state.valueCategory} primaryText='Posts by category' disabled={true} />
            {categories.map(category => {
              return (
                <MenuItem
                  key={category}
                  value={category}
                  primaryText={<Link to={`/${category}`}>{category}</Link>}
                />
              )
            })}
            <MenuItem
              value='All categories'
              primaryText={<Link to='/'>all categories</Link>}
            />
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

function mapStateToProps(state){
  return {
    categories: state.categories.reduce((acc,cur) => {
      return acc.concat(cur.name)
    }, []),
  }
}

export default connect(mapStateToProps)(CategoriesMenu)
