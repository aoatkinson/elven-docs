import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 20, border: '1px solid #ccc', borderRadius: 4, width: 200 }}>
      <h3>Counter Example</h3>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
