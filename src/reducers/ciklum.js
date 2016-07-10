/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import * as breakpoints from '../components/breakpoints';
import { BREAKPOINT, CIKLUM_SET_LINK, CIKLUM_SET_ACTIVE_COMPONENT, CIKLUM_SET_INPUT_CHANGE } from  '../actions/const';

const initialState = {
  // breakpoint: { name: 'phonePortrait', min: 0, max: 414 },
  breakpoint: breakpoints.currentBreakpoint(),
  currentLink: [],
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
    
  ]
};

export default function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    case BREAKPOINT: {
      // console.log(action.parameter);
      return Object.assign({}, state, { breakpoint: action.parameter });
    }

    case CIKLUM_SET_LINK: {
      // console.log(action.parameter);
      let currentLink;
      if (action.parameter === null) {
        currentLink = state.currentLink.map((item) => {
          return item = -1;
        });
      }
      else {
        currentLink = state.currentLink;
        currentLink[action.parameter.deep] = action.parameter.item;
      }
      // console.log(currentLink);
      return Object.assign({}, state, { currentLink: currentLink });
    }

    case CIKLUM_SET_INPUT_CHANGE: {
      let input = state.inputsChanged;
      // console.log(action.parameter);
      input[action.parameter] = true;
      // console.log(input);
      return Object.assign({}, state, { inputsChanged: input });
    }

    case CIKLUM_SET_ACTIVE_COMPONENT: {
      // console.log(action.parameter);
      // return state;
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
