import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import aboutImage from './assets/AboutImg.jpg'; // Update the path accordingly
import newBackgroundImage from './assets/NewBackgroundImage.jpeg'; // Import the new background image

const AboutSection = ({ onMusicButtonClick }) => {
  return (
    <Box
      sx={{
        marginTop: '100px',
        marginBottom: '40px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative', // Position for overlay
        overflow: 'hidden', // Hide overflow for the overlay
      }}
    >
      <Box
        sx={{
          position: 'absolute', // Position overlay
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${newBackgroundImage})`, // Apply the new background image
          backgroundSize: 'cover', // Ensure the image covers the box
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          opacity: 0.5, // Adjust opacity to make the image less visible
          zIndex: 1, // Place it behind the content
        }}
      />
      <Grid container spacing={2} sx={{ position: 'relative', zIndex: 2 }}> {/* Ensure content is above the overlay */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'left', color: '#ffffff' }}>
            About Tasribat Music
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px', lineHeight: '1.5', textAlign: 'left', color: '#ffffff' }}>
          Welcome to My Music App, where your musical journey begins. Dive into an extensive library of songs, create personalized playlists, and enjoy a seamless music experience. 
          What's unique about My Music App?
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'left', color: '#ffffff' }}>
          You can listen to exclusive tracks before they're officially released, giving you a first taste of what's coming. Our mission is to connect you with the music you love, providing a platform that enhances your listening experience. Join us and be a part of the music revolution!!
          </Typography>
          <Button
            variant="contained"
            onClick={onMusicButtonClick} // Call the function from props
            sx={{
              backgroundColor: '#ff5722',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '8px 16px',
              marginTop: '20px',
              '&:hover': {
                backgroundColor: '#e64a19',
              },
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              fontSize: '1.2rem',
            }}
          >
            MUSIC
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={aboutImage} // Use the imported image
            alt="About Music App"
            style={{
              width: '100%', // Responsive width
              height: 'auto', // Maintain aspect ratio
              borderRadius: '10px', // Optional: rounded corners
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
