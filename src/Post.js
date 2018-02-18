import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { dateToString } from './helpers'
import Comment from './Comment'
import { connect } from 'react-redux'

class Post extends Component{

  render (){

    return (
      <Card style={{fontSize: 14}}>
        <CardHeader
          title={this.props.author.toUpperCase()}
          titleColor='pink'
          titleStyle={{fontWeight: 'bold'}}
          subtitle={
            <div>
              <div>
                {`Posted in ${this.props.category} category`}
              </div>
              <div >
                {dateToString(this.props.timestamp).slice(0, 15)}
              </div>

            </div>
          }
          children={
            <div>
              <div>
                <h3>{this.props.title}</h3>
              </div>
              <p style={{backgroundColor: 'rgb(232, 232, 232)', 'padding': '15px 5px', whiteSpace: 'normal'}}>
                {this.props.body}
              </p>
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
          <FlatButton style={{backgroundColor: 'white', color: 'black'}} label="Edit" labelStyle={{textTransform: 'capitalize', color: 'pink'}} />
          <FlatButton style={{backgroundColor: 'white', color: 'black'}} label="Remove" labelStyle={{textTransform: 'capitalize', color: 'pink'}}/>
          <FlatButton style={{backgroundColor: 'white', color: 'black'}} label="New Comment" labelStyle={{textTransform: 'capitalize', color: 'pink'}}/>
        </div>
          <CardHeader
            subtitle={`${this.props.commentCount} comments`}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {(this.props.comments.length > 0) && (
              this.props.comments.filter(comment => (comment.parentId === this.props.id))
              .map(comment => {
                return (
                  <Comment key={comment.id} comment={comment} />
                )
              })
            )}
          </CardText>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Post)
