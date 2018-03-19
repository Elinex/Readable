import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import { dateToString } from '../helpers'
import Comment from '../comments/Comment'
import { connect } from 'react-redux'
import UpAndDownVote from '../UpAndDownVote'
import * as dataAPI from '../dataAPI'
import AddComment from '../comments/AddComment'
import RemovePost from './RemovePost'
import EditPost from './EditPost'
import { getCommentsAction } from '../comments/actions'
import sortBy from 'sort-by'
import CategoriesMenu from '../categories/CategoriesMenu'

class PostDetail extends Component{

  componentDidMount(){
    dataAPI.getCommentsAPI(this.props.post.id)
      .then(res =>
        console.log(res)
        // this.props.dispatch(getCommentsAction(this.props.post.id, res))
      )
  }

  render (){

    const { post } = this.props

    return (
      <Card style={{fontSize: 14}}>

        <CardHeader
          subtitle='Post comments'
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <div>
            {(this.props.comments[post.id]) && (
              (this.props.comments[post.id])
                .sort(sortBy('-voteScore'))
                .map(comment => {
                  return <Comment key={comment.id} comment={comment} />
              })
            )}
            <FlatButton label="Add comment" containerElement={<AddComment parentId={post.id}/>} />
          </div>
        </CardText>
      </Card>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps)(PostDetail)
