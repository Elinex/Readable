import * as dataAPI from '../dataAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategoriesAction = (categoriesList) => {
  return {
    type: GET_CATEGORIES,
    categoriesList
  }
}

// | `GET /categories` |
// | Get all of the categories available for the app. List is found in `categories.js`.
// Feel free to extend this list as you desire. |
// | No params. |

export const getCategories = () => (dispatch) => {
  dataAPI.getCategoriesAPI()
    .then(res => dispatch(getCategoriesAction(res.categories)))
}
