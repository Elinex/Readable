import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { guid } from './helpers'
import * as dataAPI from './dataAPI'
import { addCommentAction } from './actions'
import { connect } from 'react-redux'

const style = {
  textTransform: 'capitalize',
  color: 'pink'
}

class NewComment extends Component {
  state = {
    open: false,
    author: '',
    body: ''
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  addComment = () => {
    const newComment = {
      id: guid(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.parentID
    }
    dataAPI.addCommentAPI(newComment).then(res => {
      this.props.dispatch(addCommentAction(res))
    })
    this.setState({open: false})
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.addComment}
      />,
    ];

    return (
      <div>
        <FlatButton  labelStyle={style} label="New comment" onClick={this.handleOpen} />
        <Dialog
          title="Write a new comment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            id='author'
            floatingLabelText="Author"
            defaultValue={this.state.author}
            type="text"
            onChange={(event) => this.setState({author: event.target.value})}
          /><br />
          <TextField
            id='body'
            floatingLabelText="Text"
            defaultValue={this.state.body}
            type="text"
            onChange={(event) => this.setState({body: event.target.value})}
          /><br />
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(NewComment)
