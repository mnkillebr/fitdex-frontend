import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/actions/action';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ExCard from '../Components/ExCard'
import Typography from '@material-ui/core/Typography';
import AddExercise from '../Components/AddExercise'

class CardContainer extends Component {

  state = {
    form_add: false,
  }

  componentDidMount() {
    this.props.fetchedExercises()
  }

  toggleNewExerciseForm = (event) => {
    this.setState({
      form_add: !this.state.form_add
    })
  }

  render() {
    // {console.log(this.props.exercises.map(ex=>ex.description))}
    return (
      <div>
        <div className="card-container">
          <Typography variant="h5" component="h2">Exercises</Typography>
          <div className="h-scroll wrapper">
            {this.props.exercises.filter(exercise=>
              exercise.name.toLowerCase().includes(this.props.filterText) ||
              exercise.difficulty.toLowerCase().includes(this.props.filterText)
            ).map(exercise=>
              <ExCard exercise={exercise} />
            )}
          </div>
          <Fab color="primary" aria-label="Add" className="add-exercise" onClick={this.toggleNewExerciseForm} >
            <AddIcon />
          </Fab>
          {this.state.form_add?<AddExercise toggleForm={this.toggleNewExerciseForm} formStatus={this.state.form_add} />:null}
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    exercises: state.exercises
  }
}

export default connect(stateToProps, actionCreators)(CardContainer)

  // state = {
  //   exercises: []
  // }

  // componentDidMount() {
  //   this.props.fetchedExercises().then(res=>{
  //     this.setState({
  //       exercises: res.payload
  //     })
  //   })
  // }

// {this.state.exercises.map(exercise=>
  //   <Card className="card">
  //     <CardContent>
  //       <Typography>{exercise.name}</Typography>
  //     </CardContent>
  //   </Card>)}

  // const dispatchToProps = (dispatch) => {
  //   return {
  //     fetchedExercises: () => dispatch(fetchedExercises())
  //   }
  // }
