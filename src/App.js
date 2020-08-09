import React from 'react';

import './assets/styles/global.css';

import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import ToggleChat from './components/ChatBot';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <ToggleChat />

    </div>
  );
}

export default App;
