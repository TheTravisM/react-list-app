import React from 'react';

const Header = (props) => {
  const {
    title,
    headerId,
    itemTotal
  } = props;

  return (
    <header
      id={headerId}>
      <h1>
        {title}
      </h1>
      <span className="total-items">
        Items: {itemTotal}
    </span>
    </header>
  );
}

export default Header;
