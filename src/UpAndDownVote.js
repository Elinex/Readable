import React, { Component } from 'react'
// import FlatButton from 'material-ui/FlatButton'
// import { connect } from 'react-redux'
import { votePostAPI, voteCommentAPI } from './dataAPI'
import { votePostAction } from './posts/actions'
import { voteComment } from './comments/actions'

const style = {
  textTransform: 'capitalize',
  backgroundColor: 'grey',
  color: 'pink'
}

class UpAndDownVote extends Component{
  state = {
    voteScore: this.props.voteScore
  }

  upVote = () => {
    this.setState({
      voteScore: this.state.voteScore + 1
    })
    this.changeVoteScore()
  }

  downVote = () => {
    this.setState({
      voteScore: this.state.voteScore - 1
    })
    this.changeVoteScore()
  }

  changeVoteScore = () => {
    if (this.props.post) {
      votePostAPI(this.props.post).then(res => {
        res.voteScore = this.state.voteScore
        return this.props.dispatch(votePostAction(res))
      })
    }
    if (this.props.comment) {
      voteCommentAPI(this.props.comment).then(res => {
        res.voteScore = this.state.voteScore
        return this.props.dispatch(voteComment(res))
      })
    }
  }

  render(){

    return (
      <div>UpAndDownVote component</div>
      // <div>
      //   <FlatButton label='upvote' labelStyle={style} onClick={this.upVote}/>
      //   <FlatButton label='downvote' labelStyle={style} onClick={this.downVote}/>
      // </div>
    )
  }
}

export default UpAndDownVote
