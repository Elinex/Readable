import {
  GET_COMMENTS,
  ADD_COMMENT,
  EDIT_VOTE_COMMENT
} from './actions'

export const comments = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        [action.postId]: action.commentsList
      }
    // case ADD_COMMENT:
    //   return state.concat(action.comment)
    case EDIT_VOTE_COMMENT:
      // return state.map(comment => {
      //   if (comment.id === action.comment.id) {
      //     comment.voteScore = action.comment.voteScore
      //     return comment
      //   } else {
      //     return comment
      //   }
      // })
      return {
        ...state,
        [action.postId]: state[action.postId].filter(comment => (comment.id !== action.commentId)).concat(action.comment)
      }
    default:
      return state
  }
}
