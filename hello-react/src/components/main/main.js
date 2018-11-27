import React, {Component,Fragment} from 'react';
import Header from './Header';
import Center from './Center';

import 'gestalt/dist/gestalt.css';
import './main.css';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Center></Center>
      </Fragment>
    );
  }
}

export default Main;
