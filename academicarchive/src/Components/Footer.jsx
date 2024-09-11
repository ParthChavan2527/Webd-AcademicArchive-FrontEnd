import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = ({mode}) => {

  const BoxStyle = {
    backgroundColor: mode === 'dark' ? '#23252b' : '#fff',
    color: mode === 'dark' ? '#fff' : '#000', 
  }
  const TypographyStyle = {
    color : mode === 'dark' ? 'white' : 'black',
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: '10px 0',
        textAlign: 'center',
        borderTop: '1px solid #e0e0e0',
        ...BoxStyle,
      }}
    >
      <Typography sx = {{TypographyStyle}} variant="body2">
        © {new Date().getFullYear()} Academic Archive. All rights reserved.
      </Typography>
      <Typography sx = {{TypographyStyle}} variant="body2">
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
