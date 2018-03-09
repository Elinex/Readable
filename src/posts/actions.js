import * as dataAPI from '../dataAPI'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_VOTE_POST = 'EDIT_VOTE_POST'

export const getPostsAction = (postsList) => {
  return {
    type: GET_POSTS,
    postsList
  }
}

export const addPostAction = (post) => {
  return {
    type: ADD_POST,
    post
  }
}

export const removePostAction= (post) => {
  return {
    type: REMOVE_POST,
    post
  }
}

export const editPostAction = (post) => {
  return {
    type: EDIT_POST,
    post
  }
}

export const votePostAction = (post) => {
  return {
    type: EDIT_VOTE_POST,
    post
  }
}

// | `GET /posts` |
// | Get all of the posts. Useful for the main page when no category
// is selected. |
// | No params. |
export const getPosts = () => (dispatch) => {
  dataAPI.getPostsAPI()
    .then(res => dispatch(getPostsAction(res)))
}

// | `POST /posts` |
// | Add a new post. |
// |**id** - UUID should be fine, but any unique id will work <br>
//  **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()`
// if you like. <br>
// **title** - [String] <br> **body** - [String] <br>
// **author** - [String] <br>
// **category** -  Any of the categories listed in`categories.js`.
// Feel free to extend this list as you desire. |
export const postPost = (post) => (dispatch) => {
  dataAPI.postPostAPI(post)
    .then(res => dispatch(addPostAction(res)))
}

// | `DELETE /posts/:id` |
// | Sets the deleted flag for a post to 'true'. <br>
// Sets the parentDeleted flag for all child comments to 'true'. |
// | No params. |
export const removePost = (postId) => (dispatch) => {
  dataAPI.removePostAPI(postId)
    .then(res => dispatch(removePostAction(res)))
}

// | `PUT /posts/:id` |
// | Edit the details of an existing post. |
// | **title** - [String] <br> **body** - [String] |
export const editPost = (id, post) => (dispatch) => {
  dataAPI.editPostAPI(id, post)
    .then(res => dispatch(editPostAction(res)))
}

// | `POST /posts/:id` |
// | Used for voting on a post. |
// | **option** - [String]: Either `"upVote"` or `"downVote"`. |
export const votePost = (post, option) => (dispatch) => {
  dataAPI.votePostAPI(post, option)
    .then(res => dispatch(votePostAction(res)))
}
