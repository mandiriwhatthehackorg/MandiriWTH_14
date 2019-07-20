import { ERRORS, LOGIN } from '../constants';

import { configApi } from "./config";


export const postLogin = async (handleContact) => {
  configApi.method = "POST";
  configApi.body = JSON.stringify(handleContact);
  const response = await fetch(`https://api.github.com/https://oob.mandiriwhatthehack.com/api/login`, configApi);
  const data = await response.json();
  console.log(data);
  if (response.status >= 400) {
      throw new Error(data.errors);
  }
  return data;
};

// export function postLogin(handleContact) {
//   console.log(handleContact);
//   configApi.method = "POST";
//   configApi.body = JSON.stringify(handleContact);

//   return function(dispatch, getState) {
  //   fetch('https://api.github.com/https://oob.mandiriwhatthehack.com/api/login', configApi)
  //   .then(e => e.json())
  //     .then(function(response){
  //       console.log(response);
  //       dispatch(setLogin(response))
  //     }).catch((error) => {
  //          console.error(error,"ERRRRRORRR");
  //      });
  // }
// }

export function setLogin(response) {
  return{
    type: LOGIN.POST,
    payload: response
  }
}

