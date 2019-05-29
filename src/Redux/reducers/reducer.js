const initialState = {
  exercises: [],
  workout_cards: [],
  workout_ids: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EXERCISES':
      return {...state, exercises: action.payload}
    case 'ADD_EXERCISE':
      return {...state,
        exercises: [action.payload, ...state.exercises]
      }
    case 'ADD_WORKOUT_CARD':
      return {...state,
        workout_cards: [action.payload, ...state.workout_cards]
      }
    case 'ADD_WORKOUT_JOIN':
      return {...state,
        workout_ids: [...state.workout_ids, action.payload]
      }
    case 'DELETE_WORKOUT_CARD':
      return {...state,
        workout_cards: [...state.workout_cards.filter(card=>card.id!==action.payload)]
      }
    case 'DELETE_EXERCISE':
      return {...state,
        exercises: [...state.exercises.filter(exercise=>exercise.id!==action.payload)]
      }
    case 'GET_WORKOUTS':
      return {...state, workout_cards: action.payload}
    default:
      return state
  }
}

export default reducer
