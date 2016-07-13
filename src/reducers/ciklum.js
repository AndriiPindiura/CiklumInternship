/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import * as breakpoints from '../components/breakpoints';
import { BREAKPOINT, CIKLUM_SET_LINK, CIKLUM_SET_ACTIVE_COMPONENT, CIKLUM_SET_INPUT_CHANGE } from  '../actions/const';

const initialState = {
  breakpoint: breakpoints.currentBreakpoint(),
  currentLink: [{}],
  currentComponent: null,
  inputsChanged: {},
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
    
  ],
  footerMenu: [
    {
      header: 'Shop and Learn',
      items: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'iTunes', 'iPod', 'Accessories', 'Gift Cards']
    },
    {
      header: 'Apple Store',
      items: ['Find a Store', 'Genius Bar', 'Workshops and Learning', 'Youth Programs', 'Apple Store App', 'Refurbished', 'Financing', 'Reuse and Recycling', 'Order Status', 'Shopping Help']
    },
    {
      header: 'For Education',
      items: ['Apple and Education', 'Shop for College']
    },
    {
      header: 'For Business',
      items: ['Apple and Business', 'Shop for Business']
    },
    {
      header: 'Account',
      items: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      header: 'Apple Values',
      items: ['Environment', 'Supplier Responsibility', 'Accessibility', 'Privacy', 'Inclusion and Diversity', 'Education']
    },
    {
      header: 'About Apple',
      items: ['Apple Info', 'Newsroom', 'Job Opportunities', 'Investors', 'Events', 'Contact Apple']
    }
  ]
};

export default function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {
    case BREAKPOINT: {
      return Object.assign({}, state, { breakpoint: action.parameter });
    }

    case CIKLUM_SET_LINK: {
      let currentLink = state.currentLink.map((item) => {
        return item;
      });
      if (action.parameter === null) {
        for (let i = 0, l = currentLink.length; i < l; i++) {
            currentLink[i] = -1;
        }
      }
      else {
        currentLink[action.parameter.deep] = action.parameter.item;
      }
      return Object.assign({}, state, { currentLink: currentLink });
    }

    case CIKLUM_SET_INPUT_CHANGE: {
      let input = state.inputsChanged;
      input[action.parameter] = true;
      return Object.assign({}, state, { inputsChanged: input });
    }

    case CIKLUM_SET_ACTIVE_COMPONENT: {
      return Object.assign({}, state, { currentComponent: action.parameter });
    }
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
