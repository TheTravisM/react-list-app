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

  useEffect(() => {
    setHeaderTitle("Micro Center List");
    setHeaderId("Micro Center List");
    setItemTotal(initalList.length);
  }, []);

  useEffect(() => {}, []);

  return (
    <main className="react-list">
      <Header 
        id={headerId} 
        title={headerTitle} 
        itemTotal={itemTotal} 
      />
      {initalList.map((item, index) => (
        <Item
          key={index}
          id={index}
          itemName={item.name} 
          itemQuantity={item.quantity}
        />
      ))}
    </main>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App initalList={itemsData.items}/>
  </StrictMode>
);