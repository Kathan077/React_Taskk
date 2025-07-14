import React, { useState } from 'react';

const Counttt = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  const containerStyle = {
    textAlign: 'center',
    minHeight: '100vh',
    paddingTop: '50px',
    backgroundColor: '#f5f5f5',
    color: '#000',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={buttonStyle}>+ Increment</button>
      <button onClick={decrement} style={buttonStyle}>- Decrement</button>
      <button onClick={reset} style={{ ...buttonStyle, backgroundColor: '#888' }}>Reset</button>
    </div>
  );
};

export default Counttt;
