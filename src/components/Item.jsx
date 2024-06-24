import { React } from "react";
import Counter from './Counter';

const Item = () => {
  return (
    <div className='item'>
      <button className='remove-item' />
      <span className='item-name'>CPU</span>
      <Counter />
    </div>
  )
}
export default Item;
