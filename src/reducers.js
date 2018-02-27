import { ADD_CATEGORIES, GET_POSTS, ADD_POST, ADD_COMMENTS } from './actions'
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
    case GET_POSTS:
      return action.postsList
    case ADD_POST:
      return state.concat(action.post)
    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return state.concat(action.commentsList)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  categories,
  posts,
  comments
})

export default rootReducer
