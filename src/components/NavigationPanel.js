import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import FeedbackIcon from 'material-ui-icons/Feedback';
import CodeIcon from 'material-ui-icons/Code';

import { AUTHOR_GITHUB } from '../constants/contact-info';

const ListContainer = styled.div`
  min-width: 270px;
`;

export default class NavigationPanel extends React.PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  render() {
    const { isOpened, toggle } = this.props;
    return (
      <Drawer
        type="temporary"
        anchor="left"
        open={isOpened}
        onRequestClose={toggle}
        ModalProps={{ keepMounted: true }}
      >
        <ListContainer>
          <List>
            <ListItem>
              <ListItemText primary="App v0.0.1" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/feedback">
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() =>
                window.open(`${AUTHOR_GITHUB}/MUISCRR-boilerplate`, '_blank')
              }
            >
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Go to code" />
            </ListItem>
          </List>
        </ListContainer>
      </Drawer>
    );
  }
}
