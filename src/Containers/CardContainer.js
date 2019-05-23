import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/actions/action';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddExercise from '../Components/AddExercise'

class CardContainer extends Component {

  state = {
    form_add: false
  }

  componentDidMount() {
    this.props.fetchedExercises()
  }

  cardFlip = (event) => {
    event.target.parentElement.parentElement.classList.toggle('is-flipped')
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
            <Card className="card">
              <CardActionArea onClick={this.cardFlip} >
                <CardMedia
                  component="img"
                  alt={exercise.name}
                  className="card-media"
                  height="140"
                  image={exercise.media}
                  title={exercise.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">{exercise.name}</Typography>
                  <Typography component="p">{exercise.difficulty}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>)}
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
