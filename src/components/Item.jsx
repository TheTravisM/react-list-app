import { React } from "react";
import Counter from './Counter';

const Item = (props) => {
  const {
    itemName,
    itemIndex,
    handleRemoveItem
  } = props;

  return (
  <div 
      id={`${itemIndex}`}
      className='item'>
      <button 
        className='remove-item' 
        onClick={() => handleRemoveItem(itemIndex)}
      />
      <span className='item-name'>
        {itemName}
      </span>
      <Counter />
    </div>
  )
}
export default Item;
