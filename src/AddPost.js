import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const categories = ['React', 'Redux', 'Udacity']

class AddPost extends Component{
  state = {
    value: [],
  }

  handleChange = (event, index, value) => this.setState({value})

  menuItems(value) {
    return categories.map((category) => (
      <MenuItem
        key={category}
        insetChildren={true}
        checked={value && value.indexOf(category) > -1}
        value={category}
        primaryText={category}
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

export default AddPost
