import React, {useState} from "react";
import { Button, Theme, Flex, Box, Section, Heading, Grid, Text } from '@radix-ui/themes';
import Navigator from '../navigator/index.js'
import "@radix-ui/themes/styles.css";

import Upload from '../upload/index.tsx'

export default function Report() {
    








    return(
        <Theme>
            <Box mt='9'>
                <Box 
                    style={{ 
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                            width:'414px',
                            height:'40px',
                        }}
                >
                    <Text size="8">
                        Video Similarity Analysis
                    </Text>
                </Box>
                <Box mt='3'
                    style={{ 
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                            width:'360px',
                            height:'40px',
                        }}
                >
                    <Text size="3" color='gray'>
                        Upload two videos to get the similarity report
                    </Text>
                </Box>
                
                <Box>
                    <Flex gap='9'
                        style={{ 
                                position: 'relative',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                alignSelf: 'center', 
                                width:'900px',
                                height:'320px',
                            }}
                    >
                        {/* drag&drop component here */}
                        <Upload/>
                        <Upload/>
                    </Flex>
                </Box>

            </Box>











        </Theme>
    );
}