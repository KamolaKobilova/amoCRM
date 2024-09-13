import React from 'react';
import Sidebar from './Components/Sidebar/sidebar';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px', backgroundColor: '#005f73' }}>
        {/* Main content goes here */}
        <h1>Dashboard</h1>
      </main>
    </div>
  );
};

export default App;
