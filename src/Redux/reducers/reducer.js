const initialState = {
  exercises: [],

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EXERCISES':
      return {...state, exercises: action.payload}
    case 'ADD_EXERCISE':
      return {...state,
        exercises: [action.payload, ...state.exercises]
      }
    case 'DELETE_EXERCISE':
      return {...state,
        exercises: [...state.exercises]
      }
    default:
      return state
  }
}

export default reducer
