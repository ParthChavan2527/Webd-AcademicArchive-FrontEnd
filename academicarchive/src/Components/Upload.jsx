import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';

const Upload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !title || !description) {
      alert('Please fill in all fields and select a file.');
      return;
    }

    setSuccess(true);
    setTitle('');
    setDescription('');
    setFile(null);

    const uploadData = { title, description, file, uploadDate: new Date().toISOString() };
    console.log('Submitting upload:', uploadData);

    if (onUpload) {
      onUpload(uploadData);
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Upload Contribution
        </Typography>
        {success && <Alert severity="success">Upload successful!</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Upload
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Upload;
