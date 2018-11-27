import React, { Component } from "react";
import { Box, Text } from "gestalt";

import "gestalt/dist/gestalt.css";
import "../../style.css";
import "./main.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Box marginBottom={2}>
        <Text color="white">White</Text>
      </Box>
    );
  }
}

export default Footer;
