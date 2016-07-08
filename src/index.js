import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
require('normalize.css/normalize.css');
require('./theme/fonts.scss');
// require('./theme/reset.scss');
// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
