import React, { useState, useEffect } from 'react';
import userService from '../services/user'; 
import './Wheel.css';

function Wheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [userPoints, setUserPoints] = useState(0);

  const user = JSON.parse(localStorage.getItem('loggedappUser')) || {};
  const username = user.username || '';

  const prizes = [
    { label: '25 Points', points: 25 },
    { label: '50 Points', points: 50 },
    { label: '75 Points', points: 75 },
    { label: '100 Points', points: 100 },
    { label: 'Better Luck Next Time', points: 0 },
  ];

  
  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const userInfo = await userService.getUserByUsername(username);
        setUserPoints(userInfo.points || 0);
      } catch (error) {
        console.error('Error fetching user points:', error.message);
      }
    };

    if (username) {
      fetchUserPoints();
    }
  }, [username]);

  const handleAddPoints = async (points) => {
    try {
      const response = await userService.addPoints(username, points); 
      console.log(`Added ${points} points to user ${username}`, response);
      setUserPoints((prevPoints) => prevPoints + points); 
    } catch (error) {
      console.error('Error adding points:', error.message);
    }
  };

  const spin = async () => {
    if (spinning) return;

    setSpinning(true);

    
    const randomPrizeIndex = Math.floor(Math.random() * prizes.length);
    const spinAngle = 360 * 5 + (360 / prizes.length) * randomPrizeIndex;

    const wheel = document.getElementById('wheel');
    if (wheel) {
      wheel.style.transition = 'transform 3s ease-out';
      wheel.style.transform = `rotate(${spinAngle}deg)`;
    }

    setTimeout(async () => {
      const selectedPrize = prizes[randomPrizeIndex];
      setSpinning(false);
      setResult(selectedPrize.label);

      if (selectedPrize.points > 0) {
        console.log(`You won ${selectedPrize.points} points!`);
        await handleAddPoints(selectedPrize.points); 
      } else {
        console.log('Better Luck Next Time!');
      }
    }, 3000);
  };

  return (
    <div className="wheel-container">
      <div id="wheel" className="wheel" />
      <button onClick={spin} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
      {result && <p>You won: {result}</p>}
      <p>Your Total Points: {userPoints}</p>
    </div>
  );
}

export default Wheel;
