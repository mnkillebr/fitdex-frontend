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
export const deleteExercise = (exercise) => ({type: 'DELETE_EXERCISE', payload: exercise})

export function fetchedExercises() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/exercises')
    .then(res=>res.json())
    .then(exerciseArr=>dispatch(getExercises(exerciseArr)))
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

// export function deletingExercise(exObj) {
//   return (dispatch) => {
//     return fetch(`http://localhost:3000/api/v1/exercises/${exObj.id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => response.json())
//   }
// }
