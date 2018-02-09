import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as dataAPI from './dataAPI'
import { guid } from './helpers'
import { addPost } from './actions'
import { Link } from 'react-router-dom'

class AddPost extends Component{
  state = {
    value: [],
    title: '',
    author: '',
    textBody: ''
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

  createPost = () => {
    const newPost = {
      id: guid(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.textBody,
      author: this.state.author,
      category: this.state.value,
    }
    dataAPI.postPost(newPost).then(res => {
      this.props.dispatch(addPost(res))
    })
  }

  handleClick = () => {
    if ((this.state.value.length === 0) || !this.state.title || !this.state.author || !this.state.textBody){
      alert("Fill in all form fields")
    } else {
      this.createPost()
      alert("Post created with success!")
    }
  }

  render(){
    const {value} = this.state
    console.log(this.props);

    return (
      <div>
        <h2>New post</h2>
        <div>
          <TextField
            floatingLabelText="Title"
            type="text"
            onChange={(event) => this.setState({title: event.target.value})}
          /><br />
          <TextField
            floatingLabelText="Author"
            type="text"
            onChange={(event) => this.setState({author: event.target.value})}
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
            onChange={(event) => this.setState({textBody: event.target.value})}
          /><br />
        </div>
        <div>
          <FlatButton
            label="Submit"
            primary={true}
            onClick={this.handleClick}
          />
        </div>
        <Link to='/'>Go to MainView</Link>
      </div>
    )
  }
}

AddPost.propTypes = {
  categories: PropTypes.array.isRequired,
}

function mapStateToProps(state){
  return {
    ...state,
    categories: state.categories.reduce((acc, cur) => {
      return acc.concat(cur.name)
    }, []),
    posts: state.posts
  }
}

export default connect(mapStateToProps)(AddPost);
