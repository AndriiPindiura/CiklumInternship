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

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLink: null
    }
  }
  linkClick(e, tag) {
    tag.stopPropagation();
    this.setState({ currentLink: (tag.target.className === 'active')? '-1': e });
  }
  divClick() {
    this.setState({ currentLink: '-1' });
  }
  mouseOver(e, tag) {
    tag.stopPropagation();
    // this.setState({ currentLink: (tag.target.className === 'active')? '-1': e });
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
              <a href="#" key={ key } className={(this.state.currentLink == key)? linkClass: null} onClick={this.linkClick.bind(this, key)} onMouseOver={ this.mouseOver.bind(this, key) }>{item.caption}</a>
              {(item.subItems != undefined)? <Menu items={item.subItems} />: null}
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
    //this.props.action(e);
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
  constructor(props) {
    super(props);
    this.state = {
      currentLink: null,
      menu: [
        { caption: 'Магазин', subItems: [
          { caption: 'Домашня сторінка Магазину'},
          { caption: 'Office', subItems: [
            { caption: 'Всі версії Office'},
            { caption: 'Програмні комплекси Office' },
            { caption: 'Усі програми Office' },
            { caption: 'Office для вашого Mac' },
            { caption: 'Office 365' },
            { caption: 'Порівняння програмних комплексів Office' },
            { caption: 'Мовні пакети Office' }
          ]},
          { caption: 'Windows', subItems: [
            { caption: 'Windows 10 Home' },
            { caption: 'Windows 10 Pro' }
          ]}
        ]},
        { caption: 'Продукти', subItems: [
          { caption: 'Програмне забезпечення та служби', subItems: [
            { caption: 'Windows' },
            { caption: 'Office' },
            { caption: 'Безкоштовні завантаження та безпека' },
            { caption: 'Internet Explorer' },
            { caption: 'Microsoft Edge' },
            { caption: 'Skype' },
            { caption: 'OneNote' }
          ]},
          { caption: 'Пристрої та Xbox', subItems: [
            { caption: 'Комп’ютерні аксесуари' },
            { caption: 'Microsoft Lumia' }
          ]},
          { caption: 'Для бізнесу', subItems: [
            { caption: 'Microsoft Azure' },
            { caption: 'Microsoft Dynamics' },
            { caption: 'Windows для бізнесу' },
            { caption: 'Office для бізнесу' },
            { caption: 'Skype для бізнесу' },
            { caption: 'Корпоративні рішення' },
            { caption: 'Рішення для малого бізнесу' },
            { caption: 'Знайти постачальника рішень' }
          ]},
          { caption: 'Для IT-фахівців і розробників', subItems: [
            { caption: 'Розробка програм Windows' },
            { caption: 'Microsoft Azur' },
            { caption: 'MSDN' },
            { caption: 'Visual Studio' }
          ]},
          { caption: 'Освіта', subItems: [
            { caption: 'Освіта' }
          ]}
        ]},
        { caption: 'Підтримка' }
        
      ]
    }
  }

  navClick(e, tag) {
    tag.stopPropagation();
    this.setState({ currentLink: (tag.target.className.indexOf('active') > -1)? '-1': e});
  }

  searchComponentClick(e) {
    // console.log(e);
  }

  render() {
    let menuItems = this.state.menu;
    if (menuItems[0].caption === 'Вхід') {
      menuItems.splice(0, 1);
    }
    switch (this.props.breakpoint){
      case phonePortrait: {
        if (menuItems[0].caption != 'Вхід') {
          menuItems.unshift({ caption: 'Вхід' });
        }
      }
      break;
      case phoneLandscape: {
      }
      break;
      case tabletPortrait: {

      }
      break;
      case tabletLandscape: {

      }
      break;
      case desktop: {

      }
      break;
      case desktopWide: {

      }
      break;
      case desktopHD: {

      }
      break;
      case desktopMega: {

      }
      break;


      default: {

      }
    }
    return (
      <section className="ms" onClick={ this.navClick.bind(this, '-1')} >
        <div className="logo">
          <a href="http://microsoft.com">
            <img src={require('../../images/ms/microsoft.png')} />
          </a>
          {(this.props.breakpoint == tabletLandscape || this.props.breakpoint == desktop || this.props.breakpoint == desktopWide || this.props.breakpoint == desktopHD || this.props.breakpoint == desktopMega )? (<nav onClick={ this.navClick.bind(this, 'menu') }><Menu items={ menuItems } /></nav>): null}
        </div>
        <div className="navi">
          <div className="search">
            {(this.props.breakpoint == tabletLandscape || this.props.breakpoint == desktop || this.props.breakpoint == desktopWide || this.props.breakpoint == desktopHD || this.props.breakpoint == desktopMega )? <Search action={ this.searchComponentClick } />: null}
            
            <a href="#" className={ (this.state.currentLink === 'search')? 'search-active': '' } onClick={ this.navClick.bind(this, 'search') } />
            {(this.props.breakpoint == phonePortrait || this.props.breakpoint == phoneLandscape || this.props.breakpoint == tabletPortrait) ? <div><Search action={ this.searchComponentClick } /></div> : null}
          </div>
          <div className="basket">
            <a href="#">
              <img src={require('../../images/ms/basket.jpg')} />
              <span>0</span>
            </a>
          </div>
          {
          (this.props.breakpoint == phonePortrait
            || this.props.breakpoint == phoneLandscape
            || this.props.breakpoint == tabletPortrait )?
            (<nav>
              <a href="#" className={ (this.state.currentLink === 'menu')? 'menu-active': '' }
             onClick={ this.navClick.bind(this, 'menu') }/>
              <Menu items={ menuItems } />
             </nav>): null}
          {(this.props.breakpoint == phonePortrait)? null: <a href="">Вхід</a>}
          
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
