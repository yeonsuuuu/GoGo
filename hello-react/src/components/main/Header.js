import React, { Component } from "react";
import { Box, Image } from "gestalt";

import "gestalt/dist/gestalt.css";
import "../../style.css";
import "./main.css";
import Searchbar from "./Searchbar";
import Menu from "./Menu";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Box column={12} Height={350} paddingX={2}>
        <Image
          alt="Tropic greens: The taste of Petrol and Porcelain | Interior design, Vintage Sets and Unique Pieces agave"
          color="rgb(231, 186, 176)"
          naturalHeight={350}
          naturalWidth={564}
          src="./img/main.jpeg"
        >
          <Menu />
          <Box>
            <Searchbar />
          </Box>
        </Image>
      </Box>
    );
  }
}

export default Header;
