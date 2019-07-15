import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/actions/action';

class AddWorkout extends Component {

  state = {
    name: '',
    level: '',
    img: '',
    time: 0,
    exercises: [],
    form: this.props.viewStatus,
    workout: this.props.newWorkout
  }

  toggleForm = (event) => {
    this.setState({
      form: !this.state.form
    })
  }

  handleSelectChange = (event, attribute) => {
    this.setState({
      [attribute]: event.target.value
    })
  }

  handleTextChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event, workoutObj) => {
    let exerciseIds = workoutObj.exercises.map(exercise=>exercise.id)
    this.props.addingWorkoutCard(workoutObj)
    .then(res=>{
      let createdWorkoutId = res.payload.id
      exerciseIds.forEach(id=>{
        this.props.addingWorkoutJoin(id, createdWorkoutId)
      })
    })
    this.setState({
      form: !this.state.form,
      workout: workoutObj
    })
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: 10,
        minWidth: 120,
        maxWidth: 300,
      }
    }

    return(
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.form}
          onClose={this.toggleForm}>
          <DialogTitle>Add New Workout</DialogTitle>
          <DialogContent>
            <form style={styles.root}>
              <div>
                <TextField onChange={this.handleTextChange} value={this.state.name} style={styles.formControl} autoFocus margin="dense" id="name" label="Name" type="text"/>
                <TextField onChange={this.handleTextChange} value={this.state.img} style={styles.formControl} margin="dense" id="img" label="Picture or Gif Link" type="text"/>
              </div>
              <Divider variant="middle"/>
              <div>
                <FormControl style={styles.formControl}>
                  <InputLabel htmlFor="level">Level</InputLabel>
                  <Select
                    value={this.state.level}
                    onChange={event=>this.handleSelectChange(event, 'level')}
                    input={<Input id="level" />}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem name='level' value='Beginner'>Beginner</MenuItem>
                    <MenuItem name='level' value='Intermediate'>Intermediate</MenuItem>
                    <MenuItem name='level' value='Advanced'>Advanced</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={styles.formControl}>
                <InputLabel htmlFor="select-multiple">Exercises</InputLabel>
                <Select
                  multiple
                  value={this.state.exercises}
                  onChange={event=>this.handleSelectChange(event, 'exercises')}
                  input={<Input id="select-multiple" />}>
                  {this.props.exercises.map(exercise => (
                    <MenuItem key={exercise.name} value={exercise}>{exercise.name}</MenuItem>))}
                </Select>
                </FormControl>
              </div>

              <div>
                <TextField onChange={this.handleTextChange} value={this.state.time} multiline style={styles.formControl} margin="dense" id="time" label="Workout Time" type="number"/>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleForm} color="primary">
              Cancel
            </Button>
            <Button onClick={event=>this.handleSubmit(event, this.state)} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    exercises: state.exercises
  }
}

export default connect(stateToProps, actionCreators)(AddWorkout)
