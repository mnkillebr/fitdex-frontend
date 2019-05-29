import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import DeckContainer from './DeckContainer';
import CardContainer from './CardContainer';

class Main extends Component {

  render() {
    return (
      <div>
        <DeckContainer />
        <Divider variant="middle" />
        <CardContainer />
      </div>
    )
  }
}

export default Main
