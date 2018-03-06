const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Whatever'
}

const headersPost = {
  'Accept': 'application/json',
  'Authorization': 'Whatever',
  'Content-Type': 'application/json'
}


// | `GET /categories` |
// Get all of the categories available for the app. List is found in `categories.js`.
// Feel free to extend this list as you desire. |  |
export const getCategoriesAPI = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())


// | `POST /posts` | Add a new post. |
// **id** - UUID should be fine, but any unique id will work <br>
// **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()`
// if you like. <br> **title** - [String] <br> **body** - [String] <br>
// **author** - [String] <br> **category** -  Any of the categories listed in
// `categories.js`. Feel free to extend this list as you desire. |
export const postPostAPI = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headersPost,
    body: JSON.stringify(post)
  }).then(res => res.json())


// | `GET /posts` | Get all of the posts. Useful for the main page when no category
// is selected. |  |
export const getPostsAPI = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())


// | `GET /posts/:id/comments` | Get all the comments for a single post. | |
export const getCommentsAPI = (parentId) =>
  fetch(`${api}/posts/${parentId}/comments`, { headers })
  .then(res => res.json())


// | `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br>
// Sets the parentDeleted flag for all child comments to 'true'. | |
export const removePostAPI = (postID) =>
  fetch(`${api}/posts/${postID}`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(postID)
  }).then(res => res.json())


// | `PUT /posts/:id` | Edit the details of an existing post. |
// **title** - [String] <br> **body** - [String] |
export const editPostAPI = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: headersPost,
    body: JSON.stringify(post)
  }).then(res => res.json())


// | `POST /comments` | Add a comment to a post. | **id** - Any unique ID.
// As with posts, UUID is probably the best here. <br>
// **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br>
// **author** - [String] <br> **parentId** - Should match a post id in the database. |
export const addCommentAPI = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headersPost,
    body: JSON.stringify(comment)
  }).then(res => res.json())

// | `POST /posts/:id` | Used for voting on a post. |
// **option** - [String]: Either `"upVote"` or `"downVote"`. |
export const votePostAPI = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: headersPost,
    body: JSON.stringify(post)
  }).then(res => res.json())

// | `POST /comments/:id` | Used for voting on a comment. |
// **option** - [String]: Either `"upVote"` or `"downVote"`.  |
export const voteCommentAPI = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'POST',
    headers: headersPost,
    body: JSON.stringify(comment)
  }).then(res => res.json())
