import React, { useEffect } from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import '../Public/Css/contribution.css';
import Particles from '../Animation/contribution-animation';

const Contributions = ({ uploads = [] }) => {
  useEffect(() => {
    console.log('Uploads updated: ', uploads);
  }, [uploads]);

  return (
    <Container>
        <Particles/>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Contributions
        </Typography>

        {uploads.length === 0 ? (
          <Box className="empty-background">
            <Typography variant="h6" gutterBottom>
              No contributions yet
            </Typography>
          </Box>
        ) : (
          <List>
            {uploads.map((upload, index) => (
              <ListItem key={index} className="contribution-item">
                <ListItemText
                  primary={upload.title}
                  secondary={`Uploaded on: ${new Date(upload.uploadDate).toLocaleDateString()} - ${upload.description}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default Contributions;
