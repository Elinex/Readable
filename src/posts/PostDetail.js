import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { dateToString } from '../helpers'
import Comment from '../comments/Comment'
import { connect } from 'react-redux'
import UpAndDownVote from '../UpAndDownVote'
import * as dataAPI from '../dataAPI'
import NewComment from '../comments/NewComment'
import RemovePost from './RemovePost'
import EditPost from './EditPost'
import { getCommentsAction } from '../comments/actions'

const labelStyle = {
  textTransform: 'capitalize',
  color: 'pink'
}

class PostDetail extends Component{

  componentWillMount(){
    dataAPI.getCommentsAPI(this.props.postId)
      .then(res =>
        this.props.dispatch(getCommentsAction(this.props.postId, res))
      )
  }

  render (){

    const post = this.props.posts.filter(post => post.id === this.props.postId)
      .reduce((acc, cur) => {
        return cur
      }, {})

    return (
      <div>
        {(post.deleted === false) && (
          <Card style={{fontSize: 14}}>
            <CardHeader
              title={post.author}
              titleColor='pink'
              titleStyle={{fontWeight: 'bold'}}
              subtitle={
                <div>
                  <div>
                    {`Posted in ${post.category} category`}
                  </div>
                  <div >
                    {dateToString(post.timestamp).slice(0, 15)}
                  </div>
                </div>
              }
              children={
                <div>
                  <div>
                    <h3>{post.title}</h3>
                  </div>
                  <div style={{backgroundColor: '#FFE4E1', 'padding': '15px 5px', whiteSpace: 'normal'}}>
                    <p>
                      {post.body}
                    </p>
                    <UpAndDownVote voteScore={post.voteScore} post={post}/>
                  </div>
                </div>

              }
              avatar={
                <Avatar backgroundColor={'rgb(232, 232, 232)'} color='black'>
                  <div>
                    <div style={{fontSize: 8}}>
                      Score
                    </div>
                    <div>
                      {post.voteScore}
                    </div>
                  </div>
                </Avatar>}
            />
            <div style={{display: 'inline-flex'}}>
              <FlatButton label="Edit" labelStyle={labelStyle} containerElement={<EditPost post={post}/>} />
              <FlatButton label="Remove" labelStyle={labelStyle} containerElement={<RemovePost postId={post.id}/>} />
            </div>
            <CardHeader
              subtitle='Post comments'
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div>
                {(this.props.comments[this.props.postId]) && (
                  this.props.comments[this.props.postId].map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                  })
                )}
                <FlatButton label="New Comment" labelStyle={labelStyle} containerElement={<NewComment parentId={post.id}/>} />
              </div>
            </CardText>
          </Card>
        )}

        {(post.deleted === true) && (
          <div>Post deleted</div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(PostDetail)
