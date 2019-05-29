import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Timer from './Timer'
import { connect } from 'react-redux'
import * as actionCreators from '../Redux/actions/action'

class WorkoutView extends Component {

  state = {
    timer: this.props.workoutDetails.time,
    selectedExercise: null
  }

  handleDelete = (event) => {
    this.props.toggleView()
    let workoutCardId = this.props.workoutDetails.id
    let exerciseIds = this.props.workoutDetails.exercises.map(ex=>ex.id)
    this.props.deletingWorkoutCard(exerciseIds, workoutCardId)
  }

  startWorkout = (event) => {
    this.workoutTimer()
    this.setState({
      timer: this.props.workoutDetails.time
    })
  }

  workoutTimer = () => {
    const goTimer = setInterval(()=>{
      let timeLeft = this.state.timer
      timeLeft -= 1;
      this.setState({
        timer: timeLeft
      })
      if(timeLeft <= 0){
        clearInterval(goTimer)
        this.setState({
          timer: 'Done'
        })
      }
    }, 1000)
  }

  nextWorkout = (exercise) => {
    this.setState({
      selectedExercise: exercise
    })
  }

  // showDetails = (event) => {
  //   this.setState({
  //     info: !this.state.info
  //   })
  // }

  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
      },
      header: {
        display: 'inline-block'
      },
      gridList: {
        width: 500,
        height: 450
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)'
      },
      // selected: {
      //   border: '5px solid green'
      // }
    }

    return(
      <div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.props.viewStatus}
          onClose={this.props.viewWorkout}>
          <div>
            <DialogTitle style={styles.header}>{this.props.workoutDetails.name}</DialogTitle>
            <Tooltip title="Delete"><IconButton style={styles.header} onClick={this.handleDelete}><Delete></Delete></IconButton></Tooltip>
          </div>
          <DialogContent style={styles.header}><DialogContentText variant="h4" className="timer">{`Time Remaining: ${this.state.timer}`}</DialogContentText></DialogContent>
            <div style={styles.root}>
              <GridList cellHeight={180} style={styles.gridList}>
                {this.props.workoutDetails.exercises.map(tile => (
                  <GridListTile key={tile.media} >
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
            <Button onClick={this.startWorkout} color="primary">
              Start
            </Button>
            <Button onClick={this.completeWorkout} color="primary">
              Complete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return state
}

export default connect(stateToProps, actionCreators)(WorkoutView)
