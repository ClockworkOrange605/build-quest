export const GET_PROJECTS_LIST = "GET_PROJECTS_LIST";

export function getProjectsList(){
  return async function (dispatch) {
    dispatch({type: GET_PROJECTS_LIST, payload: ['card1', 'card2', 'card3']})
  }
}