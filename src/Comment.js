import React, { Component } from 'react'
import { dateToString } from './helpers'
import UpAndDownVote from './UpAndDownVote'
import {Card, CardHeader, CardText} from 'material-ui/Card'

class Comment extends Component{

  render (){

    return (
      <Card style={{backgroundColor: 'rgb(232, 232, 232)'}}>
        <CardText>
          <div>
            <div>
              <b>{this.props.comment.author} </b>
               commented in
              <b> {dateToString(this.props.comment.timestamp).slice(0, 15)}</b>
            </div>
            <div>Score votes: <b>{this.props.comment.voteScore}</b></div>
            <div>
              <div>{this.props.comment.body}</div>
              <Card>
                <CardHeader
                  subtitle='Vote in this comment'
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardText expandable={true}>
                  <UpAndDownVote />
                </CardText>
              </Card>

            </div>
          </div>

        </CardText>
      </Card>
    )
  }
}

export default Comment
