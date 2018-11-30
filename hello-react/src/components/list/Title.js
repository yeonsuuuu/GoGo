import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="title">
        <span>이 주의 분위기 베스트 20곳</span>
      </div>
    );
  }
}

export default Title;
