import React, { useState } from 'react';
import { Grid } from '@mui/material';
import MotorSlider from './MotorSlider';

function MotorSliders() {
  const [angles, setAngles] = useState([90, 90, 90, 90, 90, 90]);

  const handleSliderChange = (index) => (event, newValue) => {
    const updatedAngles = [...angles];
    updatedAngles[index] = newValue;
    setAngles(updatedAngles);
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      {angles.map((angle, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MotorSlider
            motorNumber={index + 1}
            angle={angle}
            onChange={handleSliderChange(index)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default MotorSliders;
