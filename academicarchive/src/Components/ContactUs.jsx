import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or show success message)
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            We're here to help! Reach out to us with any questions or suggestions.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Your Name"
                  fullWidth
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Your Email"
                  fullWidth
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  label="Your Message"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Our Contact Information
          </Typography>
          <Typography align="center">
            <strong>Email:</strong> support@academicarchive.com
          </Typography>
          <Typography align="center">
            <strong>Phone:</strong> 9067302534
          </Typography>
          <Typography align="center">
            <strong>Address:</strong> IIIT Allahabad, Jhalwa, Prayagraj , UP
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}
