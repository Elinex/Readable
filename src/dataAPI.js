const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Whatever',
  'Content-Type': 'application/json'
}


// GET /categories
//   USAGE:
//     Get all of the categories available for the app. List is found in categories.js.
//     Feel free to extend this list as you desire.
export const getCategoriesAPI = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())


// POST /posts
//   USAGE:
//     Add a new post
//   PARAMS:
//     id - UUID should be fine, but any unique id will work
//     timestamp - timestamp in whatever format you like, you can use Date.now() if you like
//     title - String
//     body - String
//     author - String
//     category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export const postPostAPI = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post)
  }).then(res => res.json())


// GET /posts
//   USAGE:
//     Get all of the posts. Useful for the main page when no category is selected.
export const getPostsAPI = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())


// GET /posts/:id
//   USAGE:
//     Get the details of a single post
export const getPostDetailAPI = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())


// GET /posts/:id/comments
//   USAGE:
//     Get all the comments for a single post
export const getCommentsAPI = (parentId) =>
  fetch(`${api}/posts/${parentId}/comments`, { headers })
  .then(res => res.json())


// DELETE /posts/:id
//   USAGE:
//     Sets the deleted flag for a post to 'true'.
//     Sets the parentDeleted flag for all child comments to 'true'.
export const removePostAPI = (postID) =>
  fetch(`${api}/posts/${postID}`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(postID)
  }).then(res => res.json())


// PUT /posts/:id
//   USAGE:
//     Edit the details of an existing post
//   PARAMS:
//     title - String
//     body - String
export const editPostAPI = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(post)
  }).then(res => res.json())


// POST /comments
//   USAGE:
//     Add a comment to a post
//   PARAMS:
//     id: Any unique ID. As with posts, UUID is probably the best here.
//     timestamp: timestamp. Get this however you want.
//     body: String
//     author: String
//     parentId: Should match a post id in the database.
export const addCommentAPI = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(comment)
  }).then(res => res.json())

// | `POST /posts/:id` | Used for voting on a post. |
// **option** - [String]: Either `"upVote"` or `"downVote"`. |
export const votePostAPI = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: headers,
    // body: JSON.stringify(post)
  }).then(res => res.json())


// POST /posts/:id
//   USAGE:
//     Used for voting on a post
//   PARAMS:
//     option - String: Either "upVote" or "downVote"
export const voteCommentAPI = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: headers,
    body: {option}
  }).then(res => res.json())


// PUT /comments/:id
//   USAGE:
//     Edit the details of an existing comment
//   PARAMS:
//     timestamp: timestamp. Get this however you want.
//     body: String
export const editCommentAPI = (commentId, params) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(params)
  }).then(res => res.json())


// DELETE /comments/:id
//   USAGE:
//     Sets a comment's deleted flag to 'true'
export const removeCommentAPI = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: headers,
  }).then(res => res.json())
