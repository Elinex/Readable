import { combineReducers } from 'redux'
import { categories } from './categories/reducers'
import { comments } from './comments/reducers'
import { posts } from './posts/reducers'

export default combineReducers({
  categories,
  comments,
  posts
})
