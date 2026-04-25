import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to My Google AI Studio App</h1>
      <p>This is a React application built with Vite.</p>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
