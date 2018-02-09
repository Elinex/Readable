import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// key={post.id}
// title={post.title}
// timestamp={post.timestamp}
// body={post.body}
// author={post.author}
// category={post.category}
// commentCount={post.commentCount}
// voteScore={post.voteScore}

class Post extends Component{
  render (){
    console.log(this.props);
    return (
      <Card>
        <CardHeader
          title={this.props.author}
          subtitle={Date(this.props.timestamp).slice(0,15)}
          avatar="images/jsa-128.jpg"
        />
        {/* <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia> */}
        <CardTitle
          title={this.props.title}
          subtitle={`posted in ${this.props.category} category`}
        />
        <CardText>
          {this.props.body}
        </CardText>
        <CardActions>
          <FlatButton label="Edit" />
          <FlatButton label="Remove" />
          <FlatButton label="New Comment" />
        </CardActions>
      </Card>
    )
  }
}

export default Post
