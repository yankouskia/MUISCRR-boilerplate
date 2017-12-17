import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserDialog from '../components/UserDialog';
import { SAVE_USER_NAME } from '../constants/actions';

class HiddenFeatures extends React.PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    setName: PropTypes.func.isRequired,
  };

  render() {
    const { isOpened, setName } = this.props;

    return <UserDialog isOpened={isOpened} setName={setName} />;
  }
}

const mapStateToProps = state => ({
  isOpened: !!(
    state.get('global').get('isLoaded') && !state.get('user').get('name')
  ),
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch({ payload: name, type: SAVE_USER_NAME }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HiddenFeatures);
