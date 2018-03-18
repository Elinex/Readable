import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar'
import { dateToString } from '../helpers'
import EditPost from './EditPost'
import RemovePost from './RemovePost'
import UpAndDownVote from '../UpAndDownVote'
import { Link } from 'react-router-dom'

const style = {
  fontSize: '12px',
  fontWeight: 500,
  color: 'rgba(0, 0, 0, 0.54)',
}

// const timesCommented = () => {
//   if (props.post.commentCount === 0){
//     return 'Not yet commented'
//   } else {
//     return `Commented ${props.post.commentCount} times`
//   }
// }

const Post = (props) => (
  <Card style={{backgroundColor: 'snow'}}>
    <CardTitle
      title={props.post.title}
      titleStyle={{fontSize: 16, fontWeight: 'bold'}}
      subtitle={
        <div style={{display: 'inline-flex'}}>
          <Avatar backgroundColor={'rgb(232, 232, 232)'} color='black'>
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
              posted in {props.post.category} category
            </div>
            <div >
              by {props.post.author}
            </div>
            <div >
              in {dateToString(props.post.timestamp).slice(0, 15)}
            </div>
          </div>

        </div>
      }

    />
    <CardText style={{'backgroundColor': 'powderblue', margin: '0px 10px 0px 10px'}}>
      <div style={{'paddingBottom': '10px'}}>{props.post.body}</div>
      <p style={{fontSize: '12px', color: 'rgba(0, 0, 0, 0.54)'}}>Commented {props.post.commentCount} times.</p>
      <UpAndDownVote voteScore={props.post.voteScore} post={props.post}/>
      <div style={{display: 'inline-flex'}}>
        <FlatButton label="Edit" containerElement={
          <EditPost post={props.post}/>}
        />
        <FlatButton label="Remove" containerElement={
          <RemovePost postId={props.post.id}/>}
        />
        <FlatButton label="See post details" labelStyle={style} containerElement={
          <Link to={`/${props.post.category}/${props.post.id}`}>
            See post details
          </Link>
        }/>
      </div>
    </CardText>

  </Card>
);

export default Post
