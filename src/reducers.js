import {
  ADD_CATEGORIES
} from './actions'

const initialState = {
  categories: [],
  posts: {},
  comments: {}
}

function categories(state = initialState, action){
  switch (action.type){
    case ADD_CATEGORIES:
      return {
        ...state,
        categories: action.categoriesList
      }
    default:
      return state
  }
}

export default categories
