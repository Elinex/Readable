import React, { Component } from 'react'
import { dateToString } from './helpers'
import UpAndDownVote from './UpAndDownVote'
import {Card, CardHeader} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

class Comment extends Component{

  render (){

    return (
      // <Card style={{backgroundColor: 'rgb(232, 232, 232)'}}>
      //   <CardText>
      //     <div>
      //       <div>
      //         <b>{this.props.comment.author} </b>
      //          commented in
      //         <b> {dateToString(this.props.comment.timestamp).slice(0, 15)}</b>
      //       </div>
      //       <div>Score votes: <b>{this.props.comment.voteScore}</b></div>
      //       <div>
      //         <div>{this.props.comment.body}</div>
      //         <UpAndDownVote />
      //       </div>
      //     </div>
      //   </CardText>
      // </Card>

      /************************/
      <Card style={{backgroundColor: 'rgb(232, 232, 232)'}}>
        <CardHeader
          // title={this.props.post.author.toUpperCase()}
          // titleColor='pink'
          // titleStyle={{fontWeight: 'bold'}}
          subtitle={
            <div>
              <div>
                <b>{this.props.comment.author} </b>
                 commented in
                <b> {dateToString(this.props.comment.timestamp).slice(0, 15)}</b>
              </div>
              <div>
                <div>{this.props.comment.body}</div>
                <UpAndDownVote />
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
            </Avatar>}
        />
</Card>

    )
  }
}

export default Comment
