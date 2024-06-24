import { React } from "react";

const Counter = (props) => {
  const {
    itemQuantity
  } = props;

  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment'>+</button>
      <button className='decrement'>-</button>
      <span className='quantity-amount'>
        {itemQuantity}
      </span>
    </div>
  )
}

export default Counter;
