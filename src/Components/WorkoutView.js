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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';
import Timer from './Timer'
import { connect } from 'react-redux'
import * as actionCreators from '../Redux/actions/action'

class WorkoutView extends Component {

  state = {
    // info: false,
    selectedExercises: null
  }

  startWorkout = (event) => {
    console.log(event.target.innerText)
  }

  showDetails = (event) => {
    this.setState({
      info: !this.state.info
    })
  }

  render() {

    let timeLeft = 30;
    const goTimer = setInterval(()=>{
      // DOM
      timeLeft -= 1;
      if(timeLeft <= 0){
        clearInterval(goTimer)
        // DOM
      }
    }, 1000)

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
      },
      gridList: {
        width: 500,
        height: 450
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)'
      },
      selected: {
        border: '5px solid green'
      }
    }

    return(
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.props.viewStatus}
          onClose={this.props.viewWorkout}>
          <DialogTitle>{this.props.workoutDetails.name}</DialogTitle>
            <div style={styles.root}>
              <GridList cellHeight={180} style={styles.gridList}>
                {this.props.workoutDetails.exercises.map(tile => (
                  <GridListTile key={tile.media} style={styles.selected} >
                    <img src={tile.media} alt={tile.name} />
                    <GridListTileBar
                      title={tile.name}
                      subtitle={<span>difficulty: {tile.difficulty}</span>}
                      // actionIcon={<IconButton onClick={this.showDetails} style={styles.icon}><InfoIcon /></IconButton>}
                      />
                  </GridListTile>))}
              </GridList>
            </div>
          <DialogActions>
            <Button onClick={this.props.viewWorkout} color="primary">
              Back
            </Button>
            <Button className="start" onClick={this.startWorkout} color="primary">
              Start
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default WorkoutView
