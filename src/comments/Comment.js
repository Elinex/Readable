import React, { Component } from 'react'
import { dateToString } from '../helpers'
import UpAndDownVote from '../UpAndDownVote'
import {Card, CardHeader} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import EditComment from './EditComment'
import RemoveComment from './RemoveComment'

const style = {
  backgroundColor: {backgroundColor: 'powderblue'},
  display: {display: 'contents'},
  avatarBackgrounColor: 'rgb(232, 232, 232)',
  margin: {margin: '0px 0px 10px 0px'},
  avatarColor: 'black',
  fontSize: {fontSize: 8},
  displayButtons: {display: 'inline-flex'}
}

class Comment extends Component{

  render (){

    const { comment } = this.props
    console.log(comment);

    return (
      <div>
        {(comment.deleted === false) && (
          <Card style={style.backgroundColor}>
            <CardHeader
              textStyle={style.display}
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
                <Avatar backgroundColor={style.avatarBackgrounColor} style={style.margin} color={style.avatarColor}>
                  <div>
                    <div style={style.fontSize}>
                      Score
                    </div>
                    <div>
                      {comment.voteScore}
                    </div>
                  </div>
                </Avatar>
              }
            />
            <div style={style.displayButtons}>
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
