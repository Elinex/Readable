export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const ADD_COMMENT = 'ADD_COMMENT'

export function addCategoriesAction(categoriesList) {
  return {
    type: ADD_CATEGORIES,
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

export function addCommentsAction(commentsList) {
  return {
    type: ADD_COMMENTS,
    commentsList
  }
}

export function addCommentAction(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}
