import React, { Component } from "react";
import { Box, SearchField } from "gestalt";

import "gestalt/dist/gestalt.css";
import "../../style.css";
import "./main.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Box column={6} margin={10}>
        <SearchField
          accessibilityLabel="Demo Search Field"
          id="searchField"
          onChange={({ value }) => this.setState({ value })}
          placeholder="Search and explore"
          value={this.state.value}
        />
      </Box>
    );
  }
}

export default Searchbar;
