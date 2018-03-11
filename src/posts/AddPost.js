import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import * as dataAPI from '../dataAPI'
import { connect } from 'react-redux'
import { guid } from '../helpers'
import { addPostAction } from './actions'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const style = {
  backgroundColor: 'rgb(255, 228, 225)'
}

class AddPost extends Component {
  state = {
    open: false,
    value: [],
    title: '',
    author: '',
    body: '',
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  addPost = () => {
    const newPost = {
      id: guid(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.value,
    }
    dataAPI.postPostAPI(newPost).then(res => {
      this.props.dispatch(addPostAction(res))
    })
    this.setState({open: false})
    alert('Post created with success')
  }

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

  handleChange = (event, index, value) => this.setState({value})

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Add post"
        primary={true}
        keyboardFocused={true}
        onClick={this.addPost}
      />,
    ];

    return (
      <div>
        <FlatButton  labelStyle={style} label="Add new post" onClick={this.handleOpen} />
        <Dialog
          title="Edit the post"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            id='title'
            floatingLabelText="Title"
            type="text"
            onChange={(event) => this.setState({title: event.target.value})}
          /><br />
          <TextField
            id='author'
            floatingLabelText="Author"
            type="text"
            onChange={(event) => this.setState({author: event.target.value})}
          /><br />
          <TextField
            id='body'
            floatingLabelText="Text"
            type="text"
            onChange={(event) => this.setState({body: event.target.value})}
          /><br />
          <SelectField
            hintText="Post category"
            value={this.state.value}
            onChange={this.handleChange}
          >{this.menuItems(this.state.value)}</SelectField><br />
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state,
    categories: state.categories.reduce((acc,cur) => {
      return acc.concat(cur.name)
    }, [])
  }
}

export default connect(mapStateToProps)(AddPost)
