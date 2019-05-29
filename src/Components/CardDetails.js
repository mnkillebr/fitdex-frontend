import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class CardDetails extends Component {

  state = {
    form: this.props.detailsStatus
  }

  toggleForm = (event) => {
    this.setState({
      form: !this.state.form
    })
  }

  render() {
    return (
      <div>
        <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={this.state.form}
        onClose={this.toggleForm}>
          <DialogTitle>{this.props.exercise.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>{this.props.exercise.description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleForm} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default CardDetails;
