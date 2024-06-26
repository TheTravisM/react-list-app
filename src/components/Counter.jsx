import React, { useState } from 'react';

const Counter = (props) => {
  const [itemQuantity, setQuantity]  = useState(0);

  const increaseQty = () => {
    setQuantity( prevQuantity => prevQuantity + 1);
  };

  const decreaseQty = () => {
    if (itemQuantity > 0 ){
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button 
        className='increment'
        onClick={increaseQty}>
          +
        </button>
      <button 
        className='decrement'
        onClick={decreaseQty}>
          -
      </button>
      <span className='quantity-amount'>
        {itemQuantity}
      </span>
    </div>
  )
}

export default Counter;
