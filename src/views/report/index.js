import React, {useState} from "react";
import { Button, Theme, Flex, Box, Tabs, Heading, Table, Text } from '@radix-ui/themes';
import Navigator from '../navigator/index.js'
import "@radix-ui/themes/styles.css";

import Upload from '../upload/index.tsx'

export default function Report() {
    const handleUpload = () => {


    }








    return(
        <Theme>
            <Box mt='9' 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '500px', // 确保容器有最小高度
                    }}
            >
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
                
                <Box mb='3' >
                    <Box>
                        <Flex gap='9'
                            style={{ 
                                    position: 'relative',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    alignSelf: 'center', 
                                    width:'900px',
                                    minHeight:'320px',
                                }}
                        >
                            {/* drag&drop component here */}
                            <Upload/>
                            <Upload/>
                        </Flex>
                    </Box>
                    <Box mt='auto'
                        style={{ 
                                    position: 'relative',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    alignSelf: 'center', 
                                    width:'200px',
                                    margin: '0 auto',
                                    padding: '20px 0'
                                }}
                        >
                        <Button variant="primary" size="3" onClick={handleUpload}
                            style={{
                                width:'200px',
                            }}
                        
                        >Start Analysis</Button>
                    </Box>
                </Box>
                
            </Box>
           
            <Box 
                style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignSelf: 'center', 
                        width:'1100px',
                        height:'48px',
                        marginTop:'70px'
                }}
            >
                <Text size="6"  mt='9'> Result</Text>
            </Box>

            <Flex gap="3" mt="9"
                style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignSelf: 'center', 
                        width:'1100px',
                        height:'48px',
                        marginTop:'10px'
                }}
            >
                <Box alt='overall'
                    style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width:'326px',
                        height:'124px',
                        backgroundColor:'#EFF6FF',
                        borderRadius:'10px',
                    }}>
                    <Flex ml='5' mt='4'>   
                        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
                            <defs>
                                <clipPath id="clipPath9953424866">
                                    <path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#clipPath9953424866)">
                                <defs>
                                    <clipPath id="clipPath6225424466">
                                        <path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath6225424466)">
                                    <rect width="2.25" height="7.5" rx="0.375" ry="0.375" stroke-width="1.5" stroke-linejoin="round" transform="matrix(1 0 0 1 3 15)" stroke="rgb(75, 85, 99)" fill="transparent"/>
                                    <rect width="2.25" height="12" rx="0.375" ry="0.375" stroke-width="1.5" stroke-linejoin="round" transform="matrix(1 0 0 1 13.5 10.5)" stroke="rgb(75, 85, 99)" fill="transparent"/>
                                    <rect width="2.25" height="17.25" rx="0.375" ry="0.375" stroke-width="1.5" stroke-linejoin="round" transform="matrix(1 0 0 1 18.75 5.25)" stroke="rgb(75, 85, 99)" fill="transparent"/>
                                    <rect width="2.25" height="21" rx="0.375" ry="0.375" stroke-width="1.5" stroke-linejoin="round" transform="matrix(1 0 0 1 8.25 1.5)" stroke="rgb(75, 85, 99)" fill="transparent"/>
                                </g>
                            </g>
                        </svg>
                        <Text size="3" mt='1' ml='3' color='grey'>Overall Similarity</Text>
                    </Flex> 
                    < Heading size="8" mt='3' ml='5'>85%</Heading>
                </Box>

                <Box alt='visual'
                    style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width:'326px',
                        height:'124px',
                        backgroundColor:'#F0FDF4',
                        borderRadius:'10px',
                    }}>
                        <Flex ml='5' mt='4'>   
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <defs>
                                    <clipPath id="clipPath9009168568">
                                        <path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath9009168568)">
                                    <defs>
                                        <clipPath id="clipPath7895150065">
                                            <path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath7895150065)">
                                        <path d="M10.4841 0.75Q7.89602 0.75 5.43057 2.22904Q2.82869 3.78993 0.747817 6.77271Q0.750008 6.76955 0.750008 6.76955Q0.750008 6.76955 0.750007 6.76955Q2.46864 9.45978 4.90971 11.0393Q7.55364 12.75 10.4841 12.75Q13.39 12.75 16.0566 11.0331Q17.2916 10.238 18.3726 9.12787Q19.4226 8.0496 20.2484 6.7565Q20.2509 6.75263 20.2509 6.7507Q20.2509 6.74877 20.2499 6.74715Q19.4219 5.46834 18.3674 4.39216Q17.2792 3.28143 16.0416 2.48234Q13.3585 0.75 10.4841 0.75L10.4841 0.75ZM10.4841 -0.75Q13.8007 -0.75 16.8552 1.22219Q18.2334 2.11208 19.4389 3.34239Q20.5989 4.52639 21.5112 5.93535Q21.7509 6.30779 21.7509 6.7507Q21.7509 7.19361 21.5126 7.56382Q20.6043 8.9862 19.4473 10.1744Q18.2472 11.4068 16.8686 12.2943Q13.8312 14.25 10.4841 14.25Q7.11068 14.25 4.09485 12.2986Q1.38007 10.5421 -0.509903 7.58357Q-0.756729 7.20154 -0.749819 6.74677Q-0.74291 6.29199 -0.4824 5.91448Q1.78199 2.66864 4.65891 0.942752Q7.4806 -0.75 10.4841 -0.75L10.4841 -0.75Z" fill-rule="nonzero" transform="matrix(1 0 0 1 1.49995 5.25)" fill="rgb(75, 85, 99)"/>
                                        <circle cx="3.75" cy="3.75" r="3.75" stroke-width="1.5" transform="matrix(1 0 0 1 8.25 8.25)" stroke="rgb(75, 85, 99)" fill="transparent"/>
                                    </g>
                                </g>
                            </svg>
                        <Text size="3" mt='1' ml='3' color='grey'>Visual Similarity</Text>
                    </Flex> 
                    < Heading size="8" mt='3' ml='5'>92%</Heading>
                </Box>


                <Box alt='audio'
                    style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width:'326px',
                        height:'124px',
                        backgroundColor:'#FAF5FF',
                        borderRadius:'10px',
                    }}>
                        <Flex ml='5' mt='4'>   
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <defs>
                                    <clipPath id="clipPath7393094335">
                                        <path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath7393094335)">
                                    <defs>
                                        <clipPath id="clipPath5415245491">
                                            <path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath5415245491)">
                                        <path d="M16.6178 0.403527C16.3949 0.0543798 16.4973 -0.409332 16.8465 -0.632192C17.1956 -0.855051 17.6593 -0.752673 17.8822 -0.403527Q19.0755 1.46595 19.6161 3.14041Q20.25 5.10397 20.25 7.5Q20.25 9.904 19.6164 11.8761Q19.0666 13.5876 17.8782 15.4097C17.6519 15.7566 17.1872 15.8545 16.8403 15.6282C16.4934 15.4019 16.3955 14.9372 16.6218 14.5903Q17.7001 12.9369 18.1883 11.4173Q18.75 9.66896 18.75 7.5Q18.75 5.34011 18.1886 3.60127Q17.7073 2.11038 16.6178 0.403527ZM3.64462 3.75L7.92769 0.243284Q7.94276 0.23095 7.95844 0.219414Q8.21453 0.0310634 8.53131 0.00459057Q8.8481 -0.0218836 9.1319 0.121351Q9.4157 0.264587 9.58256 0.535166Q9.74942 0.805748 9.75 1.125L9.75 13.8764Q9.74942 14.1943 9.58256 14.4648Q9.4157 14.7354 9.13189 14.8787Q8.8481 15.0219 8.5313 14.9954Q8.21452 14.9689 7.95844 14.7806Q7.94276 14.7691 7.92769 14.7567L3.64451 11.2499L0.375 11.25Q-0.0909925 11.25 -0.420495 10.9205Q-0.75 10.591 -0.75 10.125L-0.75 4.875Q-0.75 4.40901 -0.420494 4.0795Q-0.0909896 3.75 0.375 3.75L3.64462 3.75ZM14.3523 2.62811C14.1435 2.2704 14.2642 1.81111 14.6219 1.60229C14.9796 1.39346 15.4389 1.51417 15.6477 1.87189Q16.4629 3.26833 16.8179 4.41226Q17.25 5.8049 17.25 7.5Q17.25 9.18487 16.8081 10.5956Q16.4554 11.7217 15.6504 13.1235C15.4441 13.4827 14.9857 13.6067 14.6265 13.4004C14.2673 13.1941 14.1433 12.7357 14.3496 12.3765Q15.073 11.1169 15.3767 10.1473Q15.75 8.95546 15.75 7.5Q15.75 6.03227 15.3853 4.8568Q15.0811 3.87654 14.3523 2.62811ZM0.75 5.25L3.65393 5.25Q3.91241 5.25136 4.1556 5.16342Q4.4003 5.07494 4.59028 4.91437L8.25 1.91802L8.25 13.082L4.5866 10.0826Q4.38447 9.91927 4.13911 9.83361Q3.89375 9.74795 3.63984 9.75L0.75 9.75L0.75 5.25ZM12.4089 3.83207C12.04 4.02047 11.8937 4.47224 12.0821 4.84113Q12.75 6.14894 12.75 7.5Q12.75 8.82983 12.0799 10.1632C11.8939 10.5333 12.0431 10.9841 12.4132 11.1701C12.7833 11.3561 13.2341 11.2069 13.4201 10.8368Q14.25 9.18556 14.25 7.5Q14.25 5.78806 13.4179 4.15887C13.2295 3.78999 12.7778 3.64367 12.4089 3.83207Z" fill-rule="evenodd" transform="matrix(1 0 0 1 2.25 4.5)" fill="rgb(75, 85, 99)"/>
                                    </g>
                                </g>
                            </svg>
                        <Text size="3" mt='1' ml='3' color='grey'>Audio Similarity</Text>
                    </Flex> 
                    < Heading size="8" mt='3' ml='5'>78%</Heading>
                </Box>


                <Box alt='time'
                    style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width:'326px',
                        height:'124px',
                        backgroundColor:'#FFF7ED',
                        borderRadius:'10px',
                    }}>
                        <Flex ml='5' mt='4'>   
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <defs>
                                    <clipPath id="clipPath2636453198">
                                        <path d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath2636453198)">
                                    <path d="M9 0.75Q7.32181 0.75 5.78982 1.39823Q4.3095 2.0246 3.16705 3.16705Q2.0246 4.3095 1.39823 5.78982Q0.75 7.32181 0.75 9Q0.75 10.6782 1.39823 12.2102Q2.0246 13.6905 3.16705 14.833Q4.3095 15.9754 5.78982 16.6018Q7.32181 17.25 9 17.25Q10.6782 17.25 12.2102 16.6018Q13.6905 15.9754 14.833 14.833Q15.9754 13.6905 16.6018 12.2102Q17.25 10.6782 17.25 9Q17.25 7.32181 16.6018 5.78982Q15.9754 4.3095 14.833 3.16705Q13.6905 2.0246 12.2102 1.39823Q10.6782 0.75 9 0.75ZM9 -0.75Q10.9825 -0.75 12.7947 0.0168071Q14.5444 0.75714 15.8936 2.10639Q17.2429 3.45564 17.9832 5.2053Q18.75 7.01753 18.75 9Q18.75 10.9825 17.9832 12.7947Q17.2429 14.5444 15.8936 15.8936Q14.5444 17.2429 12.7947 17.9832Q10.9825 18.75 9 18.75Q7.01753 18.75 5.2053 17.9832Q3.45564 17.2429 2.10639 15.8936Q0.757141 14.5444 0.0168071 12.7947Q-0.75 10.9825 -0.75 9Q-0.75 7.01753 0.0168071 5.2053Q0.757139 3.45564 2.10639 2.10639Q3.45564 0.75714 5.2053 0.0168071Q7.01753 -0.75 9 -0.75Z" fill-rule="nonzero" transform="matrix(1 0 0 1 3 3)" fill="rgb(75, 85, 99)"/>
                                    <path d="M0 -0.75C-0.41421 -0.75 -0.75 -0.41421 -0.75 0L-0.75 6.75Q-0.75 6.82387 -0.735589 6.89632Q-0.721178 6.96877 -0.69291 7.03701Q-0.664641 7.10526 -0.623602 7.16668Q-0.582563 7.2281 -0.53033 7.28033Q-0.478097 7.33256 -0.416678 7.3736Q-0.355258 7.41464 -0.287013 7.44291Q-0.218767 7.47118 -0.146318 7.48559Q-0.0738685 7.5 0 7.5L4.5 7.5C4.91421 7.5 5.25 7.16421 5.25 6.75C5.25 6.33579 4.91421 6 4.5 6L0.75 6L0.75 0C0.75 -0.41421 0.41421 -0.75 0 -0.75Z" fill-rule="evenodd" transform="matrix(1 0 0 1 12 6)" fill="rgb(75, 85, 99)"/>
                                </g>
                            </svg>
                        <Text size="3" mt='1' ml='3' color='grey'>Overall Similarity</Text>
                    </Flex> 
                    < Heading size="8" mt='3' ml='5'>95%</Heading>
                </Box>
            </Flex>
                
            <Box ml='5'
                style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignSelf: 'center', 
                        width:'1100px',
                        height:'600px',
                        marginTop:'120px'
                }}
            >
                <Tabs.Root defaultValue="Compare list">
                    <Tabs.List size='2'>
                        <Tabs.Trigger value="Compare list" >Compare List</Tabs.Trigger>
                        <Tabs.Trigger value="1vs1">1 vs 1</Tabs.Trigger>
                        <Tabs.Trigger value="1vs2">1 vs 2</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="Compare list">
                            <Table.Root>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColumnHeaderCell> </Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>1 vs 1</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>1 vs 2</Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>Visual Similarity</Table.RowHeaderCell>
                                        <Table.Cell>82%</Table.Cell>
                                        <Table.Cell>92%</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.RowHeaderCell>Audio Similarity</Table.RowHeaderCell>
                                        <Table.Cell>45%</Table.Cell>
                                        <Table.Cell>65%</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.RowHeaderCell>Time</Table.RowHeaderCell>
                                        <Table.Cell>100%</Table.Cell>
                                        <Table.Cell>87%</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </Tabs.Content>

                        <Tabs.Content value="1vs1">
                            <Text size="2">Overall similarity score: 95%</Text>
                            <br/>
                            <Text size="2">Visual similarity score: 80%</Text>
                            <br/>
                            <Text size="2">Audio similarity score: 70%</Text>
                            <br/>
                        </Tabs.Content>

                        <Tabs.Content value="1vs2">
                            <Text size="2">Overall similarity score: 95%</Text>
                            <br/>
                            <Text size="2">Visual similarity score: 80%</Text>
                            <br/>
                            <Text size="2">Audio similarity score: 70%</Text>
                            <br/>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Box>



        </Theme>
    );
}