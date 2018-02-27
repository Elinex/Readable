import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import * as dataAPI from './dataAPI'
import { addPostAction, getPostsAction } from './actions'
import { guid } from './helpers'
import { Link } from 'react-router-dom'

class EditPost extends Component{
  state = {
    value: [],
    title: '',
    author: '',
    body: ''
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

  componentDidMount(){
    this.setState({
      value: this.props.postToEdit.category,
      title: this.props.postToEdit.title,
      author: this.props.postToEdit.author,
      body: this.props.postToEdit.body
    })
  }

  editPost = () => {
    const newPost = {
      id: guid(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.value,
    }
    dataAPI.postPostAPI(newPost).then(res => {
      return this.props.dispatch(addPostAction(res))
    })
  }

  componentWillUnmount(){
    const postsAlreadyExist = this.props.posts.filter(post => post.id !== this.props.postID)
    return this.props.dispatch(getPostsAction(postsAlreadyExist))
  }

  handleClick = () => {
    this.editPost()
    alert("Post edited with success!")
  }

  render(){
    console.log(this.props);

    return (
      <div>
        <h2>Edit post</h2>
        <div>
          <TextField
            floatingLabelText="Title"
            value={this.state.title}
            type="text"
            onChange={(event) => this.setState({title: event.target.value})}
          /><br />
          <TextField
            floatingLabelText="Author"
            value={this.state.author}
            type="text"
            onChange={(event) => this.setState({author: event.target.value})}
          /><br />
          <SelectField
            hintText="Post category"
            value={this.state.value}
            onChange={this.handleChange}
          >{this.menuItems(this.state.value)}</SelectField><br />
          <TextField
            multiLine={true}
            floatingLabelText="Text"
            value={this.state.body}
            type="text"
            onChange={(event) => this.setState({body: event.target.value})}
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

function mapStateToProps(state, ownProps){
  return {
    postToEdit: state.posts.filter(post => post.id === ownProps.postID).reduce((acc, cur) => {
      return cur
    }, null),
    categories: state.categories.reduce((acc, cur) => {
      return acc.concat(cur.name)
    }, []),
    posts: state.posts
  }
}

export default connect(mapStateToProps)(EditPost);
