import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0); 
  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        add
      </button>
      <p>{count}</p>
    </div> 
  );
};


function App() {
  return (
    <Counter />
  );
}

export default App;
