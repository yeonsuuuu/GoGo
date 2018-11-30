import React, {Component} from 'react';
import {Box,IconButton} from "gestalt";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <Box position="absolute" top right padding={3} display="flex" direction="row" alignItems="center">
        <Box paddingX={2}>
          <IconButton
            accessibilityLabel="Notifications"
            icon="speech-ellipsis"
            size="md"
          />
        </Box>
        <Box paddingX={2}>
          <IconButton accessibilityLabel="Profile" icon="person" size="md" />
        </Box>
      </Box>
    );
  }
}

export default Menu;
