import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { dateToString } from './helpers'

class Post extends Component{

  render (){

    return (
      <Card style={{fontSize: 14}}>
        <CardHeader
          title={this.props.author}
          titleColor={'pink'}
          subtitle={
            <div>
              <div style={{color: 'pink'}}>
                {dateToString(this.props.timestamp).slice(0, 15)}
              </div>
              <div>
                {`posted in ${this.props.category} category`}
              </div>
            </div>
          }
          children={
            <div>
              <div>
                <h3>{this.props.title}</h3>
              </div>
              <p>{this.props.body}</p>
            </div>

          }
          avatar={
            <Avatar backgroundColor={'pink'} color='black'>
              <div>
                <div style={{fontSize: 8}}>
                  Score
                </div>
                <div>
                  {this.props.voteScore}
                </div>
              </div>
            </Avatar>}
        />
        <div>
          <FlatButton style={{backgroundColor: 'pink', color: 'black'}} label="Edit" />
          <FlatButton style={{backgroundColor: 'pink', color: 'black'}} label="Remove" />
          <FlatButton style={{backgroundColor: 'pink', color: 'black'}} label="New Comment" />
        </div>
        <CardText>{this.props.commentCount} comments</CardText>
      </Card>
    )
  }
}

export default Post
