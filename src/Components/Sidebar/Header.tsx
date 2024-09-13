import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header" style={{ padding: '10px', backgroundColor: '#012a4a', color: '#fff' }}>
      <h2>amoCRM</h2>
      <input type="text" placeholder="Search" style={{ marginLeft: '20px', padding: '5px' }} />
    </div>
  );
};

export default Header;
