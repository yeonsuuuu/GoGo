import React, { Component } from "react";

class Best extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="img">
        <img src={require('../img/rabbit.jpg')} alt="fireSpot" height="50px" ></img>
      </div>
    );
  }
}

export default Best;