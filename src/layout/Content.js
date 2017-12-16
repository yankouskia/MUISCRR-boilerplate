import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div``;

export default class Content extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  render() {
    return <Container>{this.props.children}</Container>;
  }
}
