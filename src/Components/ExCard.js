import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardFront from './CardFront'
import CardDetails from './CardDetails'

export default class ExCard extends Component {

  state = {
    details: false
  }

  showDetails = (event) => {
    this.setState({
      details: !this.state.details
    })
  }

  render() {
    return (
      <div>
        <Card className="card" onClick={this.showDetails}>
        <CardFront exercise={this.props.exercise} />
        {this.state.details?<CardDetails exercise={this.props.exercise} detailsStatus={this.state.details} />:null}
        </Card>
      </div>
    )
  }
}
