import {
  GET_CATEGORIES
} from './actions'

export const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categoriesList
    default:
      return state
  }
}
