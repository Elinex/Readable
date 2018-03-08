export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_VOTE = 'EDIT_VOTE'

export function getCommentsAction(commentsList) {
  return {
    type: GET_COMMENTS,
    commentsList
  }
}

export function addCommentAction(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function editCommentVote(comment){
  return {
    type: EDIT_VOTE,
    comment
  }
}
