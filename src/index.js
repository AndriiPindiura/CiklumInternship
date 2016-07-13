import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

require('normalize.css/normalize.css');
require('./theme/fonts.scss');
require('es6-promise').polyfill();
// require('./theme/reset.scss');

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
