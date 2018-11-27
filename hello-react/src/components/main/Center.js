import React, { Component } from "react";
import { Letterbox, Image, Box } from "gestalt";

import "gestalt/dist/gestalt.css";
import "./main.css";
import "./center.css";

class Center extends Component {
  render() {
    return (
      <Box>
        <Letterbox width={300} height={200} contentAspectRatio={1}>
          <Image
            alt="square"
            src="./img/mood.png"
            naturalWidth={1}
            naturalHeight={1}
          />
        </Letterbox>
        <Letterbox width={300} height={200} contentAspectRatio={1}>
          <Image
            alt="square"
            src="./img/mood.png"
            naturalWidth={1}
            naturalHeight={1}
          />
        </Letterbox>
      </Box>
    );
  }
}

export default Center;
