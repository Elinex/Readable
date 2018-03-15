import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import * as dataAPI from '../dataAPI'
import { editCommentAction } from './actions'
import { connect } from 'react-redux'

const style = {
  textTransform: 'capitalize',
  color: 'pink'
}

class EditComment extends Component {
  state = {
    open: false,
    body: this.props.comment.body
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  editComment = () => {
    console.log(this.props.comment)
    dataAPI.editCommentAPI(this.props.comment.id,
      {body: this.state.body, timestamp: Date.now()}).then(res => {
      res = {
        ...this.props.comment,
        body: this.state.body,
        timestamp: Date.now()
      }
      this.props.dispatch(editCommentAction(res))
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
        onClick={this.editComment}
      />,
    ];

    console.log(this.props);

    return (
      <div>
        <FlatButton  labelStyle={style} label="Edit" onClick={this.handleOpen} />
        <Dialog
          title="Edit the comment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            id='body'
            floatingLabelText="Text"
            defaultValue={this.props.comment.body}
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

export default connect(mapStateToProps)(EditComment)
