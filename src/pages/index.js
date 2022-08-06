import React from 'react';
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import Footer from '../components/footer';

const theme = createTheme({
  palette:{
    primary: {
      main: '#666666',
      contrastText: ''
    },
    secondary: {
      light: '#444ce8',
      main: '#757444',
    },
  },
});


  
const Home = () => {
  return (
  <ThemeProvider theme={theme}>
    <div className='container-fluid bg-light p-5'>
      <Typography variant="h3" backgroundcolor="#FFFFFF" className='display-4 text-center'>
          Welcome to the Mountain Information System Terminal
              {/* Should be in its own object. Probably a span? */}
      </Typography> 
      <hr className='my-4'></hr>
      <p className='h5 text-left'>
        This information proxy is a user's portal into an interactive 
        collection of information services that can be reached through 
        the ePaper display device. Such a system can display static 
        information, but also accommodate change easily and be a conduit 
        for individuals to obtain a wealth of information through the 
        information portal.
      </p>
    </div>
    <Footer></Footer>
  </ThemeProvider>

    
  );
};
  
export default Home;