import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// applyMiddleware function is how to connect our middleware like thunk to redux.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Below is the code in hooking up middleware (thunk) into our Redux Store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);