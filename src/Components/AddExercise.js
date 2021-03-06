import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
    muscles: [],
    form: this.props.formStatus
  }

  // fileInput = React.createRef();

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

  // handleUpload = (event) => {
  //   this.setState({
  //     media: this.fileInput.current.files[0].name
  //   })
  // }

  handleSubmit = (event) => {
    let muscleString = this.state.muscles.join(', ')
    let exObj = {...this.state, muscles: muscleString}
    // console.log(exObj)
    this.props.addingExercise(exObj)
    this.setState({
      form: !this.state.form
    })
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
          open={this.state.form}
          onClose={this.props.toggleForm}>
          <DialogTitle>Add New Exercise</DialogTitle>
          <DialogContent>
            <form style={styles.root}>
              <div>
                <TextField onChange={this.handleTextChange} value={this.state.name} style={styles.formControl} autoFocus margin="dense" id="name" label="Name" type="text"/>
                {/* <input
                  ref={this.fileInput}
                  onChange={this.handleUpload}
                  accept="image/*"
                  className='upload'
                  id="contained-button-file"
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span" className='upload_btn'>
                    Upload Image
                  </Button>
                </label> */}
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
