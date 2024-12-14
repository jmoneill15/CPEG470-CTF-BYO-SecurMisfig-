import React, { useEffect, useState } from 'react';
import './.hidden.js';

/* Hides flag */
const CTFFlag = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    import('./.hidden.js')
      .then((module) => {
        // Move the flag into localStorage
        localStorage.setItem('hidden_flag', module.default);
      })
      .catch((err) => {
        console.error('Failed to load hidden flag file:', err);
      });
  }, []);

  const checkClue = () => {
    setMessage(
      "The flag is STORED very nearby, maybe even quite local."
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>CPEG470 CTF Flag Find</h1>
      <p>Click for a hint</p>
      <button
        onClick={checkClue}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Show Hint
      </button>
      <p>{message}</p>
    </div>
  );
};

export default CTFFlag;
