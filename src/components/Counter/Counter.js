'use client';
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(() => {
    // Check if window is defined (i.e., we're in a browser context)
    if (typeof window !== 'undefined') {
      return Number(window.localStorage.getItem('saved-count') || 0);
    } else {
      // If we're not in a browser context (e.g., server-side rendering), default to 0
      return 0;
    }
  });

  React.useEffect(() => {
    // Check if window is defined (i.e., we're in a browser context)
    if (typeof window !== 'undefined') {
      setCount(Number(window.localStorage.getItem('saved-count') || 0));
    }
  }, []);

  return (
    <button className='count-btn' onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
