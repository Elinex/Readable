const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Whatever'
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

export const addPost = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
