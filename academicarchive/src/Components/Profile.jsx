import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Switch, Box, Typography, Container } from '@mui/material';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    notifications: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setProfile({ ...profile, notifications: e.target.checked });
  };

  const handleSave = () => {
    alert('Profile updated!');
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={profile.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Switch
              checked={profile.notifications}
              onChange={handleSwitchChange}
            />
          }
          label="Enable Notifications"
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
