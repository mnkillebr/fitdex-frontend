const initialState = {
  exercises: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EXERCISES':
      return {...state, exercises: action.payload}
    default:
      return state
  }
}

export default reducer
