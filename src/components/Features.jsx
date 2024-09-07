import { motion } from 'framer-motion';
import { Grid, Paper, Typography } from '@mui/material';

function Features() {
  const features = [
    { title: 'Digital Multichannel Communication', description: 'Automates communication via email, SMS, WhatsApp, and letters.' },
    { title: 'Compliance', description: 'Supports compliance with debt collection laws and regulations.' },
    { title: 'Machine Learning & Data Analytics', description: 'Predict possible delinquencies and defaults for better decision making.' },
  ];

  return (
    <Grid container spacing={4}>
      {features.map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography>{feature.description}</Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Features;
