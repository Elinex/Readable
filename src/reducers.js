import { ADD_CATEGORIES, GET_POSTS, ADD_POST, ADD_COMMENTS, REMOVE_POST, EDIT_POST } from './actions'
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
