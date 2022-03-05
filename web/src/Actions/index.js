export const GET_PROJECTS_LIST = "GET_PROJECTS_LIST";

const axios = require ('axios');

export function getProjectsList(){
  return async function (dispatch) {
    dispatch({type: GET_PROJECTS_LIST, payload: ['card1', 'card2', 'card3']})
  }
}