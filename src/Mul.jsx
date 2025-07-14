import React, { useState } from 'react';

export const Mul = () => {
  const [test, setState] = useState('');

  function handleSubmit(e) {
    setState(e.target.value);
  }

  function mul() {
    setState(test * 5);
  }

  return (
    <div>
      <h1 style={{marginLeft:600}}>Multiplication</h1>
      <style>{`
        .container {
          max-width: 400px;
          margin: 50px auto;
          padding: 30px;
          border: 2px solid #4caf50;
          border-radius: 15px;
          background-color: #f4fff4;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .input-box {
          padding: 10px;
          margin: 10px;
          width: 80%;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .submit-btn {
          padding: 10px 20px;
          margin: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .submit-btn:hover {
          background-color: #45a049;
        }

        .result {
          font-size: 24px;
          color: #333;
          margin-top: 20px;
        }
      `}</style>

      <div className="container">
        <input
          type="text"
          name="name"
          onChange={handleSubmit}
          className="input-box"
        />
        <input
          type="submit"
          onClick={mul}
          className="submit-btn"
        />
        <p className="result">{test}</p>
      </div>
    </div>
  );
};
