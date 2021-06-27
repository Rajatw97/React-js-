import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import Reducers from './reducers';

ReactDOM.render(<Provider store={createStore(Reducers,applyMiddleware(thunk))}>
                  <App />
                </Provider>,document.querySelector("#root"));