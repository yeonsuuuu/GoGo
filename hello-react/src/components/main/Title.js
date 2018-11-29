import React, { Component } from "react";

import Searchbar from "./Searchbar";
import Menu from "./Menu";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div>
        <Menu></Menu>
        <Searchbar></Searchbar>
      </div>
    );
  }
}

export default Header;
