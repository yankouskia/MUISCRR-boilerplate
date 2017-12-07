import 'babel-polyfill';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';

import App from './components/App';
import configureStore from './store/configure';
import materialUiTheme from './theme/config';

import './theme/global';

OfflinePluginRuntime.install();
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={materialUiTheme}>
      <Router>
        <Route component={App} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
