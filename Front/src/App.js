import React, { useState } from 'react';
import { Slider, Typography, Box, Grid } from '@mui/material';
import axios from 'axios';
import ExecuteButton from './components/ExecuteButton';

function MotorSliders() {
  // State to manage angles for six motors
  const [angles, setAngles] = useState([90, 90, 90, 90, 90, 90]);

  // Handler to update individual motor angles
  const handleSliderChange = (index) => (event, newValue) => {
    const updatedAngles = [...angles];
    updatedAngles[index] = newValue;
    setAngles(updatedAngles);
  };

  // Function to send the angles to the backend
  const sendAnglesToBackend = async () => {
    try {
      const response = await axios.post('/api/motor-control', { angles });
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Error sending angles to backend:', error);
      console.error('Error response:', error.response.data);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Servo Motor Angle Control
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {angles.map((angle, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                mb: 2,
                p: 2,
                border: '1px solid #ccc',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">Motor {index + 1}</Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Angle: {angle}°
              </Typography>

              <Slider
                min={0}
                max={180}
                value={angle}
                onChange={handleSliderChange(index)}
                aria-label={`Motor ${index + 1}`}
                valueLabelDisplay="auto"
                sx={{
                  '& .MuiSlider-track': {
                    background: 'linear-gradient(to right, #ff9800, #f44336)',
                  },
                  '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',
                    border: '3px solid #f44336',
                  },
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <ExecuteButton onClick={sendAnglesToBackend} />
    </Box>
  );
}

export default MotorSliders;
