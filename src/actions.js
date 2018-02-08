export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const ADD_POST = 'ADD_POST'

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
