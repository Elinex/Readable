import {
  GET_CATEGORIES,
  GET_POSTS,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  GET_COMMENTS,
  ADD_COMMENT
} from './actions'
import { combineReducers } from 'redux'

const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
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
    case REMOVE_POST:
      return state.filter(post => action.post.id !== post.id)
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          post.title = action.post.title
          post.body = action.post.body
          return post
        }
        return post
      })
    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return state.concat(action.commentsList)
    case ADD_COMMENT:
      return state.concat(action.comment)
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
