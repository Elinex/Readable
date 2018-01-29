import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import * as dataAPI from './dataAPI'
import { addCategories } from './actions'
import { connect } from 'react-redux'

class AddPost extends Component{
  state = {
    value: [],
  }

  componentWillMount (){
    dataAPI.getCategories().then(res => {
      this.props.dispatch(addCategories(res.categories))
    })
  }

  handleChange = (event, index, value) => this.setState({value})

  menuItems(value) {
    return this.props.categories.map((category) => (
      <MenuItem
        key={category.name}
        insetChildren={true}
        checked={value && value.indexOf(category.name) > -1}
        value={category.name}
        primaryText={category.name}
      />
    ))
  }

  render(){
    const {value} = this.state
    
    return (
      <div>
        <h2>New post</h2>
        <div>
          <TextField
            floatingLabelText="Title"
            type="text"
          /><br />
          <TextField
            floatingLabelText="Author"
            type="text"
          /><br />
          <SelectField
            hintText="Post category"
            value={value}
            onChange={this.handleChange}
          >{this.menuItems(value)}</SelectField><br />
          <TextField
            multiLine={true}
            floatingLabelText="Text"
            type="text"
          /><br />
        </div>
        <div>
          <FlatButton
            label="Submit"
            primary={true}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(AddPost);
