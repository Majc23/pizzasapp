import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const App = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}

