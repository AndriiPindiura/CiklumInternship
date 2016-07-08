'use strict';

import React from 'react';
// import {
//   phonePortrait,
//   phoneLandscape,
//   tabletPortrait,
//   tabletLandscape,
//   desktop,
//   desktopWide,
//   desktopHD,
//   desktopMega
// }  from '../breakpoints';


require('./main.scss');

class DropboxComponent extends React.Component {
  render() {
    return (
      <section className="dropbox">
        <div className="hero"></div>
        <div>
          <h1>Безопасный доступ, синхронизация и совместная работа</h1>
          <h2>Хранение и безопасный доступ к данным — аккаунты Dropbox Business пользуются доверием у системных администраторов и нравятся пользователям.</h2>
          <div>
            <a href="https://www.dropbox.com/business/try">Попробуйте бесплатную 30-дневную ознакомительную версию</a>
            <span>или <a href="https://www.dropbox.com/business/buy">купите прямо сейчас</a></span>
          </div>
        </div>
      </section>
    );
  }
}

DropboxComponent.displayName = 'DropboxComponent';

// Uncomment properties you need
// DropboxComponent.propTypes = {};
// DropboxComponent.defaultProps = {};

export default DropboxComponent;
