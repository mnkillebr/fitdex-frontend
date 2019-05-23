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
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/actions/action';

class AddWorkout extends Component {
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
          open={this.props.viewStatus}
          onClose={this.props.toggleForm}>
          <DialogTitle>Add New Workout</DialogTitle>
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

export default AddWorkout
