import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { votePostAPI, voteCommentAPI } from './dataAPI'
import { editPostVote, editCommentVote } from './actions'

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
        return this.props.dispatch(editPostVote(res))
      })
    }
    if (this.props.comment) {
      voteCommentAPI(this.props.comment).then(res => {
        res.voteScore = this.state.voteScore
        return this.props.dispatch(editCommentVote(res))
      })
    }
  }

  render(){
    console.log(this.state);

    return (
      <div>
        <FlatButton label='upvote' labelStyle={style} onClick={this.upVote}/>
        <FlatButton label='downvote' labelStyle={style} onClick={this.downVote}/>
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
