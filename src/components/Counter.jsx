import { React } from "react";

const Counter = () => {
  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment'>+</button>
      <button className='decrement'>-</button>
      <span className='quantity-amount'>10</span>
    </div>
  )
}

export default Counter;
