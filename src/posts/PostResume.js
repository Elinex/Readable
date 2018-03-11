import React, { Component } from 'react'
import {Card, CardHeader, } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import { dateToString } from '../helpers'
import { Link } from 'react-router-dom'
import { getPostDetailAction } from './actions'

class PostResume extends Component{

  render (){

    return (
      <div>
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
                <div style={{
                  backgroundColor: '#FFE4E1',
                  'padding': '15px 5px',
                  whiteSpace: 'normal'
                }}>
                  <p>
                    {this.props.post.body}
                  </p>
                </div>
                <p>Commented {this.props.post.commentCount} times.</p>
                <Link to={`/posts/${this.props.post.id}`}>See post details</Link>
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
              </Avatar>
            }
          />

        </Card>

      </div>
    )
  }
}

export default PostResume
