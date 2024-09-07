import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
// import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSolutionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSolutionClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6">
          Recqarz
        </Typography> */}
       <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
  Recqarz
</Typography>
{/* <img src="/path-to-logo.png" alt="Recqarz" style={{ height: '40px' }} /> */}

        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button
          color="inherit"
          onClick={handleSolutionClick}
        >
          Solution
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleSolutionClose}
        >
          <MenuItem onClick={handleSolutionClose}>Option 1</MenuItem>
          <MenuItem onClick={handleSolutionClose}>Option 2</MenuItem>
        </Menu>
        <Button color="inherit" component={RouterLink} to="/about-us">About Us</Button>
        <Button color="inherit" component={RouterLink} to="/contact-us">Contact Us</Button>
        <Button color="inherit">Book a Demo</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
