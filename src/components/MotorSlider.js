import React from 'react';
import { Slider, Typography, Box } from '@mui/material';

function MotorSlider({ motorNumber, angle, onChange }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mb: 2,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6">Motor {motorNumber}</Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Angle: {angle}°
      </Typography>
      <Slider
        min={0}
        max={180}
        value={angle}
        onChange={onChange}
        aria-label={`Motor ${motorNumber}`}
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
  );
}

export default MotorSlider;
