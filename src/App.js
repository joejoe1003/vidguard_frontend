import React, {useState} from "react";
import Navigator from "./views/navigator";
import Home from "./views/home";
import "@radix-ui/themes/styles.css";
import { Box, Container } from "@radix-ui/themes"; 

function App() {

  return (
    <div className="relative">
      {/* navigator in every page */}
      <Box className="fixed top-0 w-full z-10 m-0 p-0" style={{height:"40px"}}>
        <Container>
          <Navigator />
        </Container>
      </Box>
      {/* home */}
      <Box className="pt-10 "> 
        <Container>
            <Home />
        </Container>
      </Box>
    </div>
  );
}

export default App;

// The Theme component is a wrapper component that sets the theme for the entire app. 
// We can add any custom styles or components here.