import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import DeckContainer from './DeckContainer';
import CardContainer from './CardContainer';
import Snackbar from '@material-ui/core/Snackbar';

class Main extends Component {

  state = {
    openSnackbar: false
  }

  handleSnackbar = () => {
    this.setState({
      openSnackbar: !this.state.openSnackbar
    })
  }

  render() {
    return (
      <div>
        <DeckContainer handleSnackbar={this.handleSnackbar}/>
        <Divider variant="middle" />
        <CardContainer />
        <div>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.openSnackbar}
            autoHideDuration={6000}
            onClose={this.handleSnackbar}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Congrats!! Workout Complete!</span>}
          />
        </div>
      </div>
    )
  }
}

export default Main
