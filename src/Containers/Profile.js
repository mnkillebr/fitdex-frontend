import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <Paper>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
        </Typography>
        </Paper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CEVXcP3VC3Y?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}
