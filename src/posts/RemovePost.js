import React, { Component } from 'react'
// import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import * as dataAPI from '../dataAPI'
import { removePostAction } from './actions'
// import { connect } from 'react-redux'

const style = {
  textTransform: 'capitalize',
  color: 'pink'
}

class RemovePost extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  removePost = () => {
    dataAPI.removePostAPI(this.props.postID).then(res => {
      this.props.dispatch(removePostAction(res))
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
        label="OK"
        primary={true}
        keyboardFocused={true}
        onClick={this.removePost}
      />,
    ]

    return (
      <div>Remove post component</div>
      // <div>
      //   <FlatButton  labelStyle={style} label="Remove" onClick={this.handleOpen} />
      //   <Dialog
      //     title="Are you sure to remove this post?"
      //     actions={actions}
      //     modal={false}
      //     open={this.state.open}
      //     onRequestClose={this.handleClose}
      //   >
      //   </Dialog>
      // </div>
    )
  }
}

export default RemovePost
