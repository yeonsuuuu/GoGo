import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        Drunken Gals hahaha
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector("#root"));