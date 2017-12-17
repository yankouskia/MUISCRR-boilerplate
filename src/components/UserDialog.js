import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';

const TextInput = styled(TextField)`
  && {
    width: 100%;
  }
`;

const Transition = props => <Slide direction="up" {...props} />;

export default class UserDialog extends React.PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    setName: PropTypes.func.isRequired,
  };

  state = { name: '' };

  onSetName = () => {
    const { name } = this.state;
    this.props.setName(name);
  };

  onChangeName = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  render() {
    const { isOpened } = this.props;
    return (
      <Dialog
        open={isOpened}
        transition={Transition}
        keepMounted
        onRequestClose={this.onSetName}
      >
        <DialogTitle>First time here..?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            So... Nice to meet you! How could I call you in the future?
          </DialogContentText>
          <TextInput
            id="name"
            label="Name"
            margin="normal"
            value={this.state.name}
            onChange={this.onChangeName}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.onSetName}
            color="primary"
            disabled={!this.state.name}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
