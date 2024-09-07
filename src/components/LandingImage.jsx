import React from 'react';
import { Box } from '@mui/material';

function LandingImage() {
  return (
    <Box
      sx={{
        height: '500px',
        backgroundImage: 'url(/bg_img.jpg)',  // Replace with actual path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default LandingImage;
