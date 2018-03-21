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
import { getCommentsAPI } from '../dataAPI'
import { getCommentsAction } from '../comments/actions'

const style = {
  flatButton: {
    fontSize: '12px',
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  backgroundColor: {backgroundColor: 'snow'},
  title: {fontSize: 16, fontWeight: 'bold'},
  headBackgroundColor: {backgroundColor: 'rgb(232, 232, 232)'},
  avatarBackGroundColor: 'powderblue',
  avatarColor: 'black',
  avatarMargin: {margin: '0px 0px 10px 0px'},
  avatarFontSize: {fontSize: 8},
  commentCount: {fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)'},
  display: {display: 'inline-flex'},
  subtitleDisplay: {display: 'contents'}
}

class Post extends Component{

  componentDidMount(){
    getCommentsAPI(this.props.post.id)
      .then(res =>
        this.props.dispatch(getCommentsAction(this.props.post.id, res))
      )
  }

  render(){

    const { post } = this.props

    return (
      <Card style={style.backgroundColor}>
        <CardTitle
          title={post.title}
          titleStyle={style.title}
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
          style={style.headBackgroundColor}
          subtitle={
            <div>
              <Avatar backgroundColor={style.avatarBackGroundColor} color={style.avatarColor} style={style.avatarMargin}>
                <div>
                  <div style={style.avatarFontSize}>
                    Score
                  </div>
                  <div>
                    {post.voteScore}
                  </div>
                </div>
              </Avatar>
              <div><b>{post.body}</b></div><br/>
              <div>
                <div style={style.commentCount}>
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
              <div style={style.display}>
                <FlatButton label="Edit" containerElement={
                  <EditPost post={post}/>}
                />
                <FlatButton label="Remove" containerElement={
                  <RemovePost postId={post.id}/>}
                />
                <FlatButton
                  label='See details'
                  labelStyle={style.flatButton}
                  containerElement={
                    <Link to={`/${post.category}/${post.id}`}/>
                  }
                />
              </div>
            </div>
          }
          textStyle={style.subtitleDisplay}
        />
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Post)
