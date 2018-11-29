import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Main from './components/main/Main';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Main></Main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));