'use strict';

import React from 'react';

require('./main.scss');

class OculusComponent extends React.Component {
  render() {
    return (
      <section className="oculus">
        <ul>
          <li>
            <a href="">
              <div className="eve">
              <div>
                <h4>Featured Content</h4>
                <h3>EVE: Valkyrie</h3>
              </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="lucky">
              <div>
                <h4>Included with all Rift Purchases</h4>
                <h3>Lucky's Tale</h3>
              </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="oculus">
              <div>
                <h4>Featured Story</h4>
                <h3>Over 30 Full Games Launching with Oculus Touch this Year</h3>
              </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

OculusComponent.displayName = 'OculusComponent';

// Uncomment properties you need
// OculusComponent.propTypes = {};
// OculusComponent.defaultProps = {};

export default OculusComponent;
