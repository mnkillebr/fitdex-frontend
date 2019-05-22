import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux'
import * as actionCreators from '../Redux/actions/action'

class AddExercise extends Component {

  state = {
    name: '',
    difficulty: '',
    media: '',
    description: '',
    muscles: []
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

  handleSubmit = (event) => {
    console.log(this.state)
    this.props.addingExercise(this.state)
  }

  render() {

    const muscles = [
      'Quadriceps',
      'Hamstrings',
      'Glutes',
      'Calves',
      'Core',
      'Chest',
      'Triceps',
      'Shoulders',
      'Back',
      'Biceps'
    ]
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

    return (
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.props.formStatus}
          onClose={this.props.toggleForm}>
          <DialogTitle>Add New Exercise</DialogTitle>
          <DialogContent>
            <form style={styles.root}>
              <div>
                <TextField onChange={this.handleTextChange} value={this.state.name} style={styles.formControl} autoFocus margin="dense" id="name" label="Name" type="text"/>
                <TextField onChange={this.handleTextChange} value={this.state.media} style={styles.formControl} margin="dense" id="media" label="Picture or Gif Link" type="text"/>
              </div>
              <Divider variant="middle"/>
              <div>
                <FormControl style={styles.formControl}>
                  <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
                  <Select
                    value={this.state.difficulty}
                    onChange={event=>this.handleSelectChange(event, 'difficulty')}
                    input={<Input id="difficulty" />}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem name='difficulty' value='Easy'>Easy</MenuItem>
                    <MenuItem name='difficulty' value='Medium'>Medium</MenuItem>
                    <MenuItem name='difficulty' value='Hard'>Hard</MenuItem>
                  </Select>
                </FormControl>
                <FormControl style={styles.formControl}>
                <InputLabel htmlFor="select-multiple">Muscles</InputLabel>
                <Select
                  multiple
                  value={this.state.muscles}
                  onChange={event=>this.handleSelectChange(event, 'muscles')}
                  input={<Input id="select-multiple" />}>
                  {muscles.map(muscle => (
                    <MenuItem key={muscle} value={muscle}>{muscle}</MenuItem>))}
                </Select>
                </FormControl>
              </div>

              <div>
                <TextField onChange={this.handleTextChange} value={this.state.description} multiline style={styles.formControl} margin="dense" id="description" label="Description" type="text"/>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.toggleForm} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, actionCreators)(AddExercise)
