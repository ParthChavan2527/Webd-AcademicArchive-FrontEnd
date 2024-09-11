import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, MenuItem, FormControl, Select, InputLabel, Grid } from '@mui/material';

const Settings = () => {
  const [settings, setSettings] = useState({
    language: 'English',
    theme: 'Light',
    privacy: 'Public',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSave = () => {
    alert('Settings updated!');
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="language-label"
               sx={{
                backgroundColor: 'white',
                px: 1,
                transform: 'translate(14px, -6px) scale(0.75)', 
              }}
              >Language
              </InputLabel>
              <Select
                labelId="language-label"
                value={settings.language}
                name="language"
                onChange={handleInputChange}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="theme-label"  sx={{
                backgroundColor: 'white',
                px: 1,
                transform: 'translate(14px, -6px) scale(0.75)', 
              }}>
                Theme
              </InputLabel>
              <Select
                labelId="theme-label"
                value={settings.theme}
                name="theme"
                onChange={handleInputChange}
              >
                <MenuItem variant = "standard" value="Light">Light</MenuItem>
                <MenuItem value="Dark">Dark</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="privacy-label"
               sx={{
                backgroundColor: 'white',
                px: 1,
                transform: 'translate(14px, -6px) scale(0.75)', 
              }}
              >Privacy
              </InputLabel>
              <Select
                labelId="privacy-label"
                value={settings.privacy}
                name="privacy"
                onChange={handleInputChange}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Profile Name"
              value={settings.profileName || ''}
              name="profileName"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Settings
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;
