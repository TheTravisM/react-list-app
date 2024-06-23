import { createRoot } from 'react-dom/client';

const title = "First element";
const desc = 'Created recat node and rendered it into the DOM'
const mainTitleId = "main-title";
const name = "Jackie";


const element = (
  <>
    <h1 id={mainTitleId}>{title}</h1>
    <h2>{name}</h2>
    <p className='main–description'>{desc}</p>
    <input value={10*20}/>
  </>
);

const root = createRoot(document.getElementById('root'));

root.render(element);