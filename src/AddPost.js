import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as dataAPI from './dataAPI'

class AddPost extends Component{
  state = {
    value: [],
    title: '',
    author: '',
    textBody: '',
    posts: []
  }

  // posts[post.id] = {
  //   id: post.id,
  //   timestamp: post.timestamp,
  //   title: post.title,
  //   body: post.body,
  //   author: post.author,
  //   category: post.category,
  //   voteScore: 1,
  //   deleted: false,
  //   commentCount: 0
  // }
  //
  // "8xf0y6ziyjabvozdd253nd": {
  //   id: '8xf0y6ziyjabvozdd253nd',
  //   timestamp: 1467166872634,
  //   title: 'Udacity is the best place to learn React',
  //   body: 'Everyone says so after all.',
  //   author: 'thingtwo',
  //   category: 'react',
  //   voteScore: 6,
  //   deleted: false,
  //   commentCount: 2
  // }

  handleChange = (event, index, value) => this.setState({value})

  menuItems(value) {
    return this.props.categories.map((category) => (
      <MenuItem
        key={category}
        insetChildren={true}
        checked={value && value.indexOf(category) > -1}
        value={category}
        primaryText={category}
      />
    ))
  }

  handleClick = () => {
    console.log("Estou carregando:",  this.state.value, this.state.title, this.state.author, this.state.textBody);
  }

  componentDidMount (){
    dataAPI.addPost().then(res => {
      console.log('this is response from API addPost:', res);
    })
  }


  render(){
    const {value} = this.state
    console.log("this.props in AddPost:", this.props);
    console.log(this.state);

    return (
      <div>
        <h2>New post</h2>
        <div>
          <TextField
            floatingLabelText="Title"
            type="text"
            onChange={(event) => this.setState({title: event.target.value})}
          /><br />
          <TextField
            floatingLabelText="Author"
            type="text"
            onChange={(event) => this.setState({author: event.target.value})}
          /><br />
          <SelectField
            hintText="Post category"
            value={value}
            onChange={this.handleChange}
          >{this.menuItems(value)}</SelectField><br />
          <TextField
            multiLine={true}
            floatingLabelText="Text"
            type="text"
            onChange={(event) => this.setState({textBody: event.target.value})}
          /><br />
        </div>
        <div>
          <FlatButton
            label="Submit"
            primary={true}
            onClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

AddPost.propTypes = {
  categories: PropTypes.array.isRequired,
}

function mapStateToProps(state){
  return {
    categories: state.categories.reduce((acc, cur) => {
      return acc.concat(cur.name)
    }, [])
  }
}

export default connect(mapStateToProps)(AddPost);
