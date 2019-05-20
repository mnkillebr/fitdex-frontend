import React, {Component} from 'react';
import Header from '../Components/Header'
import { connect } from 'react-redux'
import * as actionCreators from '../Redux/actions/action'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CardContainer extends Component {

  componentDidMount() {
    this.props.fetchedExercises()
  }

  render() {
    return (
      <div>
        <Header />
        <div className="card-container">
          <div className="h-scroll wrapper">
            {this.props.exercises.map(exercise=>
            <Card className="card">
            <CardContent>
            <Typography>{exercise.name}</Typography>
            </CardContent>
            </Card>)}
          </div>
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
