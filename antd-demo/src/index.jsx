import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {configureStore} from '@reduxjs/toolkit';
import {pointsData} from './store/reducer';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {createAPI} from './services/api';
import {fetchLoadDataAction} from './store/api-actions';

const api = createAPI();

const store = configureStore({
  reducer: pointsData,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware ({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchLoadDataAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
