import React from 'react';
import { Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';

function CountSection() {
  return (
    <Grid container spacing={4} sx={{ textAlign: 'center', my: 4 }}>
      <Grid item xs={4}>
        <Typography variant="h4">
          <CountUp end={50396550} duration={2} />+
        </Typography>
        <Typography>Emails Delivered</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4">
          <CountUp end={22583418} duration={2} />+
        </Typography>
        <Typography>SMS Delivered</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4">
          <CountUp end={100875} duration={2} />+
        </Typography>
        <Typography>WhatsApp Delivered</Typography>
      </Grid>
    </Grid>
  );
}

export default CountSection;
