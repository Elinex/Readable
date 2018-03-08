import * as dataAPI from '../dataAPI'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export function getCategoriesAction(categoriesList){
  return {
    type: GET_CATEGORIES,
    categoriesList
  }
}

// export function getCategories(dispatch){
//   dataAPI.getCategoriesAPI()
//     .then(res => dispatch(getCategoriesAction(res)))
// }

export const getCategories = () => (dispatch) => {
  dataAPI.getCategoriesAPI()
    .then(res => dispatch(getCategoriesAction(res.categories)))
}
