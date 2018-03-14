import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { votePostAPI, voteCommentAPI } from './dataAPI'
import { votePostAction } from './posts/actions'
import { voteCommentAction } from './comments/actions'

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
        return this.props.dispatch(voteCommentAction(res))
      })
    }
  }

  render(){
    console.log(this.props);

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
