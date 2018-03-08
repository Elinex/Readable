import React, { Component } from 'react'
// import TextField from 'material-ui/TextField'
// import FlatButton from 'material-ui/FlatButton'
// import { connect } from 'react-redux'
import * as dataAPI from '../dataAPI'
import { editPostAction } from './actions'
import { Link } from 'react-router-dom'

class EditPost extends Component{
  state = {
    title: this.props.post.title,
    body: this.props.post.body
  }

  editPost = (id, post) => {
    dataAPI.editPostAPI(id, post).then(res => {
      this.props.dispatch(editPostAction(res))
    })
  }

  render(){
    console.log(this.props);
    console.log(this.state);

    return (
      <div>Edit post component</div>
      // <div>
      //   <h2>Edit post</h2>
      //   <div>
      //     <TextField
      //       id='title'
      //       floatingLabelText="Title"
      //       value={this.state.title}
      //       type="text"
      //       onChange={(event) => this.setState({title: event.target.value})}
      //     /><br />
      //     <TextField
      //       id='author'
      //       floatingLabelText="Author"
      //       value={this.props.post.author}
      //       type="text"
      //       disabled={true}
      //     /><br />
      //     <TextField
      //       id='category'
      //       floatingLabelText="Category"
      //       value={this.props.post.category}
      //       type="text"
      //       disabled={true}
      //     /><br />
      //     <TextField
      //       id='body'
      //       multiLine={true}
      //       value={this.state.body}
      //       type="text"
      //       onChange={(event) => this.setState({body: event.target.value})}
      //     /><br />
      //   </div>
      //   <div>
      //     <FlatButton
      //       label="Submit"
      //       primary={true}
      //       onClick={() => this.editPost(this.props.post.id, this.state)}
      //     />
      //   </div>
      //   <Link to='/'>Go to MainView</Link>
      // </div>
    )
  }
}

export default EditPost
