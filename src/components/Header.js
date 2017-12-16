import React from 'react';
import styled from 'styled-components';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import NavigationPanel from './NavigationPanel';

const Container = styled(AppBar)`
  min-height: 5vh;
`;

const Title = styled(Typography)`
  && {
    margin-left: 10px;
  }
`;

export default class Header extends React.PureComponent {
  state = { isPanelOpened: false };

  togglePanel = () => {
    this.setState({ isPanelOpened: !this.state.isPanelOpened });
  };

  render() {
    return (
      <Container position="static" color="primary">
        <Toolbar>
          <IconButton
            onClick={this.togglePanel}
            color="contrast"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Title type="title" color="inherit">
            Application
          </Title>
        </Toolbar>
        <NavigationPanel
          isOpened={this.state.isPanelOpened}
          toggle={this.togglePanel}
        />
      </Container>
    );
  }
}
