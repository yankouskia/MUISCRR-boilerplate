import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import MaterialToolbar from 'material-ui/Toolbar';
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

const MeetText = styled(Typography)`
  && {
    text-align: right;
  }
`;

const Toolbar = styled(MaterialToolbar)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LineBlock = styled.div`
  display: flex;
  align-items: center;
`;

class Header extends React.PureComponent {
  static propTypes = {
    username: PropTypes.string,
  };

  static defaultProps = {
    username: '',
  };

  state = { isPanelOpened: false };

  togglePanel = () => {
    this.setState({ isPanelOpened: !this.state.isPanelOpened });
  };

  render() {
    const { username } = this.props;
    const meetText = username ? `Hello, ${username}!` : 'Hello!';
    return (
      <Container position="static" color="primary">
        <Toolbar>
          <LineBlock>
            <IconButton
              onClick={this.togglePanel}
              color="contrast"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Title type="title">Application</Title>
          </LineBlock>
          <LineBlock>
            <MeetText>{meetText}</MeetText>
          </LineBlock>
        </Toolbar>
        <NavigationPanel
          isOpened={this.state.isPanelOpened}
          toggle={this.togglePanel}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  username: state.get('user').get('name'),
});

export default connect(mapStateToProps)(Header);
