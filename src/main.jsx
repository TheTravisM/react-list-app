import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import Header from './components/Header';
import Item from './components/Item';

const App = () => {
  return (
    <div className='react-list'>
      <Header />
      <Item />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);