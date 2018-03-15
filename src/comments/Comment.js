import React, { Component } from 'react'
import { dateToString } from '../helpers'
import UpAndDownVote from '../UpAndDownVote'
import {Card, CardHeader} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import EditComment from './EditComment'
import RemoveComment from './RemoveComment'

const labelStyle = {
  textTransform: 'capitalize',
  color: 'pink'
}

class Comment extends Component{

  render (){

    return (
      <div>
        {(this.props.comment.deleted === false) && (
          <Card style={{backgroundColor: 'rgb(232, 232, 232)'}}>
            <CardHeader
              subtitle={
                <div>
                  <div>
                    <b>{this.props.comment.author} </b>
                     commented on
                    <b> {dateToString(this.props.comment.timestamp).slice(0, 15)}</b>
                  </div>
                  <div>
                    <div>{this.props.comment.body}</div>
                    <UpAndDownVote voteScore={this.props.comment.voteScore} comment={this.props.comment}/>
                  </div>
                </div>
              }
              avatar={
                <Avatar backgroundColor={'#FFE4E1'} color='black'>
                  <div>
                    <div style={{fontSize: 8}}>
                      Score
                    </div>
                    <div>
                      {this.props.comment.voteScore}
                    </div>
                  </div>
                </Avatar>
              }
            />
            <div style={{display: 'inline-flex'}}>
              <FlatButton label="Edit" labelStyle={labelStyle} containerElement={<EditComment comment={this.props.comment}/>} />
              <FlatButton label="Remove" labelStyle={labelStyle} containerElement={<RemoveComment comment={this.props.comment}/>} />
            </div>
          </Card>
        )}
      </div>
    )
  }
}

export default Comment
