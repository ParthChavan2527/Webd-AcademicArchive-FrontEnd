import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const SelectSem = ({ onSemesterChange, mode }) => {
  const [selectedSemester, setSelectedSemester] = useState('');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    onSemesterChange(event.target.value);
  };

  // Dynamic styles for dark and light mode
  const backgroundColor = mode === 'light' ? 'white' : '#333';
  const textColor = mode === 'light' ? '#0d6efd' : '#fff';
  const boxShadowColor = mode === 'light' ? 'rgba(13, 110, 253, 0.5)' : 'rgba(255, 255, 255, 0.2)';
  const hoverBackgroundColor = mode === 'light' ? '#e9f5ff' : '#555';
  const menuBackgroundColor = mode === 'light' ? 'white' : '#333';
  const menuItemHoverColor = mode === 'light' ? '#f0f0f0' : '#555';

  return (
    <>
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '80px', 
          left: '20px', 
          textAlign: 'center',
          marginTop: '3vmin'
        }}
      >
        <Typography 
          variant="h6" 
          sx={{
            marginBottom: '10px',
            fontWeight: 'bold',
            color: textColor,
            textShadow: mode === 'light' ? '1px 1px 2px rgba(0, 0, 0, 0.2)' : '1px 1px 2px rgba(255, 255, 255, 0.2)',
            animation: 'fadeIn 1.5s ease-in-out'
          }}
        >
          Select Semester
        </Typography>

        <FormControl 
          sx={{
            minWidth: 150,
            backgroundColor: backgroundColor,
            '&:hover': {
              boxShadow: `0 0 10px ${boxShadowColor}`
            },
            '& .MuiSelect-root': {
              color: textColor,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: hoverBackgroundColor
              },
            },
            '& .MuiSelect-icon': {
              color: textColor // Ensure the dropdown arrow icon is also visible in dark mode
            },
          }}
        >
          <InputLabel id="select-semester-label" sx={{ color: textColor }}>Semester</InputLabel>
          <Select
            labelId="select-semester-label"
            value={selectedSemester}
            onChange={handleSemesterChange}
            label="Semester"
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: menuBackgroundColor, // Background of the menu list
                },
              },
            }}
            sx={{
              color: textColor, // Ensure the selected option text color is correct in both modes
              '&:focus': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <MenuItem value="" sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>
              Show All Subjects
            </MenuItem>
            <MenuItem value={1} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 1</MenuItem>
            <MenuItem value={2} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 2</MenuItem>
            <MenuItem value={3} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 3</MenuItem>
            <MenuItem value={4} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 4</MenuItem>
            <MenuItem value={5} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 5</MenuItem>
            <MenuItem value={6} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 6</MenuItem>
            <MenuItem value={7} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 7</MenuItem>
            <MenuItem value={8} sx={{ color: textColor, '&:hover': { backgroundColor: menuItemHoverColor } }}>Semester 8</MenuItem>
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
