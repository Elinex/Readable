import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { votePostAPI, voteCommentAPI } from './dataAPI'
import { votePostAction } from './posts/actions'
import { editCommentAction } from './comments/actions'

const style = {
  'padding-right': '10px',
  'padding-left': '10px'
}

class UpAndDownVote extends Component{
  state = {
    voteScore: this.props.voteScore
  }

  upVote = () => {
    this.setState({
      voteScore: (this.state.voteScore + 1)
    })
    this.changeVoteScore('upVote')
  }

  downVote = () => {
    this.setState({
      voteScore: (this.state.voteScore - 1)
    })
    this.changeVoteScore('downVote')
  }

  changeVoteScore = (option) => {
    if (this.props.post) {
      votePostAPI(this.props.post.id, option).then(res => {
        res.voteScore = this.state.voteScore
        return this.props.dispatch(votePostAction(res))
      })
    }
    if (this.props.comment) {
      voteCommentAPI(this.props.comment.id, option).then(res => {
        res.voteScore = this.state.voteScore
        return this.props.dispatch(editCommentAction(res))
      })
    }
  }

  render(){

    return (
      <div>
        <i className="material-icons" style={style} onClick={this.upVote}>thumb_up</i>
        <i className="material-icons" style={style} onClick={this.downVote}>thumb_down</i>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(UpAndDownVote)
