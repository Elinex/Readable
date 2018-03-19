import React, { Component } from 'react'
import {Card, CardHeader, } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import { dateToString } from '../helpers'
import { Link } from 'react-router-dom'
import UpAndDownVote from '../UpAndDownVote'
import FlatButton from 'material-ui/FlatButton'
import EditPost from './EditPost'
import RemovePost from './RemovePost'

const style = {
  textTransform: 'capitalize',
}

class PostResume extends Component{

  render (){

    const { post } = this.props

    return (
      <div>
        <Card style={{fontSize: 14}}>
          <CardHeader
            style={{textAlign: 'left'}}
            title={post.author}
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
                <h3>{post.title}</h3>
                <div style={{
                  backgroundColor: '#FFE4E1',
                  'padding': '15px 5px',
                  whiteSpace: 'normal'
                }}>
                  <p>{post.body}</p>
                  <UpAndDownVote voteScore={post.voteScore} post={post}/>
                  <div style={{display: 'inline-flex'}}>
                    <FlatButton label="Edit" labelStyle={{color: 'black'}} containerElement={<EditPost post={post}/>} />
                    <FlatButton label="Remove" labelStyle={{color: 'black'}} containerElement={<RemovePost postId={post.id}/>} />
                  </div>
                </div>
                <p>Commented {post.commentCount} times.</p>
                <Link to={`/${post.category}/${post.id}`}>See post details</Link>

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
              </Avatar>
            }
          />


        </Card>

      </div>
    )
  }
}

export default PostResume
