export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_VOTE = 'EDIT_VOTE'

export function getPostsAction(postsList) {
  return {
    type: GET_POSTS,
    postsList
  }
}

export function addPostAction(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function removePostAction(post){
  return {
    type: REMOVE_POST,
    post
  }
}

export function editPostAction(post){
  return {
    type: EDIT_POST,
    post
  }
}

export function editPostVote(post){
  return {
    type: EDIT_VOTE,
    post
  }
}
