import { React } from "react";
import Counter from './Counter';

const Item = (props) => {
  const {
    name,
    index,
    handleRemoveItem
  } = props;

  return (
  <div 
      id={`${index}`}
      className='item'>
      <button 
        className='remove-item' 
        onClick={() => handleRemoveItem(index)}
      />
      <span className='item-name'>
        {name}
      </span>
      <Counter />
    </div>
  )
}
export default Item;
