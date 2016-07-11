'use strict';

import React from 'react';

require('./main.scss');

class AppleComponent extends React.Component {
  menuClick(e) {
    e.target.className = (e.target.className.indexOf('active') > -1)? '': 'active';
  }
  render() {
    console.log(this.props.ciklum);
    return (
      <footer className="apple">
        <div>
          <nav>
            { this.props.ciklum.footerMenu.map((group) => {
              return (
                <div>
                  <h4 onClick={ this.menuClick }>{ group.header }</h4>
                  <ul>
                    { group.items.map((item) => {
                      return (<li><a href="">{item}</a></li>)
                    }) }
                  </ul>
                </div>
              );
            })}
          </nav>
          <section>
            <p> More ways to shop: Visit an <a href="https://www.apple.com/retail/">Apple Store</a>, <span>call 1-800-MY-APPLE, or <a href="https://locate.apple.com">find a reseller</a></span></p>
            <div>
              <div>
                <p>Copyright © 2016 Apple Inc. All rights reserved.</p>
                <ul>
                  <li><a href="https://apple.com/privacy/privacy-policy/">Privacy Policy</a></li>
                  <li><a href="https://apple.com/legal/internet-services/terms/site.html">Terms of Use</a></li>
                  <li><a href="https://apple.com/us/shop/goto/help/sales_refunds">Sales and Refunds</a></li>
                  <li><a href="https://apple.com/legal/">Legal</a></li>
                  <li><a href="https://apple.com/sitemap/">Site Map</a></li>
                </ul>
              </div>
              <div className="locale">
                <a href=""><span></span>United States</a>

              </div>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

AppleComponent.displayName = 'AppleComponent';

// Uncomment properties you need
// AppleComponent.propTypes = {};
// AppleComponent.defaultProps = {};

export default AppleComponent;
