import React, { Component } from 'react'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'
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
    dataAPI.getCommentsAPI(this.props.post.id)
      .then(res =>
        this.props.dispatch(getCommentsAction(this.props.post.id, res))
      )
  }

  timesCommented = () => {
    if (this.props.post.commentCount === 0){
      return 'No comments'
    } else if (this.props.post.commentCount === 1){
      return '1 comment'
    }
    else {
      return `${this.props.post.commentCount} comments`
    }
  }

  render(){
    console.log(this.props.comments[this.props.post.id]);

    const { post } = this.props

    const comments = this.props.comments[this.props.post.id]

    return (
      <Card style={{backgroundColor: 'snow'}}>
        <CardTitle
          title={post.title}
          titleStyle={{fontSize: 16, fontWeight: 'bold'}}
          subtitle={
            <div style={{display: 'inline-flex'}}>
              <Avatar backgroundColor={'powderblue'} color='black'>
                <div>
                  <div style={{fontSize: 8}}>
                    Score
                  </div>
                  <div>
                    10
                  </div>
                </div>
              </Avatar>
              <div>
                <div>
                  posted in {post.category} category
                </div>
                <div >
                  by {post.author}
                </div>
                <div >
                  in {dateToString(post.timestamp).slice(0, 15)}
                </div>
              </div>
            </div>
          }
        />
        <CardText style={{'backgroundColor': 'rgb(232, 232, 232)', margin: '0px 10px 0px 10px'}}>
          <div style={{'paddingBottom': '10px'}}>{post.body}</div>
          <p style={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)'}}>{this.timesCommented()}</p>
          <UpAndDownVote voteScore={post.voteScore} post={post}/>
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
        </CardText>

        {(this.state.postDetails === 'open') && (
          <div>
            <CardHeader
              subtitle='Post comments'
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div>
                {(comments.length > 0) && (
                  comments.sort(sortBy('-voteScore'))
                    .map(comment => {
                      return <Comment key={comment.id} comment={comment} />
                  })
                )}
                <FlatButton label="Add comment" containerElement={<AddComment parentId={post.id}/>} />
              </div>
            </CardText>
          </div>
        )}
      </Card>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    ...state,
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Post)
