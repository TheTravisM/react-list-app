import { React } from "react";

const Header = (props) => {
  const {} = props;

  const title = "First element";
  const desc = "Created recat node and rendered it into the DOM";
  const mainTitleId = "main-title";
  const name = "Jackie";

  return (
    <header>
      <h1 id={mainTitleId}>{title}</h1>
      <h2>{name}</h2>
      <p className="main–description">{desc}</p>
      <input value={10 * 20} />
      <span className="total-ietms">Items: 1</span>
    </header>
  );
}

export default Header;
