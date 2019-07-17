import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import macroChart from '../assets/editedMacros.png'
import weightChart from '../assets/weightChart.png'
import Macros from '../Components/Macros'

export default class Stats extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className="ppr_img">
              <img className="weight_img" alt="Weight" src={weightChart} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="ppr_img">
              {/* <img className="macro_img" alt="Macros" src={macroChart} /> */}
              <Macros />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}


// <Grid item xs>
//   <Paper>xs</Paper>
// </Grid>
