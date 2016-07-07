// require('normalize.css/normalize.css');
// require('../theme/reset.scss');
//require('styles/App.css');

import React from 'react';
import Microsoft from './ms';
import Dropbox from './dropbox';


class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Microsoft />
        <Dropbox />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
