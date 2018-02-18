import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
