import React from 'react';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

const ColoredProgressBar = ({ progress }) => {
  let variant = '';

  if (progress <= 20) {
    variant = 'danger'; 
  } else if (progress <= 50) {
    variant = 'warning'; 
  } else if (progress <= 80) {
    variant = 'info'; 
  } else {
    variant = 'success'; 
  }

  return (
    <div className="progress-container">
      <BootstrapProgressBar
        now={progress}
        max={100}
        variant={variant}
        label={`${progress}%`}
      />
    </div>
  );
};

export default ColoredProgressBar;
