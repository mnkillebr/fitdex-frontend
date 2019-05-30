import React, {Component} from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>{`Hello ${this.props.currentUser.name}`}</h1>
        <h1>Profile Page Coming Soon...</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CEVXcP3VC3Y?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}
