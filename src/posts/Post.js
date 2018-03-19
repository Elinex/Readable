import React, { Component } from 'react'
import {Card, CardHeader, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { dateToString } from '../helpers'
import EditPost from './EditPost'
import RemovePost from './RemovePost'
import UpAndDownVote from '../UpAndDownVote'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as dataAPI from '../dataAPI'
import { getCommentsAction } from '../comments/actions'
import sortBy from 'sort-by'
import Comment from '../comments/Comment'
import AddComment from '../comments/AddComment'

const style = {
  fontSize: '12px',
  fontWeight: 500,
  color: 'rgba(0, 0, 0, 0.54)',
}

class Post extends Component{

  state = {
    postDetails: 'false'
  }

  componentDidMount(){
    dataAPI.getCommentsAPI(this.props.postId)
      .then(res =>
        this.props.dispatch(getCommentsAction(this.props.postId, res))
      )
  }

  render(){

    const { comments } = this.props

    const post = this.props.posts
      .filter(post => post.id === this.props.postId)
      .reduce((acc, cur) => {
        return cur
      }, {})

    return (
      <Card style={{backgroundColor: 'snow'}}>
        <CardTitle
          title={post.title}
          titleStyle={{fontSize: 16, fontWeight: 'bold'}}
          subtitle={
            <div>
              <div>
                posted in {post.category} category
              </div>
              <div >
                by {post.author}
              </div>
              <div >
                on {dateToString(post.timestamp).slice(0, 15)}
              </div>
            </div>
          }
        />

        <CardHeader
          style={{backgroundColor: 'rgb(232, 232, 232)', margin: '0px 10px 0px 10px'}}
          subtitle={
            <div>
              <Avatar backgroundColor={'powderblue'} color='black' style={{margin: '0px 0px 10px 0px'}}>
                <div>
                  <div style={{fontSize: 8}}>
                    Score
                  </div>
                  <div>
                    {post.voteScore}
                  </div>
                </div>
              </Avatar>
              <div><b>{post.body}</b></div><br/>
              <div>
                <div style={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)'}}>
                  {(post.commentCount === 0) && (
                    <p>No comments</p>
                  )}
                  {(post.commentCount === 1) && (
                    <p>1 comment</p>
                  )}
                  {(post.commentCount > 1) && (
                    <p>{post.commentCount} comments</p>
                  )}
                </div>
                <UpAndDownVote voteScore={post.voteScore} post={post}/>
              </div>
              <div style={{display: 'inline-flex'}}>
                <FlatButton label="Edit" containerElement={
                  <EditPost post={post}/>}
                />
                <FlatButton label="Remove" containerElement={
                  <RemovePost postId={post.id}/>}
                />
                <FlatButton
                  label="See post details"
                  labelStyle={style}
                  containerElement={
                    <Link to={`/${post.category}/${post.id}`}>
                      See post details
                    </Link>
                  }
                  onClick={() => this.setState({postDetails: 'open'})}
                />
              </div>
            </div>
          }
          textStyle={{display: 'contents'}}
        />

        {(this.state.postDetails === 'open') && (
          <div>
            <CardHeader
              style={{backgroundColor: 'rgb(232, 232, 232)', margin: '0px 10px 0px 10px'}}
              subtitle={
                <div>
                  {(comments[post.id].length > 0) && (
                    comments[post.id].sort(sortBy('-voteScore'))
                      .map(comment => {
                        return <Comment key={comment.id} comment={comment} />
                    })
                  )}
                  <AddComment parentId={post.id} />
                </div>
              }
              textStyle={{display: 'contents'}}
            />
          </div>
        )}
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Post)
