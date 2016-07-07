// require('normalize.css/normalize.css');
// require('../theme/reset.scss');
//require('styles/App.css');

import React from 'react';
import * as breakpoints from './breakpoints';
import Microsoft from './ms';
import Dropbox from './dropbox';


class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      breakpoint: breakpoints.currentBreakpoint()
    }
  }
  
  updateDimensions() {
    const bp = breakpoints.currentBreakpoint();
    this.setState({ breakpoint: bp});
    // console.log('state');
  }


  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    // console.log(this.state.breakpoint);
    return (
      <div>
        <Microsoft breakpoint={ this.state.breakpoint.name } />
        <Dropbox />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
