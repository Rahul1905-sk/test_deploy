import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Recht Tech Pvt Ltd. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit">Privacy Policy</Link> | <Link href="#" color="inherit">Terms of Service</Link>
      </Typography>
    </Box>
  );
}

export default Footer;
