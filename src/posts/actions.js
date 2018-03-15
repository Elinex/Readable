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
