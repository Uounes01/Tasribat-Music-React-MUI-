import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
    id="footer"
      sx={{
        width: '200%', // Set the width to 200%
        padding: '60px 20px', // Padding for a larger appearance
        backgroundColor: 'black', // Solid black background
        color: '#ffffff', // Text color
        textAlign: 'center', // Center align text
        display: 'flex', // Use flexbox
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center content vertically
        position: 'relative', // Keep relative position
        left: '50%', // Center the footer
        transform: 'translateX(-50%)', // Adjust position to center
        borderTop: '5px solid #ff5722', // Top border with color and thickness
        borderBottom: '5px solid #ff5722', // Bottom border with color and thickness
        borderRadius: '25px', // Add border radius for rounded corners
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '30px', fontWeight: 'bold' }}>
        Contact Information
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Email
          </Typography>
          <Typography variant="body1">contact@mymusicapp.com</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Phone
          </Typography>
          <Typography variant="body1">+123 456 7890</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Address
          </Typography>
          <Typography variant="body1">123 Music Lane, Music City</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ marginTop: '30px', fontWeight: 'bold' }}>
        © {new Date().getFullYear()} My Music App. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
