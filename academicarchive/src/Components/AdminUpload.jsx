import React, { useState, useRef } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';

const Upload = ({ onUpload }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    }
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
    setFileName('');

    const uploadData = { title, description, file, uploadDate: new Date().toISOString() };
    console.log('Submitting upload:', uploadData);

    if (onUpload) {
      onUpload(uploadData);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" style = {{color : 'white'}} gutterBottom>
          Upload PYQ's / Assignments
        </Typography>
        {success && <Alert severity="success">Upload successful!</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            style = {{color : 'white'}}
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
                '& .MuiInputBase-root': {
                  color: 'black',
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'black',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                },
                '& .MuiFormHelperText-root': {
                  color: 'black',
                },
              }}
          />
          <TextField
            style = {{color : 'white'}}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
                '& .MuiInputBase-root': {
                  color: 'black',
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'black',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'black',
                },
                '& .MuiFormHelperText-root': {
                  color: 'black',
                },
              }}
          />
          <input
            style={{ display: 'none' }}
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            sx={{
              backgroundColor: '#0d6efd',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#084298',
              },
              mt: 2
            }}
          >
            Choose File
          </Button>
          {fileName && (
            <Typography sx={{ mt: 1, color: '#fff' }}>Selected file: {fileName}</Typography>
          )}
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit" 
               sx={{
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    '&:hover': {
                    backgroundColor: '#084298',
                    },
                    mt: 2
               }}
            >
              Upload
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Upload;
