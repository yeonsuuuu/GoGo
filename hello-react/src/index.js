import React, {Component} from 'react';
import ReactDOM from "react-dom";
// import Main from './components/main/Main';
import List from './components/list/List';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        {/* <Main></Main> */}
        <List></List>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));