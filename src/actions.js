export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_VOTE = 'EDIT_VOTE'

export function getCategoriesAction(categoriesList) {
  return {
    type: GET_CATEGORIES,
    categoriesList
  }
}

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

export function getCommentsAction(commentsList) {
  return {
    type: GET_COMMENTS,
    commentsList
  }
}

export function addCommentAction(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function editCommentVote(comment){
  return {
    type: EDIT_VOTE,
    comment
  }
}
