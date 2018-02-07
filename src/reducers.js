import { ADD_CATEGORIES, ADD_POST } from './actions'
import { combineReducers } from 'redux'

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return action.categoriesList
    default:
      return state
  }
}

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return action.postData
    default:
      return state
  }
}

const rootReducer = combineReducers({
  categories,
  posts
})

export default rootReducer
