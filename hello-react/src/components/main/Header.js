import React, {Component} from 'react';
import {Icon,Box,SearchField,IconButton} from "gestalt";

import 'gestalt/dist/gestalt.css';
import './main.css';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <Box color="white" shape="rounded" padding={3} display="flex" direction="row" alignItems="center">
        <Box padding={3}>
          <Icon
            icon="pinterest"
            color="red"
            size={20}
            accessibilityLabel="Pinterest"
          />
        </Box>
        <Box flex="grow" paddingX={2}>
          <SearchField
            accessibilityLabel="Demo Search Field"
            id="searchField"
            onChange={({ value }) => this.setState({ value })}
            placeholder="Search and explore"
            value={this.state.value}
          />
        </Box>
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

export default Header;
