export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'

export function addCategories(categoriesList) {
  return {
    type: ADD_CATEGORIES,
    categoriesList
  }
}

export function addPost(postsList) {
  return {
    type: ADD_POST,
    postsList
  }
}

export function addComments(commentsList) {
  return {
    type: ADD_COMMENTS,
    commentsList
  }
}
