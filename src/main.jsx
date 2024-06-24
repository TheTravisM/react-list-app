import { createRoot } from 'react-dom/client';
import React, { StrictMode, useEffect, useState } from 'react';
import Header from './components/Header';
import Item from './components/Item';
import itemsData from './data/itemsData';

const App = (props) => {
  const {
    initalList
  } = props
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerId, setHeaderId] = useState("");
  const [itemTotal, setItemTotal] = useState(0);
  const [items, setItems] = useState(itemsData.items);

  useEffect(() => {
    setHeaderTitle("Micro Center List");
    setHeaderId("Micro Center List");
    setItemTotal(items.length);
  }, []);

  useEffect(() => {}, []);

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
          id={index}
          itemName={item.name}
          setItems={setItems}
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