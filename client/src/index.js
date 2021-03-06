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
import { composeWithDevTools } from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css';
import { ActionCableProvider } from 'react-actioncable-provider'


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <ActionCableProvider url='ws://localhost:3001/cable'>
        <App/>
      </ActionCableProvider>
    </Provider>
  </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
