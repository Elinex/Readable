export const ADD_CATEGORIES = 'ADD_CATEGORIES'

export function addCategories (categoriesList) {
  return {
    type: ADD_CATEGORIES,
    categoriesList
  }
}
