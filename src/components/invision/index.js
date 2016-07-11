'use strict';

import React from 'react';
import classNames from 'classnames';


require('./main.scss');

class InvisionComponent extends React.Component {
  inputChange(e, input) {
    const currentClasses = input.target.className;
    const mailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (currentClasses.replace('error', '').trim() == 'email') {
      if (mailRegexp.test(input.target.value)) {
        input.target.className = classNames(currentClasses.replace('error', '').trim());
      }
      else {
        if (currentClasses.indexOf('error') < 0) {
          input.target.className = classNames(currentClasses, 'error');
        }
      }
    }
    this.props.ciklumActions.setInputChanged(e);
  }
  validateInput(e, input) {
    const currentClasses = input.target.className;
    if (this.props.ciklum.inputsChanged[e]) {
      switch (currentClasses.replace('error', '').trim()) {
        case 'login': {
          if (input.target.value.trim().length <= 0) {
            if (currentClasses.indexOf('error') == -1) {
              input.target.className = classNames(currentClasses, 'error');
            }
          } else {
            input.target.className = classNames(currentClasses.replace('error', '').trim());
          }
          return;
        }

        case 'email': {
          const mailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (mailRegexp.test(input.target.value))
          {
            input.target.className = classNames(currentClasses.replace('error', '').trim());
          }
          else {
            if (currentClasses.indexOf('error') < 0) {
              input.target.className = classNames(currentClasses, 'error');
            }
          }
          return;
        }

        case 'password': {
          if (input.target.value.trim().length <= 0) {
            if (currentClasses.indexOf('error') < 0) {
              input.target.className = classNames(currentClasses, 'error');
            }
          } else {
            const passwordRegexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (passwordRegexp.test(input.target.value)) {
              input.target.className = classNames(currentClasses.replace('error', '').trim());
            }
            else {
              if (currentClasses.indexOf('error') < 0) {
                input.target.className = classNames(currentClasses, 'error');
              }
            }
          }
          return;
        }

      }
    }
  }
  render() {
    return (
      <section className="invision">
        <div>
          <h2>Join over 2 million designers already using InVision. Get InVision <strong>free</strong> forever!</h2>
          <form>
            <input className="login" type="text" placeholder="Your Name" onChange={ this.inputChange.bind(this, 'login') } onBlur={ this.validateInput.bind(this, 'login') }/>
            <input className="email" type="email" placeholder="Email Address" onChange={ this.inputChange.bind(this, 'mail') } onBlur={ this.validateInput.bind(this, 'mail') }/>
            <input className="password" type="password" placeholder="Create a Password" onChange={ this.inputChange.bind(this, 'password') } onBlur={ this.validateInput.bind(this, 'password') }/>
            <button>Get Started — Free Forever!</button>
          </form>
          <p>By clicking "Get Started — Free Forever!" I agree to InVision's <a href="https://www.invisionapp.com/terms">Terms of Service.</a></p>        </div>
      </section>
    );
  }
}

InvisionComponent.displayName = 'InvisionComponent';

// Uncomment properties you need
// InvisionComponent.propTypes = {};
// InvisionComponent.defaultProps = {};

export default InvisionComponent;
