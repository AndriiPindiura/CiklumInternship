'use strict';

import React from 'react';

require('./main.scss');

class AppleComponent extends React.Component {
  render() {
    return (
      <div className="apple-component">
        Please edit src/components///AppleComponent.js to update this component!
      </div>
    );
  }
}

AppleComponent.displayName = 'AppleComponent';

// Uncomment properties you need
// AppleComponent.propTypes = {};
// AppleComponent.defaultProps = {};

export default AppleComponent;
