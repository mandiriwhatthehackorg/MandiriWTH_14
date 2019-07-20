import { LOGIN } from '../constants'; 

const initialState = {
  isLoading: false,
  users: [],
};

export default function(state = initialState, action){

  switch (action.type){
    case LOGIN.POST:
      return {
        ...state,
        isLoading: true,
        users: action.payload,
      }
    case LOGIN.POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: [],
      }
     case LOGIN.CLEAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: [],
      }
    default:
      return state;
  }
}