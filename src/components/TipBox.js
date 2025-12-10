import React from 'react';

export default function TipBox({ title = 'Tip', children }) {
  return (
    <section
      style={{
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        padding: '15px',
        backgroundColor: '#e7f9ee',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
      aria-label={title}
    >
      <strong style={{ fontSize: '1.2em', color: '#2a7a2a' }}>{title}</strong>
      <div style={{ marginTop: '10px', color: '#333' }}>{children}</div>
    </section>
  );
}
