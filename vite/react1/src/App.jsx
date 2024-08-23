import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    
    return () => clearTimeout(timeoutId);
  }, [count]); 

  return (
    <>
      <h1 className='text-white bg-pink-800'>
        Hum {count} baar render ho rahe hain
      </h1>
    </>
  );
}

export default App;
