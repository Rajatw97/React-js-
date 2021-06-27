import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const composedEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


ReactDOM.render(<Provider store={createStore(reducers,composedEnhancers(applyMiddleware(reduxThunk)))}>
  <App />
</Provider>,
  document.getElementById('root')
);


