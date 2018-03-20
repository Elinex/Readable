import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import * as dataAPI from '../dataAPI'
import { editPostAction } from './actions'
import { connect } from 'react-redux'

const style = {
  fontSize: '12px',
  color: 'rgba(0, 0, 0, 0.54)'
}

class EditPost extends Component {
  state = {
    open: false,
    title: this.props.post.title,
    body: this.props.post.body
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  checkFields = () => {
    if ((this.state.title === '') || (this.state.body === '')){
      alert('Fill all the fields')
    } else {
      this.editPost()
      alert('Post edited with success')
    }
  }

  editPost = () => {
    const editedPost = {
      body: this.state.body,
      title: this.state.title,
    }
    dataAPI.editPostAPI(this.props.post.id, editedPost).then(res => {
      this.props.dispatch(editPostAction(res))
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
        label="Edit"
        primary={true}
        keyboardFocused={true}
        onClick={this.checkFields}
      />
    ]

    return (
      <div>
        <FlatButton  labelStyle={style} label="Edit" onClick={this.handleOpen} />
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
            defaultValue={this.props.post.title}
            type="text"
            errorText="This field is required"
            onChange={(event) => this.setState({title: event.target.value})}
          /><br />
          <TextField
            id='body'
            floatingLabelText="Text"
            defaultValue={this.props.post.body}
            type="text"
            errorText="This field is required"
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

export default connect(mapStateToProps)(EditPost)
