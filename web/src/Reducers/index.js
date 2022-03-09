import { GET_PROJECTS_LIST } from "../Actions";

const initialState = {
  projectList: [1,2,3,4,5,6,7,8,9]
}

function rootReducer(state=initialState, action){
  if(action.type === GET_PROJECTS_LIST){
    return {
      ...state,
      projectList: action.payload,
    }
  }
  return state
}

export default rootReducer;