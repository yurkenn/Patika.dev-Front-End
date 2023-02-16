import React from 'react';

function Header({ increment }) {
  console.log('Header Component re-render');
  return (
    <div>
      Header
      <button onClick={increment}>Arttirir</button>
    </div>
  );
}

export default Header;
