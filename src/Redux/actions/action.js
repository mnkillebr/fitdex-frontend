// import axios from 'axios'
//
// export function loadExercises() {
//   return (dispatch) => {
//     return axios.get('http://localhost:3000/api/v1/exercises')
//     .then(res=>dispatch(getExercises(res.data)))
//   }
// }

export const getExercises = (exercises) => ({type: 'GET_EXERCISES', payload: exercises})

export function fetchedExercises() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/exercises')
    .then(res=>res.json())
    .then(exerciseArr=>dispatch(getExercises(exerciseArr)))
  }
}
