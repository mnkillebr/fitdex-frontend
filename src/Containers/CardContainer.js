import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../Redux/actions/action';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ExCard from '../Components/ExCard';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddExercise from '../Components/AddExercise';

class CardContainer extends Component {

  state = {
    form_add: false,
    filter: ''
  }

  componentDidMount() {
    this.props.fetchedExercises()
  }

  toggleFilter = (event) => {
    document.querySelector('#filter2').classList.toggle('in')
  }

  filterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  toggleNewExerciseForm = (event) => {
    this.setState({
      form_add: !this.state.form_add
    })
  }

  render() {
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
            <Typography className="container-title" variant="h4" component="h2" color="inherit">Exercises</Typography>
          </Button>
          <div id="filter2" className="" style={styles.Filter}>
            <div>
              <SearchIcon style={styles.searchIcon} />
              <InputBase onChange={this.filterChange} style={styles.filterInput} placeholder="Filter..." value={this.state.filter} />
            </div>
          </div>
          <div className="h-scroll wrapper">
            {this.props.exercises.filter(exercise=>
              exercise.name.toLowerCase().includes(this.state.filter) ||
              exercise.difficulty.toLowerCase().includes(this.state.filter)
            ).map(exercise=>
              <ExCard exercise={exercise} />
            )}
          </div>
          <Tooltip title="Add Exercise">
            <Fab color="primary" aria-label="Add" className="add-exercise" onClick={this.toggleNewExerciseForm} >
              <AddIcon />
            </Fab>
          </Tooltip>
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
