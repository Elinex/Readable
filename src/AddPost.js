import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AddPost extends Component{
  state = {
    value: [],
  }

  handleChange = (event, index, value) => this.setState({value})

  menuItems(value) {
    return this.props.categories.map((category) => (
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
    console.log("this.props in AddPost:", this.props);

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

AddPost.propTypes = {
  categories: PropTypes.array.isRequired,
}

function mapStateToProps(state){
  return {
    categories: state.categories.reduce((acc, cur) => {
      return acc.concat(cur.name)
    }, [])
  }
}

export default connect(mapStateToProps)(AddPost);
