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
        <h1>New post</h1>
        <div>
          <TextField
            name="title*"
            floatingLabelText="Title"
          /><br />
          <TextField
            name="author*"
            floatingLabelText="Author"
          /><br />
          <TextField
            name="text*"
            floatingLabelText="Text"
          /><br />
          <SelectField
            // multiple={true}
            hintText="Post category"
            value={value}
            onChange={this.handleChange}
          >
            {this.menuItems(value)}
          </SelectField><br />
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
