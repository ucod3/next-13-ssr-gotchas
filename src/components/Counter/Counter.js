'use client';
import React from 'react';
import Spinner from '../Spinner';
import { set } from 'date-fns';
function Counter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const savedCount = window.localStorage.getItem('saved-count');
    setCount(savedCount ? Number(savedCount) : 0);
  }, []);

  React.useEffect(() => {
    if (typeof count === 'number') {
      window.localStorage.setItem('saved-count', count);
    }
  }, [count]);

  const Button = () => (
    <button className='count-btn' onClick={() => setCount(count + 1)}>
      Count: {typeof count === 'number' ? count : <Spinner />}
    </button>
  );

  return <Button />;
}

export default Counter;
