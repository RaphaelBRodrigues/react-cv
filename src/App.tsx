import React from 'react';
import { Provider } from 'react-redux';
import Header from './containers/Header';
import HomePage from './pages/Home';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
