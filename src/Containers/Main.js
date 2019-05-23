import React, {Component} from 'react';
import DeckContainer from './DeckContainer';
import CardContainer from './CardContainer';
import Header from '../Components/Header';

class Main extends Component {

  state = {
    filterText: ''
  }

  filterChange = (event) => {
    this.setState({
      filterText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Header filter={this.state.filterText} filterChange={this.filterChange} />
        <DeckContainer filterText={this.state.filterText} />
        <CardContainer filterText={this.state.filterText} />
      </div>
    )
  }
}

export default Main
