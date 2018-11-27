import React, {Component,Fragment} from 'react';
import Header from './Header';
import Center from './Center';
import Registration from './Registration';
import Footer from './Footer';

import 'gestalt/dist/gestalt.css';
import './main.css';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Center></Center>
        <Registration></Registration>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default Main;
