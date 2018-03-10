import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { dateToString } from '../helpers'
import Comment from '../comments/Comment'
import { connect } from 'react-redux'
import UpAndDownVote from '../UpAndDownVote'
import { Link } from 'react-router-dom'
import { removePostAction } from './actions'
import * as dataAPI from '../dataAPI'
import NewComment from '../comments/NewComment'
import RemovePost from './RemovePost'
import { getPostDetailAction } from './actions'

const labelStyle = {
  textTransform: 'capitalize',
  color: 'pink'
}

class Post extends Component{

// ideia do Lucas: editar post ao invés de fazer essa funçao
  // removePost = () => {
  //   if (window.confirm('Are you sure to remove this post?')){
  //     return dataAPI.removePostAPI(this.props.post.id).then(res => {
  //       return this.props.dispatch(removePostAction(res))
  //     })
  //   }
  // }
  componentWillMount(){
    dataAPI.getPostDetailAPI(this.props.postId)
      .then(res => this.props.dispatch(getPostDetailAction(res)))
    console.log(this.props)
  }


  render (){
    console.log(this.props);

    return (
      <div>
        {this.props.post.id && (
          <Card style={{fontSize: 14}}>
            <CardHeader
              title={this.props.post.author.toUpperCase()}
              titleColor='pink'
              titleStyle={{fontWeight: 'bold'}}
              subtitle={
                <div>
                  <div>
                    {`Posted in ${this.props.post.category} category`}
                  </div>
                  <div >
                    {dateToString(this.props.post.timestamp).slice(0, 15)}
                  </div>
                </div>
              }
              children={
                <div>
                  <div>
                    <h3>{this.props.post.title}</h3>
                  </div>
                  <div style={{backgroundColor: '#FFE4E1', 'padding': '15px 5px', whiteSpace: 'normal'}}>
                    <p>
                      {this.props.post.body}
                    </p>
                    <UpAndDownVote voteScore={this.props.post.voteScore} post={this.props.post}/>
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
                      {this.props.post.voteScore}
                    </div>
                  </div>
                </Avatar>}
            />
            <div style={{display: 'inline-flex'}}>
              <FlatButton label="Edit" labelStyle={labelStyle} containerElement={<Link to={`/editPost/${this.props.post.id}`} />} />
              <FlatButton label="Remove" labelStyle={labelStyle} containerElement={<RemovePost postID={this.props.post.id}/>} />
              <FlatButton label="New Comment" labelStyle={labelStyle} containerElement={<NewComment parentID={this.props.post.id}/>} />
            </div>
            <CardHeader
              subtitle='Post comments'
              actAsExpander={true}
              showExpandableButton={true}
            />

          </Card>
        )}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    post: state.post
  }
}

export default connect(mapStateToProps)(Post)
