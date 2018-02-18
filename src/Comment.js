import React, { Component } from 'react'
import { Card, CardText } from 'material-ui/Card'
import { dateToString } from './helpers'

class Comment extends Component{

  render (){

    return (
      <Card>
        <CardText>
          <div>
            <div>
              <b>{this.props.comment.author} </b>
               commented in
              <b> {dateToString(this.props.comment.timestamp).slice(0, 15)}</b>
            </div>
            <div>Score votes: <b>{this.props.comment.voteScore}</b></div>
            <p style={{backgroundColor: 'rgb(232, 232, 232)', 'padding': '15px 5px', whiteSpace: 'normal'}}>
              {this.props.comment.body}
            </p>
            {/* <div>{this.props.comment.body}</div> */}
          </div>

        </CardText>
      </Card>
    )
  }
}

export default Comment
