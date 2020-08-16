import React from 'react';

import './assets/styles/global.css';

import Footer from './blocks/Footer';
import PageHeader from './blocks/PageHeader';
import Landing from './blocks/Landing';
import Resume from './blocks/Resume';
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
      <Resume />
      <Footer />
      </main>

    </div>
  );
}

export default App;
