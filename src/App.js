import React from 'react';

import './assets/styles/global.css';

import Footer from './blocks/Footer';
import PageHeader from './blocks/PageHeader';
import Content from './Content';



function App() {
  return (
    <div className="App">
      <PageHeader />

      <Content />

      <Footer />

    </div>
  );
}

export default App;
