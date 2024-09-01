import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from './assets/logo.png'; // Ensure this path is correct

const PanelMenu = ({ onMusicButtonClick }) => {
  // Function to reload the page and scroll to the top
  const reloadAndScrollToTop = () => {
    window.location.reload(); // Reloads the page
  };

  // Function to scroll to the top without reloading
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  // Function to scroll to the footer
  const scrollToFooter = () => {
    const footer = document.getElementById('footer'); // Make sure the footer has this ID
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to footer
    }
  };

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        backgroundColor: 'rgba(28, 28, 28, 0.85)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', 
        borderRadius: '15px',
        margin: '20px auto',
        padding: '5px 2rem',
        width: '60%',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '1000',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0', height: '60px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
          <img 
            src={logo} 
            alt="My Music App Logo" 
            style={{ height: '50px', width: 'auto', marginRight: '10px', cursor: 'pointer' }} 
            onClick={reloadAndScrollToTop} // Reload and scroll to top
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff5722',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#e64a19',
              },
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              fontSize: '1.2rem',
              textTransform: 'none',
            }}
            onClick={reloadAndScrollToTop} // Reload and scroll to top
          >
            Tsribat Music
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
          <Button
            variant="outlined"
            sx={{
              color: '#ffffff',
              borderColor: '#ff5722',
              borderRadius: '20px',
              padding: '8px 16px',
              marginLeft: '1rem',
              '&:hover': {
                borderColor: '#ff3d00',
                backgroundColor: '#ff5722',
              },
              fontSize: '1rem',
            }}
            onClick={scrollToTop} // Just scroll to top
          >
            About
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: '#ffffff',
              borderColor: '#ff5722',
              borderRadius: '20px',
              padding: '8px 16px',
              marginLeft: '1rem',
              '&:hover': {
                borderColor: '#ff3d00',
                backgroundColor: '#ff5722',
              },
              fontSize: '1rem',
            }}
            onClick={onMusicButtonClick}
          >
            Music
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: '#ffffff',
              borderColor: '#ff5722',
              borderRadius: '20px',
              padding: '8px 16px',
              marginLeft: '1rem',
              '&:hover': {
                borderColor: '#ff3d00',
                backgroundColor: '#ff5722',
              },
              fontSize: '1rem',
            }}
            onClick={scrollToFooter} // Scroll to footer
          >
            Contacts
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PanelMenu;
