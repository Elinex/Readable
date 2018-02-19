import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'

const style = {
  textTransform: 'capitalize',
  backgroundColor: 'grey',
  color: 'pink'
}

class UpAndDownVote extends Component{
  render(){
    return (
      <div>
        <FlatButton label='upvote' labelStyle={style}/>
        <FlatButton label='downvote' labelStyle={style}/>
      </div>
    )
  }
}

export default UpAndDownVote
