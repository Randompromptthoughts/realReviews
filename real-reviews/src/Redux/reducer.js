const initialState = {
  content: '',
  profilePic: ''
}

const ENTER_CONTENT = 'ENTER_CONTENT';

export function enterContent(contentWrds) {
  return {
    type: ENTER_CONTENT,
    payload: contentWrds
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case ENTER_CONTENT:
      const newContent = state.content + '' + payload;

      return {
        ...state,
        content: newContent
      }
    default: return state
  }
}