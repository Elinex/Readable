import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { dateToString } from './helpers'

class Post extends Component{
  render (){

    return (
      <Card>
        <CardHeader
          title={this.props.author}
          subtitle={dateToString(this.props.timestamp).slice(0, 15)}
          titleColor={'pink'}
          subtitleColor={'pink'}
          avatar={
            <Avatar backgroundColor={'pink'}>
              <div>
                <div style={{fontSize: 8}}>
                  Score
                </div>
                <div style={{fontSize: 14}}>
                  {this.props.voteScore}
                </div>
              </div>
            </Avatar>}
        />
        <CardTitle
          title={this.props.title}
          subtitle={`posted in ${this.props.category} category`}
          titleStyle={{fontSize: 18}}
          titleColor={'grey'}
        />
        <CardText
          color={'grey'}
        >
          {this.props.body}
        </CardText>
        <CardActions >
          <FlatButton style={{backgroundColor: 'pink', color: 'white'}} label="Edit" />
          <FlatButton style={{backgroundColor: 'pink', color: 'white'}} label="Remove" />
          <FlatButton style={{backgroundColor: 'pink', color: 'white'}} label="New Comment" />
        </CardActions>
      </Card>
    )
  }
}

export default Post
