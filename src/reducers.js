import { ADD_CATEGORIES, ADD_POST } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  categories: [],
  posts: {},
  comments: {}
}

const categories = (state = initialState, action) => {
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

const posts = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:
      return {
        ...state,
        posts: action.postData
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  categories,
  posts
})

export default rootReducer
