import React, { Component } from 'react'
import {Card, CardText} from 'material-ui/Card'

class Comment extends Component{

  render (){

    console.log(this.props);

    return (
      <Card>
        <CardText>
          Commented by {this.props.comment.author}
          Body: {this.props.comment.body}
          Date: {this.props.comment.timestamp}
          voteScore: {this.props.comment.voteScore}
        </CardText>
      </Card>
    )
  }
}

export default Comment
