import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class Profile extends Component {

  handleEdit = (event) => {
    console.log(event.target.innerHTML)
  }

  render() {
    return (
      <div className='profile'>
        <h1>Profile Page</h1>
        <Paper>
          <div>
            <Typography variant='h5'>
              Name: {this.props.currentUser.name}
            </Typography>
            <Typography variant='h5'>
              Email: {this.props.currentUser.email}
            </Typography>
            <Typography variant='h5'>
              Date of Birth: {this.props.currentUser.birthdate}
            </Typography>
            <Typography variant='h5'>
              Weight: {this.props.currentUser.weight} lbs
            </Typography>
            <Typography variant='h5'>
              Height: {this.props.currentUser.height} inches
            </Typography>
          </div>
        </Paper>
        <br/>
        <Button variant="contained" color="primary" onClick={this.handleEdit}>
          Edit Info
        </Button>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/CEVXcP3VC3Y?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
    )
  }
}
