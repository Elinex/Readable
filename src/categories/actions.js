export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategoriesAction(categoriesList) {
  return {
    type: GET_CATEGORIES,
    categoriesList
  }
}
