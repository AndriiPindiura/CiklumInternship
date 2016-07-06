/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

import React from 'react';
import * as breakpoints from '../breakpoints';

require('./main.scss');

// class Menu extends React.Component {
//   render () {
//     return (
//         <nav>
//           <ul>
//             <li><a href="">Вхід</a></li>
//             <li>
//               <a href="">Магазин</a>
//               <ul>
//                 <li><a href="">Домашня сторінка Магазину</a></li>
//                 <li><a href="">Office</a>
//                   <ul>
//                     <li><a href="">Всі версії Office</a></li>
//                     <li><a href="">Програмні комплекси Office</a></li>
//                     <li><a href="">Усі програми Office</a></li>
//                     <li><a href="">Office для вашого Mac</a></li>
//                     <li><a href="">Office 365</a></li>
//                     <li><a href="">Порівняння програмних комплексів Office</a></li>
//                     <li><a href="">Мовні пакети Office</a></li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="">Windows</a>
//                   <ul>
//                     <li><a href="">Windows 10 Home</a></li>
//                     <li><a href="">Windows 10 Pro</a></li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a href="">Продукти</a>
//               <ul>
//                 <li>
//                   <a href="">Програмне забезпечення та служби</a>
//                   <ul>
//                     <li><a href="">Windows</a></li>
//                     <li><a href="">Office</a></li>
//                     <li><a href="">Безкоштовні завантаження та безпека</a></li>
//                     <li><a href="">Internet Explorer</a></li>
//                     <li><a href="">Microsoft Edge</a></li>
//                     <li><a href="">Skype</a></li>
//                     <li><a href="">OneNote</a></li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="">Пристрої та Xbox</a>
//                   <ul>
//                     <li><a href="">Комп’ютерні аксесуари</a></li>
//                     <li><a href="">Microsoft Lumia</a></li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="">Для бізнесу</a>
//                   <ul>
//                     <li><a href="">Microsoft Azure</a></li>
//                     <li><a href="">Microsoft Dynamics</a></li>
//                     <li><a href="">Windows для бізнесу</a></li>
//                     <li><a href="">Office для бізнесу</a></li>
//                     <li><a href="">Skype для бізнесу</a></li>
//                     <li><a href="">Корпоративні рішення</a></li>
//                     <li><a href="">Рішення для малого бізнесу</a></li>
//                     <li><a href="">Знайти постачальника рішень</a></li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="">Для IT-фахівців і розробників</a>
//                   <ul>
//                     <li><a href="">Розробка програм Windows</a></li>
//                     <li><a href="">Microsoft Azure</a></li>
//                     <li><a href="">MSDN</a></li>
//                     <li><a href="">Visual Studio</a></li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="">Освіта</a>
//                   <ul>
//                     <li><a href="">Освіта</a></li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a href="">Підтримка</a>
//             </li>
//           </ul>
//         </nav>

//     );
//   }
// }


class Menu extends React.Component {
  click(e) {
    console.log(e.target);
    e.target.className = 'active';
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => {
          return (<li key={ Date.now().toString() + i }>
            <a href="#" onClick={this.click}>{item.caption}</a>
            {(item.subItems != undefined)? <Menu items={item.subItems} />: null}
          </li>)
        })}
      </ul>
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

  render() {
    // console.log(window.innerWidth);
    // console.log(breakpoints.isBreakpoint(breakpoints.phonePortrait))
    // console.log(this.state.menu);
    return (
      <section className="ms">
        <div className="logo">
          <img src={require('../../images/ms/microsoft.png')} />
          {(this.state.tabletLandscape || this.state.desktop || this.state.desktopWide || this.state.desktopHD || this.state.desktopMega )? (<nav><Menu items={ this.state.menu } /></nav>): null}
        </div>
        <div className="navi">
          <div className="search">
            {(this.state.tabletLandscape || this.state.desktop || this.state.desktopWide || this.state.desktopHD || this.state.desktopMega )? <input type="text" />: null}
            
            <button></button>
          </div>
          <div className="basket">
            <img src={require('../../images/ms/basket.jpg')} />
            <span>0</span>
          </div>
          {(this.state.phonePortrait || this.state.phoneLandscape || this.state.tabletPortrait )? (<nav><Menu items={ this.state.menu } /></nav>): null}
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
