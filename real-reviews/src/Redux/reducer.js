const initialState = {
  user: {}, //
  content: '',
  profilePic: ''
}

// const ENTER_CONTENT = 'ENTER_CONTENT';

// export function enterContent(contentWrds) {
//   return {
//     type: ENTER_CONTENT,
//     payload: contentWrds
//   }
// }

const GET_USER = 'GET_USER';

export function getUser(userObj) {
  return {
    type: GET_USER,
    payload: userObj
  }
}

// export default function reducer(state = initialState, action) { //reducer
//   const { type, payload } = action;

//   switch(type) {
//     case ENTER_CONTENT:
//       const newContent = state.content + '' + payload;

//       return {
//         ...state,
//         content: newContent
//       }
//     default: return state
//   }
// }

export default function reducer(state = initialState, action){ //reducerTwo
  const {type, payload} = action;

  switch(type) {
    case GET_USER: 
      return {...state, user: payload}
  }
}
