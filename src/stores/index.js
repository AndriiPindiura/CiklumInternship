const redux = require('redux');
const reducers = require('../reducers');
import createLogger from 'redux-logger';

export default function(initialState) {
  const logger = createLogger();
  const store = redux.createStore(reducers, initialState, redux.compose(redux.applyMiddleware(logger),
		window.devToolsExtension ? window.devToolsExtension() : f => f));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
