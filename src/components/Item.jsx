import { React } from "react";
import Counter from './Counter';

const Item = (props) => {
  const {
    id,
    itemName,
    itemQuantity
  } = props;

  return (
    <div 
      id={`${id}`}
      className='item'>
      <button className='remove-item' />
      <span className='item-name'>{itemName}</span>
      <Counter
        itemQuantity={itemQuantity}
      />
    </div>
  )
}
export default Item;
