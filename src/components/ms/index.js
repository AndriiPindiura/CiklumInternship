/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

import React from 'react';
import classNames from 'classnames';
import {
  phonePortrait,
  phoneLandscape,
  tabletPortrait,
  tabletLandscape,
  desktop,
  desktopWide,
  desktopHD,
  desktopMega
}  from '../breakpoints';

require('./main.scss');

let hoverId;
let timer = -1;

class Menu extends React.Component {
  linkClick(e, tag) {
    tag.stopPropagation();
    this.props.actions.setCurrentLink((tag.target.className.indexOf('active') > -1)? { deep: this.props.deep, item: null}: { deep: this.props.deep, item: e});
  }

  divClick(e) {
    e.stopPropagation();
  }

  hoverTimeout(e) {
      if (e == hoverId) {
        this.props.actions.setCurrentLink({ deep: this.props.deep, item: e});
      }
      window.clearTimeout(timer);
  }

  mouseOver(e, tag) {
    tag.stopPropagation();
    tag.preventDefault();
    if ((this.props.breakpoint === tabletLandscape || this.props.breakpoint === desktop
      || this.props.breakpoint === desktopWide || this.props.breakpoint === desktopHD || this.props.breakpoint == desktopMega)
      && this.props.deep > 0)
       {

      hoverId = e;
      timer = window.setTimeout(this.hoverTimeout.bind(this, e), 100);
    }
  }
  render() {
    const linkClass = classNames({
      'active': true
    });
    return (
      <div onClick={this.divClick.bind(this)}>
        <ul>
          {this.props.items.map((item, i) => {
            let key = '';
            for (let char = 0, l = item.caption.length; char < l; char++) {
              key = key + (item.caption.charCodeAt(char) + i);
            }
            key = key.substr(0, 8);
            return (<li key={ key } className={ (item.subItems === undefined)? null: 'dropdown' }>
              <a href="#" key={ key } className={(this.props.currentLink[this.props.deep] == key)? linkClass: null}
                onClick={this.linkClick.bind(this, key)} onMouseOver={ this.mouseOver.bind(this, key) }>{item.caption}</a>
              {(item.subItems != undefined)? <Menu items={item.subItems} deep={ this.props.deep + 1}
                breakpoint={ this.props.breakpoint } currentLink={ this.props.currentLink }
                actions={ this.props.actions }/>: null}
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

class Search extends React.Component {
  searchClick(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <div onClick={ this.searchClick.bind(this) }>
        <input type="search" placeholder="Поушк на веб-сайті Microsoft.com"/>
        <button />
      </div>
    );
  }
}

class MsComponent extends React.Component {
  navClick(e, tag) {
    tag.stopPropagation();
    this.props.ciklumActions.setCurrentLink(null)
    this.props.ciklumActions.setCurrentComponent((tag.target.className.indexOf('active') > -1)? null: e);
  }

  searchComponentClick() {
  }

  render() {
    let menuItems = this.props.ciklum.menu;
    const breakpoint = this.props.ciklum.breakpoint.name;
    if (menuItems[0].caption === 'Вхід') {
      menuItems.splice(0, 1);
    }
    switch (breakpoint){
      case phonePortrait: {
        if (menuItems[0].caption != 'Вхід') {
          menuItems.unshift({ caption: 'Вхід' });
        }
      }
      break;
      default: {

      }
    }
    return (
      <section className="ms" onClick={ this.navClick.bind(this, null) }>
        <div className="logo">
          <a href="http://microsoft.com">
            <img src={require('../../images/ms/microsoft.png')} />
          </a>
          {(breakpoint == tabletLandscape || breakpoint == desktop
            || breakpoint == desktopWide || breakpoint == desktopHD
            || breakpoint == desktopMega )
            ? (<nav onClick={ this.navClick.bind(this, 'menu') }><Menu items={ menuItems } deep={ 0 } breakpoint={ breakpoint } currentLink={ this.props.ciklum.currentLink } actions={ this.props.ciklumActions }/></nav>)
            : null}
        </div>
        <div className="navi">
          <div className="search" onClick={ this.navClick.bind(this, 'search') }>
            {(breakpoint == desktop
              || breakpoint == desktopWide || breakpoint == desktopHD
              || breakpoint == desktopMega )? <Search action={ this.searchComponentClick } />: null}

            <a href="#" className={ (this.props.ciklum.currentComponent === 'search')? 'search-active': '' } onClick={ this.navClick.bind(this, 'search') } />
            {(breakpoint == phonePortrait || breakpoint == phoneLandscape
              || breakpoint == tabletPortrait || breakpoint == tabletLandscape) ? <div><Search action={ this.searchComponentClick } /></div> : null}
          </div>
          <div className="basket">
            <a href="#">
              <img src={require('../../images/ms/basket.jpg')} />
              <span>0</span>
            </a>
          </div>
          {
          (breakpoint == phonePortrait
            || breakpoint == phoneLandscape
            || breakpoint == tabletPortrait )?
            (<nav>
              <a href="#" className={ (this.props.ciklum.currentComponent === 'menu')? 'menu-active': '' }
             onClick={ this.navClick.bind(this, 'menu') }/>
              <Menu items={ menuItems } deep={ 0 } breakpoint={ breakpoint } currentLink={ this.props.ciklum.currentLink } actions={ this.props.ciklumActions }/>
             </nav>): null}
          {(breakpoint == phonePortrait)? null: <a href="http://login.live.com/">Вхід</a>}

        </div>
      </section>
    );
  }
}

MsComponent.displayName = 'MsComponent';

// Uncomment properties you need
// MsComponent.propTypes = {};
// MsComponent.defaultProps = {};

export default MsComponent;
