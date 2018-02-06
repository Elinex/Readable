export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const ADD_POST = 'ADD_POST'

export function addCategories(categoriesList) {
  return {
    type: ADD_CATEGORIES,
    categoriesList
  }
}

export function addPost(postData) {
  return {
    type: ADD_POST,
    postData
  }
}
