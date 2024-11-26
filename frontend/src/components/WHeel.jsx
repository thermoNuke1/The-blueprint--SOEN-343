import React, { useState } from 'react';
import './WHeel.css';

const Wheel = () => {
  const [result, setResult] = useState('');
  const [spinning, setSpinning] = useState(false);

  const prizes = ['5% Off', '10% Off', '15% Off', 'Free Item', 'Try Again'];

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    const randomPrizeIndex = Math.floor(Math.random() * prizes.length);
    const spinAngle = 360 * 5 + (360 / prizes.length) * randomPrizeIndex;

    const wheel = document.getElementById('wheel');
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${spinAngle}deg)`;

    setTimeout(() => {
      setSpinning(false);
      setResult(prizes[randomPrizeIndex]);
    }, 3000);
  };

  return (
    <div className="wheel-container">
      <div id="wheel" className="wheel" />
      <button onClick={spin} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
      {result && <p>You won: {result}</p>}
    </div>
  );
};

export default Wheel;