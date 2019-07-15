import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/actions/action';
import WorkoutView from '../Components/WorkoutView'
import AddWorkout from '../Components/AddWorkout'
import Fab from '@material-ui/core/Fab';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class DeckContainer extends Component {

  state = {
    viewWorkoutStatus: false,
    viewNewForm: false,
    currentWorkout: {},
    newWorkout: {},
    filter: ''
  }

  componentDidMount() {
    this.props.fetchedWorkoutCards()
  }

  shouldComponentUpdate() {
    // this.props.fetchedWorkoutCards()
    return true
  }

  toggleFilter = (event) => {
    document.querySelector('#filter').classList.toggle('in')
  }

  filterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  toggleView = () => {
    this.setState({
      viewWorkoutStatus: !this.state.viewWorkoutStatus
    })
  }

  viewWorkout = (event) => {
    let workout = this.props.workout_cards.find(workout=>workout.id==event.target.id)
    this.setState({
      currentWorkout: workout
    })
    this.toggleView()
  }

  toggleNewWorkoutForm = (event) => {
    this.setState({
      viewNewForm: !this.state.viewNewForm
    })
  }

  render() {
    console.log(this.props)
    const styles = {
      Filter: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: '#349fda',
        borderRadius: '7px'
      },
      filterInput: {
        position: 'relative',
        bottom: '3px',
        left: '10px',
        color: 'white'
      },
      searchIcon: {
        color: 'white',
        position: 'relative',
        top: '3px'
      }
    }
    return (
      <div>
        <div className="card-container">
          <Button onClick={this.toggleFilter} variant="contained" color="primary">
            <Typography className="container-title" variant="h4" component="h2" color="inherit" >Workouts</Typography>
          </Button>
          <div id="filter" className="" style={styles.Filter}>
            <div>
              <SearchIcon style={styles.searchIcon} />
              <InputBase onChange={this.filterChange} style={styles.filterInput} placeholder="Filter..." value={this.state.filter} />
            </div>
          </div>
          <div className="h-scroll wrapper">
            {this.props.workout_cards.filter(workout_card=>
              workout_card.name.toLowerCase().includes(this.state.filter) ||
              workout_card.level.toLowerCase().includes(this.state.filter)
            ).map(workout_card=>
            <Card className="card">
              <CardActionArea onClick={this.viewWorkout}>
                <CardMedia
                  id={workout_card.id}
                  component="img"
                  alt={workout_card.name}
                  className="card-media"
                  height="200"
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
          <Tooltip title="Add Workout">
            <Fab color="primary" aria-label="Add" className="add-exercise" onClick={this.toggleNewWorkoutForm} >
              <AddIcon />
            </Fab>
          </Tooltip>
          {this.state.viewWorkoutStatus?<WorkoutView workoutDetails={this.state.currentWorkout} viewStatus={this.state.viewWorkoutStatus} viewWorkout={this.viewWorkout} toggleView={this.toggleView} />:null}
          {this.state.viewNewForm?<AddWorkout newWorkout={this.state.newWorkout} viewStatus={this.state.viewNewForm} />:null}
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
