import React, { Component } from 'react'
import { dateToString } from '../helpers'
import UpAndDownVote from '../UpAndDownVote'
import {Card, CardHeader} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import EditComment from './EditComment'
import RemoveComment from './RemoveComment'

class Comment extends Component{

  render (){

    const { comment } = this.props

    return (
      <div>
        {(comment.deleted === false) && (
          <Card style={{backgroundColor: 'powderblue'}}>
            <CardHeader
              textStyle={{display: 'contents'}}
              subtitle={
                <div>
                  <div>
                    <i>{comment.author} </i>
                     commented on
                    <i> {dateToString(comment.timestamp).slice(0, 15)}</i>
                  </div><br/>
                  <div><b>{comment.body}</b></div><br/>
                  <UpAndDownVote voteScore={comment.voteScore} comment={comment}/>
                </div>
              }
              avatar={
                <Avatar backgroundColor={'rgb(232, 232, 232)'} style={{margin: '0px 0px 10px 0px'}} color='black'>
                  <div>
                    <div style={{fontSize: 8}}>
                      Score
                    </div>
                    <div>
                      {comment.voteScore}
                    </div>
                  </div>
                </Avatar>
              }
            />
            <div style={{display: 'inline-flex'}}>
              <FlatButton label="Edit" containerElement={
                <EditComment comment={comment}/>
              }/>
              <FlatButton label="Remove" containerElement={
                <RemoveComment comment={comment}/>
              }/>
            </div>

          </Card>
        )}
      </div>
    )
  }
}

export default Comment
