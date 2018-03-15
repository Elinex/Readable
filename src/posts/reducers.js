import {
  GET_POSTS,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  EDIT_VOTE_POST
} from './actions'

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.postsList
    case ADD_POST:
      return state.concat(action.post)
    case REMOVE_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          post.deleted = action.post.deleted
          return post
        }
        return post
      })
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          post.title = action.post.title
          post.body = action.post.body
          return post
        }
        return post
      })
    case EDIT_VOTE_POST:
      return state.map(post => {
        if (post.id === action.post.id){
          post.voteScore = action.post.voteScore
          return post
        }
        return post
      })
    default:
      return state
  }
}
