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
import HiddenFeatures from './pages/HiddenFeatures';

import configureStore from './store/configure';
import materialUiTheme from './theme/config';

import './theme/global';

OfflinePluginRuntime.install();
injectTapEventPlugin();

const store = configureStore();

const Routes = () => (
  <div>
    <Route component={HiddenFeatures} />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/feedback" component={Feedback} />
    </Switch>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={materialUiTheme}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
