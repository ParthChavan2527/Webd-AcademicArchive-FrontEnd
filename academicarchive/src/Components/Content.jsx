import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const ContentPage = () => {
  const notesData = [
    { title: 'Introduction to Linear Algebra', description: 'Notes covering the basics of matrices, vectors, and more.' },
    { title: 'Physics Formulae', description: 'Important formulae from Engineering Physics.' },
    { title: 'Operating System Basics', description: 'OS notes covering basic concepts like processes, threads, and memory management.' },
    { title: 'Software Engineering Models', description: 'Notes on various software development models.' },
    { title: 'HTML & CSS Essentials', description: 'Web development notes focusing on HTML and CSS fundamentals.' }
  ];

  const pyqData = [
    { title: '2023 Semester 1', description: 'Previous Year Questions for Semester 1 subjects.' },
    { title: '2022 Semester 2', description: 'Previous Year Questions for Semester 2 subjects.' },
    { title: '2021 Semester 3', description: 'Previous Year Questions for Semester 3 subjects.' },
    { title: '2020 Semester 4', description: 'Previous Year Questions for Semester 4 subjects.' }
  ];

  return (
    <Box sx={{ padding: '20px', marginTop: '5vmin' }}>
      {/* Notes Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#0d6efd' }}>
          Notes
        </Typography>
      </motion.div>
      
      <Grid container spacing={3}>
        {notesData.map((note, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Paper elevation={4} sx={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#23252b' }}>
                  {note.title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
                  {note.description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                  Download Notes
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* PYQs Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginTop: '40px' }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#0d6efd' }}>
          Previous Year Questions
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        {pyqData.map((pyq, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Paper elevation={4} sx={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#23252b' }}>
                  {pyq.title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
                  {pyq.description}
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                  Download PYQs
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentPage;
