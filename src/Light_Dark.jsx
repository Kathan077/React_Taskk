import React, { useState } from 'react';

const Light_Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  const appStyle = {
    height: '100vh',
    background: darkMode
      ? 'linear-gradient(to right, #141e30, #243b55)'
      : 'linear-gradient(to right, #e0f7fa, #ffffff)',
    color: darkMode ? '#f5f5f5' : '#222',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    transition: 'all 0.5s ease',
  };

  const buttonStyle = {
    padding: '12px 28px',
    marginTop: '25px',
    fontSize: '16px',
    backgroundColor: darkMode ? '#ffb74d' : '#263238',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyle}>
      <h1>{darkMode ? ' Dark Mode Enabled' : ' Light Mode Enabled'}</h1>
      <button style={buttonStyle} onClick={toggleMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Light_Dark;
