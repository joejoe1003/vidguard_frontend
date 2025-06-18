import React from "react";
import { Button, Theme, Flex, Box, TabNav, Heading } from '@radix-ui/themes';
import { Link  } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import './index.css'
import './../vote'


export default function Navigator() {
  return (
    <Theme>
      <Flex gap="4" className="items-center w-full">

        {/* Logo and Nav */}
        <Flex gap="5" align="center"  >
          <Box width="32px" height="32px" pl="4" top="0" left="0">
              {/* svg logo */}
              <svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 32 32">
                <defs>
                  <clipPath id="clipPath6833170223">
                    <path d="M0 0L32 0L32 32L0 32L0 0Z" fillRule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                  </clipPath>
                </defs>
                <g clipPath="url(#clipPath6833170223)">
                  <defs>
                    <clipPath id="clipPath7285120656">
                      <path d="M0 0L32 0L32 32L0 32L0 0Z" fillRule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clipPath7285120656)">
                    <path d="M28.1562 5.22969L16.1562 0.229691C15.7871 0.0765638 15.4028 0 15.0031 0C14.6035 0 14.2191 0.0765638 13.85 0.229691L1.85 5.22969C0.73125 5.69219 0 6.78594 0 7.99844C0 20.4047 7.15625 28.9797 13.8438 31.7672C14.5813 32.0734 15.4125 32.0734 16.15 31.7672C21.5063 29.5359 30 21.8297 30 7.99844C30 6.78594 29.2687 5.69219 28.1562 5.22969ZM15.0063 27.8922L15 4.07969L25.9937 8.66094C25.7875 18.1234 20.8625 24.9797 15.0063 27.8922Z" fillRule="nonzero" transform="matrix(1 0 0 1 0 -0.5)" fill="rgb(43, 80, 170)"/>
                  </g>
                </g>
              </svg>
            </Box>
          </Flex>

        <Flex gap="3" align="center" pl="2">
        <Heading align="center" weight="bold" as="div"> VidGuard </Heading>
        </Flex>
        

        {/* Menu */}
        <Flex direction="column" gap="4" pb="2">
          <TabNav.Root size="2">
            <TabNav.Link asChild active>
              <Link href="/home">Home</Link>  
            </TabNav.Link>
            <TabNav.Link href="/vote">Compare & Vote</TabNav.Link>
            <TabNav.Link href="/">Reports & Analytics</TabNav.Link>
            <TabNav.Link href="/">Block Search</TabNav.Link>
          </TabNav.Root>
        </Flex>
      

        {/* Right side */}
        <Flex pr="4" display="flex" gap="5" align="center" position="absolute" top="1" right="2">
          <Box className="flex items-center space-y-15 ml-auto" >
            <Button style={{backgroundColor:'#fdfdfe', color:'grey', ':hover':{backgroundColor:'#d0dffe'}}}>Sign In</Button>
          </Box>
          <Box className="flex items-center space-y-15 ml-auto">
            <Button style={{backgroundColor:'#2b50aa', color:'#fdfdfe', ':hover':{backgroundColor:'#1d4098'}}}> Get Started </Button>
          </Box>
        </Flex>

      </Flex>
  </Theme>
  );
}
