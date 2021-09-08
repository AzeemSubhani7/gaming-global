import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Libraries
import { store, persistor } from './redux/reducer';
import { Provider } from 'react-redux'

// Redux Persistor for local storage
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  ,
  document.getElementById('root')
);
