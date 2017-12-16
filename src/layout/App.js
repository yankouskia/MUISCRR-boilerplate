import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container as ContentContainer } from './Content';
import background from '../statics/background.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  height: 100vh;
  background: url(${background}) no-repeat center center;
  background-size: cover;

  & ${ContentContainer} {
    flex-grow: 1;
  }
`;

export default class App extends React.PureComponent {
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
