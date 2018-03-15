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

    const { comment } = this.props

    return (
      <div>
        {(comment.deleted === false) && (
          <Card style={{backgroundColor: 'rgb(232, 232, 232)'}}>
            <CardHeader
              subtitle={
                <div>
                  <div>
                    <b>{comment.author} </b>
                     commented on
                    <b> {dateToString(comment.timestamp).slice(0, 15)}</b>
                  </div>
                  <div>
                    <div>{comment.body}</div>
                    <UpAndDownVote voteScore={comment.voteScore} comment={comment}/>
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
                      {comment.voteScore}
                    </div>
                  </div>
                </Avatar>
              }
            />
            <div style={{display: 'inline-flex'}}>
              <FlatButton label="Edit" labelStyle={labelStyle} containerElement={<EditComment comment={comment}/>} />
              <FlatButton label="Remove" labelStyle={labelStyle} containerElement={<RemoveComment comment={comment}/>} />
            </div>
          </Card>
        )}
      </div>
    )
  }
}

export default Comment
