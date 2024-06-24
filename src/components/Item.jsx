import { React } from "react";
import Counter from './Counter';

const Item = (props) => {
  const {
    id,
    itemName,
    setItems
  } = props;

  const handleRemoveItem = (id) => {
    setItems( prevItems => prevItems.filter( i => i.id !== id))
  }

  return (
    <div 
      id={`${id}`}
      className='item'>
      <button 
        className='remove-item' 
        onClick={handleRemoveItem}
      />
      <span className='item-name'>{itemName}</span>
      <Counter />
    </div>
  )
}
export default Item;
