import 'babel-polyfill';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';

import Main from './pages/Main';
import Feedback from './pages/Feedback';
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
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
