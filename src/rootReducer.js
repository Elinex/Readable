import { combineReducers } from 'redux'
import { categories } from './categories/reducers'
import { comments } from './comments/reducers'
import { posts, post } from './posts/reducers'

export default combineReducers({
  categories,
  comments,
  posts,
  post
})
