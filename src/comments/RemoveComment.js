import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import * as dataAPI from '../dataAPI'
import { editCommentAction } from './actions'
import { connect } from 'react-redux'

const style = {
  fontSize: '12px',
  color: 'rgba(0, 0, 0, 0.54)'
}

class RemoveComment extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  removeComment = () => {
    dataAPI.removeCommentAPI(this.props.comment.id).then(res => {
      this.props.dispatch(editCommentAction(res))
    })
    this.setState({open: false})
  }

  render() {

    const actions = [
      <FlatButton
        label="No"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onClick={this.removeComment}
      />,
    ]

    return (
      <div>
        <FlatButton  labelStyle={style} label="Remove" onClick={this.handleOpen} />
        <Dialog
          title="Are you sure to remove this comment?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
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

export default connect(mapStateToProps)(RemoveComment)
