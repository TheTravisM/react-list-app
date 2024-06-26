import { createRoot } from 'react-dom/client';
import React, { StrictMode, useEffect, useState } from 'react';
import Header from './components/Header';
import Item from './components/Item';
//import itemsData from './data/itemsData.json';
import appData from './data/appData.json';

const App = (props) => {
  const { } = props
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerId, setHeaderId] = useState("");
  const [itemTotal, setItemTotal] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setHeaderTitle(appData.header.title);
    setHeaderId(appData.header.id);
    setItems(appData.items);
    setItemTotal(appData.items.length);
  }, []);

  useEffect(() => {
    setItemTotal(appData.items.length);
  }, [items]);

  const handleRemoveItem = (index) => {
    setItems(prevItems => prevItems.filter((_, item) => item !== index));
  };

  return (
    <main className="react-list">
      <Header 
        id={headerId} 
        title={headerTitle} 
        itemTotal={itemTotal} 
      />
      {items.map((item, index) => (
        <Item
          key={index}
          itemIndex={index}
          itemName={item.name}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </main>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);