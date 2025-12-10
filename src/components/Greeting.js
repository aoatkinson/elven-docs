import React from 'react';

export default function Greeting() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello, welcome to Elven Docs!</h1>
      <p>This is a simple React component you can build upon.</p>
      <button
        onClick={() => alert('Hello from the Greeting component!')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}>
        Click Me
      </button>
    </div>
  );
}
