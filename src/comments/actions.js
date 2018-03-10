import * as dataAPI from '../dataAPI'

export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_VOTE_COMMENT = 'EDIT_VOTE_COMMENT'

export const getCommentsAction = (commentsList) => {
  return {
    type: GET_COMMENTS,
    commentsList
  }
}

export const addCommentAction = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const voteCommentAction = (comment) => {
  return {
    type: EDIT_VOTE_COMMENT,
    comment
  }
}

// | `GET /posts/:id/comments` |
// | Get all the comments for a single post. |
// | No params. |
export const getComments = (parentId) => (dispatch) => {
  dataAPI.getCommentsAPI(parentId)
    .then(res => dispatch(getCommentsAction(res)))
}

// | `POST /comments/:id` | Used for voting on a comment. |
// **option** - [String]: Either `"upVote"` or `"downVote"`.  |
export const voteComment = (id, option) => (dispatch) => {
  dataAPI.voteCommentAPI(id, option)
    .then(res => dispatch(voteCommentAction(res)))
}
