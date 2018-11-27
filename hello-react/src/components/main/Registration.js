import React, { Component } from "react";
import { Image, Button, Box, Letterbox } from "gestalt";

import "gestalt/dist/gestalt.css";
import "../../style.css";
import "./main.css";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Box column={12} paddingX={2}>
        <Letterbox Width={1500} height={300} contentAspectRatio={1500/300}>
          <Image
            alt="tall"
            src="./img/sake.png"
            naturalWidth={450}
            naturalHeight={300}
          />
        </Letterbox>
        <Box column={4} paddingX={10}>
          <Button color="white" text="술집 등록하기" />
        </Box>
      </Box>
    );
  }
}

export default Registration;
