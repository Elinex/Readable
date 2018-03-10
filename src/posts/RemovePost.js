import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import * as dataAPI from '../dataAPI'
import { removePostAction } from './actions'
import { connect } from 'react-redux'

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
        label="No"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onClick={this.removePost}
      />,
    ]

    return (
      <div>
        <FlatButton  labelStyle={style} label="Remove" onClick={this.handleOpen} />
        <Dialog
          title="Are you sure to remove this post?"
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

export default connect(mapStateToProps)(RemovePost)
