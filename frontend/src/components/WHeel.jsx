import React, { useState, useEffect } from 'react';
import userService from '../services/user'; // Ensure this is the correct path
import './Wheel.css';

const Wheel = ({ username }) => {
  const [result, setResult] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [userPoints, setUserPoints] = useState(0); // State to track user points

  // Updated prizes to include point totals
  const prizes = [
    { label: '25 Points', points: 25 },
    { label: '50 Points', points: 50 },
    { label: '75 Points', points: 75 },
    { label: '100 Points', points: 100 },
    { label: 'Better Luck Next Time', points: 0 },
  ];

  // Fetch initial points when the component mounts
  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const userInfo = await userService.getUserByUsername(username);
        setUserPoints(userInfo.points || 0); // Update the user's points
      } catch (error) {
        console.error('Error fetching user points:', error);
      }
    };

    fetchUserPoints();
  }, [username]);

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
        // Add points to the user's account
        try {
          const response = await userService.addPoints(username, selectedPrize.points);
          if (response.success) {
            setUserPoints(response.updatedPoints); // Update the points from the server response
            console.log('Points successfully added:', response.updatedPoints);
          } else {
            console.error('Failed to update points:', response.message);
          }
        } catch (error) {
          console.error('Error adding points:', error);
        }
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
      <p>Your Total Points: {userPoints}</p> {/* Display user points */}
    </div>
  );
};

export default Wheel;
