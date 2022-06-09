import React from 'react';
import './App.scss';
import './fonts.scss'
import Header from './components/Header/Header';
import Brands from './components/Brands/Brands';

function App() {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Brands />
      </main>
    </div>
  );
}

export default App;
