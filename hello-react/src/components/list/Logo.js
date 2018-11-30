import React, { Component } from "react";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="logo">
        <img src={require('../img/Logo.png')} alt="fireSpot" height="50px" ></img>
      </div>
    );
  }
}

export default Logo;