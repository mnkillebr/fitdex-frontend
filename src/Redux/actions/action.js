// import axios from 'axios'
//
// export function loadExercises() {
//   return (dispatch) => {
//     return axios.get('http://localhost:3000/api/v1/exercises')
//     .then(res=>dispatch(getExercises(res.data)))
//   }
// }

export const getExercises = (exercises) => ({type: 'GET_EXERCISES', payload: exercises})
export const addNewExercise = (exercise) => ({type: 'ADD_EXERCISE', payload: exercise})
export const addNewWorkoutCard = (workoutCard) => ({type: 'ADD_WORKOUT', payload: workoutCard})
export const deleteWorkoutCard = (workoutCardId) => ({type: 'DELETE_WORKOUT_CARD', payload: workoutCardId})
export const deleteExercise = (exercise) => ({type: 'DELETE_EXERCISE', payload: exercise})
export const getWorkoutCards = (workoutCards) => ({type: 'GET_WORKOUTS', payload: workoutCards})

export function fetchedExercises() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/exercises')
    .then(res=>res.json())
    .then(exerciseArr=>dispatch(getExercises(exerciseArr)))
  }
}

export function fetchedWorkoutCards() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/workout_cards')
    .then(res=>res.json())
    .then(workoutCardArr=>dispatch(getWorkoutCards(workoutCardArr)))
  }
}

export function addingExercise(newExerciseObj) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/exercises', {
      method: 'POST',
      headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	  },
      body: JSON.stringify(newExerciseObj)
    }).then(res=>res.json())
    .then(newExercise=>dispatch(addNewExercise(newExercise)))
      }
    }

export function addingWorkoutCard(newWorkoutObj) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/workout_cards', {
      method: 'POST',
      headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	  },
      body: JSON.stringify(newWorkoutObj)
    }).then(res=>res.json())
    .then(newWorkout=>dispatch(addNewWorkoutCard(newWorkout)))
      }
    }

export function deletingWorkoutCard(workoutId) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/workout_cards/${workoutId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    // .then(json=>dispatch(deleteWorkout(json)))
  }
}


export function deletingExercise(exObj) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/exercises/${exObj.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
  }
}
