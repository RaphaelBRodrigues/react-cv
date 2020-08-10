import React from 'react';

import './assets/styles/global.css';

import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import Landing from './components/Landing';
// import ToggleChat from './components/ChatBot';
// import Terminal from './components/Terminal';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <main id="content">

      <Landing />
      {/* <Terminal /> */}
      {/* <ToggleChat /> */}
      </main>

    </div>
  );
}

export default App;
