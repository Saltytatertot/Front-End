import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/';
import Map from './pages/map';
import Room from './pages/room';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary: {
      main: '#FF0000',
      contrastText: ''
    },
    secondary: {
      light: '#FF0000',
      main: '#FF0000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Router>
          <Navbar/>
          <Routes>
            {/* Exact path will be the landing page */}
            <Route  exact path ='/' element={<Home />}/>
            <Route  exact path ='/index' element={<Home />}/>
            <Route  path='/map' element={<Map/>} />
            <Route  path='/room' element={<Room/>} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
