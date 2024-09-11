import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutUs = () => {

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        marginTop: '5vmin', 
        maxWidth: '900px', 
        marginLeft: 'auto', 
        marginRight: 'auto',
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#0d6efd', 
            textAlign: 'center', 
            marginBottom: '20px',
          }}
        >
          About Academic Archive
        </Typography>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <Paper elevation={4} sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' , }}>
            About Academic Archive
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Academic Archive, a platform designed to simplify the process of accessing previous years' notes and question papers. Our mission is to help students effortlessly browse through essential academic resources while also allowing them to contribute their own materials.          </Typography>
          
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px'}}>
            About Admin Portal
          </Typography>
          <Typography variant="body1" paragraph >
            Our application includes a dedicated admin portal, where admins oversee content submissions from students. They hold the power to review and approve each entry before it becomes available to everyone.          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px'}}>
            Student Features
          </Typography>
          <Typography variant="body1" paragraph >
          We offer a user-friendly student dashboard where students can explore available notes and past question papers. Additionally, they can upload their own materials to share with their peers, contributing to the academic community. However, all uploads go through an approval queue, ensuring only relevant and high-quality content is shared.          </Typography>

        </Paper>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
