import React, { Component } from 'react';
import "@radix-ui/themes/styles.css";
import ReactDOM from 'react-dom/client';
import '../src/App.css'
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Box, Container } from "@radix-ui/themes"; 

import Home from "./views/home";
import Vote from "./views/vote";
import Navigator from './views/navigator';


function App() {
  return (
      <div>
        <Box className="fixed top-0 w-full z-10 m-0 p-0" style={{height:"40px"}}>
          <Container>
            <Navigator />
          </Container>
        </Box>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
          </Routes>
        </BrowserRouter>

      </div>
    
      
  );
}

export default App;

// The Theme component is a wrapper component that sets the theme for the entire app. 
// We can add any custom styles or components here.