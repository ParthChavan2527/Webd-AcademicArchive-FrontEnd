import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const SelectSem = ({onSemesterChange}) => {
  const [selectedSemester, setSelectedSemester] = useState('');

    const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    onSemesterChange(event.target.value);
  };

  return (
    <>
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '80px', 
          left: '20px', 
          textAlign: 'center',
          marginTop : '3vmin'
        }}
      >
        <Typography 
          variant="h6" 
          sx={{
            marginBottom: '10px',
            fontWeight: 'bold',
            color: '#0d6efd',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            animation: 'fadeIn 1.5s ease-in-out'
          }}
        >
          Select Semester
        </Typography>

        <FormControl 
          sx={{
            minWidth: 150,
            backgroundColor: 'white',
            '&:hover': {
              boxShadow: '0 0 10px rgba(13, 110, 253, 0.5)'
            },
            '& .MuiSelect-root': {
              color: '#0d6efd',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#e9f5ff'
              },
            },
          }}
        >
          <InputLabel id="select-semester-label">Semester</InputLabel>
          <Select
            labelId="select-semester-label"
            value={selectedSemester}
            onChange={handleSemesterChange}
            label="Semester"
            sx={{
              '&:focus': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <MenuItem>Show All Subjects</MenuItem>
            <MenuItem value={1}>Semester 1</MenuItem>
            <MenuItem value={2}>Semester 2</MenuItem>
            <MenuItem value={3}>Semester 3</MenuItem>
            <MenuItem value={4}>Semester 4</MenuItem>
            <MenuItem value={5}>Semester 5</MenuItem>
            <MenuItem value={6}>Semester 6</MenuItem>
            <MenuItem value={7}>Semester 7</MenuItem>
            <MenuItem value={8}>Semester 8</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default SelectSem;
