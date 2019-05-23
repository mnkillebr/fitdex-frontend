import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/actions/action';
import WorkoutView from '../Components/WorkoutView'
import AddWorkout from '../Components/AddWorkout'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';

class DeckContainer extends Component {

  state = {
    viewWorkoutStatus: false,
    viewNewForm: false,
    currentWorkout: {}
  }

  componentDidMount() {
    this.props.fetchedWorkoutCards()
  }

  viewWorkout = (event) => {
    let workout = this.props.workout_cards.find(workout=>workout.id==event.target.id)
    this.setState({
      currentWorkout: workout,
      viewWorkoutStatus: !this.state.viewWorkoutStatus
    })
  }

  toggleNewWorkoutForm = (event) => {
    this.setState({
      viewNewForm: !this.state.viewNewForm
    })
  }

  render() {
    return (
      <div>
        <div className="card-container">
          <Typography variant="h5" component="h2">Workouts</Typography>
          <div className="h-scroll wrapper">
            {this.props.workout_cards.filter(workout_card=>
              workout_card.name.toLowerCase().includes(this.props.filterText) ||
              workout_card.level.toLowerCase().includes(this.props.filterText)
            ).map(workout_card=>
            <Card className="card">
              <CardActionArea onClick={this.viewWorkout}>
                <CardMedia
                  id={workout_card.id}
                  component="img"
                  alt={workout_card.name}
                  className="card-media"
                  height="140"
                  image={workout_card.img}
                  title={workout_card.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" id={workout_card.id} component="h2">{workout_card.name}</Typography>
                  <Typography component="p" id={workout_card.id}>{workout_card.level}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>)}
          </div>
            <Fab color="primary" aria-label="Add" className="add-exercise" onClick={this.toggleNewWorkoutForm} >
              <AddIcon />
            </Fab>
          {this.state.viewWorkoutStatus?<WorkoutView workoutDetails={this.state.currentWorkout} viewStatus={this.state.viewWorkoutStatus} viewWorkout={this.viewWorkout} />:null}
          {this.state.viewNewForm?<AddWorkout viewStatus={this.state.viewNewForm} toggleForm={this.toggleNewWorkoutForm} />:null}
        </div>
      </div>
    )
  }
}
// <Fab color="primary" aria-label="Add" className="add-exercise" onClick={this.toggleNewExerciseForm} >
//   <AddIcon />
// </Fab>
// {this.state.form_add?<AddExercise toggleForm={this.toggleNewExerciseForm} formStatus={this.state.form_add} />:null}

const stateToProps = (state) => {
  return {
    workout_cards: state.workout_cards
  }
}

export default connect(stateToProps, actionCreators)(DeckContainer)
