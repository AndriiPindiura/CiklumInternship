/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

import React from 'react';
import * as breakpoints from '../breakpoints';

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
  render() {
    return (
      <div onClick={this.divClick.bind(this)}>
        <ul>
          {this.props.items.map((item, i) => {
            let key = '';
            for (let char = 0, l = item.caption.length; char < l; char++) {
              key = key + (item.caption.charCodeAt(char) + i);
            }
            key = key.substr(0, 8);
            return (<li key={ key } className={ (item.subItems === undefined)?null:'dropdown' }>
              <a href="#" key={ key } className={(this.state.currentLink == key)?'active':null} onClick={this.linkClick.bind(this, key)}>{item.caption}</a>
              {(item.subItems != undefined)? <Menu items={item.subItems} />: null}
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return (
      <div>
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
      phonePortrait: breakpoints.isBreakpoint(breakpoints.phonePortrait),
      phoneLandscape: breakpoints.isBreakpoint(breakpoints.phoneLandscape),
      tabletPortrait: breakpoints.isBreakpoint(breakpoints.tabletPortrait),
      tabletLandscape: breakpoints.isBreakpoint(breakpoints.tabletLandscape),
      desktop: breakpoints.isBreakpoint(breakpoints.desktop),
      desktopWide: breakpoints.isBreakpoint(breakpoints.desktopWide),
      desktopHD: breakpoints.isBreakpoint(breakpoints.desktopHD),
      desktopMega: breakpoints.isBreakpoint(breakpoints.desktopMega),
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

  updateDimensions() {
    const breakpoint = {
      phonePortrait: breakpoints.isBreakpoint(breakpoints.phonePortrait),
      phoneLandscape: breakpoints.isBreakpoint(breakpoints.phoneLandscape),
      tabletPortrait: breakpoints.isBreakpoint(breakpoints.tabletPortrait),
      tabletLandscape: breakpoints.isBreakpoint(breakpoints.tabletLandscape),
      desktop: breakpoints.isBreakpoint(breakpoints.desktop),
      desktopWide: breakpoints.isBreakpoint(breakpoints.desktopWide),
      desktopHD: breakpoints.isBreakpoint(breakpoints.desktopHD),
      desktopMega: breakpoints.isBreakpoint(breakpoints.desktopMega)
    }
    // console.log(breakpoint);
    
    this.setState(breakpoint);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  navClick(e, tag) {
    tag.stopPropagation();
    console.log(tag.target.className, e);
    console.log(tag.target);
    console.log(tag);
    this.setState({ currentLink: (tag.target.className.indexOf('active') > -1)? '-1': e});
    //e.target.className = (e.target.className === 'menu-active')? '': 'menu-active';
  }

  render() {
    return (
      <section className="ms">
        <div className="logo">
          <a href="http://microsoft.com">
            <img src={require('../../images/ms/microsoft.png')} />
          </a>
          {(this.state.tabletLandscape || this.state.desktop || this.state.desktopWide || this.state.desktopHD || this.state.desktopMega )? (<nav onClick={ this.navClick.bind(this, 'menu') }><Menu items={ this.state.menu } /></nav>): null}
        </div>
        <div className="navi">
          <div className="search">
            {(this.state.tabletLandscape || this.state.desktop || this.state.desktopWide || this.state.desktopHD || this.state.desktopMega )? <Search />: null}
            
            <a href="#" className={ (this.state.currentLink === 'search')? 'search-active': '' } onClick={ this.navClick.bind(this, 'search') } />
            {(this.state.phonePortrait || this.state.phonePortrait || this.state.tabletPortrait || this.state.tabletLandscape) ? <div><Search /></div> : null}
          </div>
          <div className="basket">
            <a href="#">
              <img src={require('../../images/ms/basket.jpg')} />
              <span>0</span>
            </a>
          </div>
          {(this.state.phonePortrait
            || this.state.phoneLandscape
            || this.state.tabletPortrait )?
            (<nav>
              <a href="#" className={ (this.state.currentLink === 'menu')? 'menu-active': '' }
             onClick={ this.navClick.bind(this, 'menu') }/>
              <Menu items={ this.state.menu } />
             </nav>): null}
          {(this.state.phonePortrait)? null: <a href="">Вхід</a>}
          
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
