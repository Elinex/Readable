export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'

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

export function addCommentsAction(commentsList) {
  return {
    type: ADD_COMMENTS,
    commentsList
  }
}
