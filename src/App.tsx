import React from 'react';
import { Provider } from 'react-redux';
import Header from './containers/Header';
import { Home } from '@Pages';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
