import React from "react";
import { Button, Theme, Flex, Box, Text, Heading, 
    Grid, Section,Card,Inset, Strong,  } from '@radix-ui/themes';
import './index.css'
import reactImg from '../../img/react_img.png'
import infring_pic_1 from '../../img/dash_infringing_pic_1.png'
import infring_pic_2 from '../../img/dash_infringing_pic_2.png'
import card_2_pic from '../../img/dash_pic_card_2.png'

export default function Home() {
  return (
    <Theme>
      {/* first section of Dashboard */}
        <Flex py="8" width='100%'
            style={{ 
                backgroundColor: "#f5f8fecc", 
                position: 'relative',
                marginLeft: 'auto',
                marginRight: 'auto',    
            }}
            >
            <Section height="300px" />
            <Flex width='1300px'
                style={{
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center',
                    }}
            >
            
            <Box
                style={{
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center',
                    }}
            >
                <Heading  weight="bold" as="h2" size="8" wrap="balance">
                    Blockchain-Powered Video Copyright Protection
                </Heading>
                <br/>
                <Text color="gray">
                    Make your intelligence inviolable
                </Text>
                <br/><br/>
                <Flex gap="2">
                    <Button style={{backgroundColor:'#2b50aa', color:'#fdfdfe', ':hover':{backgroundColor:'#1d4098'}}}> Protect Your Content </Button>
                    <Button variant="outline" >See How It Works</Button>
                </Flex> 
                <Flex gap='3' mt='4'>
                    <Box>
                        <Text style={{color:'#2b50aa'}} size="3" weight="bold" >
                            1M+
                        </Text>
                        <br/>
                        <Text size="1" color="gray">
                            Videos Protected
                        </Text>
                    </Box>
                    <Box>
                        <Text style={{color:'#2b50aa'}} size="3" weight="bold" >
                            99.9%
                        </Text>
                        <br/>
                        <Text size="1" color="gray">
                            Detection Accuracy
                        </Text>
                    </Box>
                    <Box>
                        <Text style={{color:'#2b50aa'}} size="3" weight="bold" >
                            24/7
                        </Text>
                        <br/>
                        <Text size="1" color="gray">
                            Monitoring
                        </Text>
                    </Box>
                </Flex>
                <br/>
                {/* <Text size="1" color="gray">
                        This is a demo version of the video copyright protection service. It is not intended for production use.
                </Text> */}
            </Box>
            <img src={reactImg} alt="react" 
            style={{
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center',
                    width: '500px', 
                    height: '300px',
                    borderRadius: '10px',
                    }}>
            </img>
            </Flex>
        </Flex>

    {/* Second section of Dashboard */}
        <Flex gap='3' mt='8' ml='4' mr='4' mb='8' maxWidth='1300px' 
            style={{ 
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignSelf: 'center', 
                    }}
                >
            <Box Width="394px" 
                style={{ 
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center', 
                    height:'261px',
                }}>
                <Card size="2" alt='1st card' style={{ height:'271px'}}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <Flex mt='4' ml='4' mb='4' >
                            <svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <clipPath id="clipPath4834670043">
                                        <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath4834670043)">
                                    <defs>
                                        <clipPath id="clipPath2948916129">
                                            <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath2948916129)">
                                        <path d="M4 5.5C4 3.98122 4.53697 2.68485 5.61091 1.61091C6.68486 0.536971 7.98122 0 9.5 0C11.0188 0 12.3151 0.536971 13.3891 1.61091C14.463 2.68485 15 3.98122 15 5.5C15 7.01878 14.463 8.31515 13.3891 9.38909C12.3151 10.463 11.0188 11 9.5 11C7.98122 11 6.68486 10.463 5.61091 9.38909C4.53697 8.31515 4 7.01878 4 5.5ZM17 8.5C17 7.25736 17.4393 6.1967 18.318 5.31802C19.1967 4.43934 20.2574 4 21.5 4C22.7426 4 23.8033 4.43934 24.682 5.31802C25.5607 6.1967 26 7.25736 26 8.5C26 9.74264 25.5607 10.8033 24.682 11.682C23.8033 12.5607 22.7426 13 21.5 13C20.2574 13 19.1967 12.5607 18.318 11.682C17.4393 10.8033 17 9.74264 17 8.5ZM0 22.5C0.000905355 19.8773 0.928787 17.6388 2.78364 15.7846C4.6385 13.9304 6.87729 13.0033 9.5 13.0033C12.1227 13.0033 14.3615 13.9304 16.2164 15.7846C18.0712 17.6388 18.9991 19.8773 19 22.5L18.9987 22.6627C18.9958 22.835 18.9513 22.9959 18.8653 23.1452C18.7792 23.2946 18.6623 23.4137 18.5147 23.5027C17.1541 24.322 15.7086 24.9436 14.1781 25.3676C12.6475 25.7916 11.0882 26.0024 9.5 26C6.204 26 3.11867 25.088 0.486666 23.5027C0.338738 23.4139 0.221621 23.2948 0.135315 23.1455C0.0490099 22.9961 0.00434913 22.8352 0.00133308 22.6627L0 22.5ZM21 22.504L20.9987 22.696C20.9949 22.9182 20.9669 23.1373 20.9144 23.3533C20.862 23.5692 20.7866 23.7768 20.688 23.976C21.8518 24.0478 23.0054 23.9695 24.1489 23.7413C25.2923 23.5131 26.3876 23.1424 27.4347 22.6293C27.5996 22.5487 27.7323 22.4315 27.8327 22.2778C27.9331 22.1241 27.9871 21.9555 27.9947 21.772C28.0975 19.3288 27.1297 17.4316 25.0914 16.0807C23.0531 14.7297 20.9288 14.5775 18.7187 15.624C19.4608 16.6164 20.0269 17.7007 20.4169 18.8769C20.8069 20.0531 21.0022 21.2648 21 22.504Z" fill-rule="nonzero" transform="matrix(1 0 0 1 2 3)" fill="rgb(43, 80, 170)"/>
                                    </g>
                                </g>
                            </svg>
                            <Text size='4' weight='bold' ml='2' mt='1'>
                                Community-Driven Detection
                            </Text>
                        </Flex>

                        <Flex gap='2' ml='4'>
                            <img
                                src={infring_pic_1}
                                alt="Bold typography"
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: 177.66,
                                    height: 120,
                                    borderRadius: "10px",
                                }}
                            />
                            <img
                                src={infring_pic_2}
                                alt="Bold typography"
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: 177.66,
                                    height: 120,
                                    borderRadius: "10px",
                                }}
                            />
                        </Flex>
                    </Inset>
                    <Flex gap='2'>
                        <Button radius="large" style={{width:'177px',backgroundColor:'#34D399', color:'white', ':hover':{backgroundColor:'#1d4098'}}}>
                            Infringing
                        </Button>
                        <Button radius="large" color="gray" variant="surface" style={{width:'177px'}}>
                            Not Infringing
                        </Button>
                    </Flex>
                    <br/>
                </Card>
            </Box>
            
            <Box  
                style={{ 
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center', 
                    width:'394px',
                    height:'261px',
                }}>
                <Card size="2" alt='2nd card' style={{ height:'271px'}}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <Flex mt='4' ml='4' mb='4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <clipPath id="clipPath3847902615">
                                        <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath3847902615)">
                                    <path d="M25 14L23.5 14L23.5 9.5C23.5 4.2625 19.2375 0 14 0C8.7625
                                     0 4.5 4.2625 4.5 9.5L4.5 14L3 14C1.34375 14 0 15.3438 0 17L0 29C0
                                      30.6562 1.34375 32 3 32L25 32C26.6562 32 28 30.6562 28 29L28 17C28
                                       15.3438 26.6562 14 25 14ZM18.5 14L9.5 14L9.5 9.5C9.5 7.01875 11.5188
                                        5 14 5C16.4813 5 18.5 7.01875 18.5 9.5L18.5 14Z" 
                                        fill-rule="nonzero" transform="matrix(1 0 0 1 2 0)" fill="rgb(43, 80, 170)"/>
                                </g>
                            </svg>
                            <Text size='4' weight='bold' ml='2' mt='1'>
                                Instant Protection
                            </Text>
                        </Flex>

                        <Flex ml='3'>
                            
                        </Flex>

                    </Inset>
                    
                    <br/>
                </Card>
            </Box>
            

            <Box maxWidth="399px"  maxHeight='271px'
                style={{ 
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center', 
                    width:'394px',
                    height:'261px',
                }}>
                <Card size="2" alt='3rd card' style={{ height:'271px'}}>
                    <Inset clip="padding-box" side="top" pb="current">
                        <Flex mt='4' ml='4' mb='4'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <clipPath id="clipPath9822790872">
                                        <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath9822790872)">
                                    <path d="M3.5 30L1.5 30C1.08579 30 0.732233 29.8536 0.43934 29.5607C0.146447 29.2678 0 28.9142 0 28.5L0 19.5C0 19.0858 0.146447 18.7322 0.43934 18.4393C0.732233 18.1464 1.08579 18 1.5 18L3.5 18C3.91421 18 4.26777 18.1464 4.56066 18.4393C4.85355 18.7322 5 19.0858 5 19.5L5 28.5C5 28.9142 4.85355 29.2678 4.56066 29.5607C4.26777 29.8536 3.91421 30 3.5 30ZM17.5 30L15.5 30C15.0858 30 14.7322 29.8536 14.4393 29.5607C14.1464 29.2678 14 28.9142 14 28.5L14 13.5C14 13.0858 14.1464 12.7322 14.4393 12.4393C14.7322 12.1464 15.0858 12 15.5 12L17.5 12C17.9142 12 18.2678 12.1464 18.5607 12.4393C18.8536 12.7322 19 13.0858 19 13.5L19 28.5C19 28.9142 18.8536 29.2678 18.5607 29.5607C18.2678 29.8536 17.9142 30 17.5 30ZM24.5 30L22.5 30C22.0858 30 21.7322 29.8536 21.4393 29.5607C21.1464 29.2678 21 28.9142 21 28.5L21 6.5C21 6.08579 21.1464 5.73223 21.4393 5.43934C21.7322 5.14645 22.0858 5 22.5 5L24.5 5C24.9142 5 25.2678 5.14645 25.5607 5.43934C25.8536 5.73223 26 6.08579 26 6.5L26 28.5C26 28.9142 25.8536 29.2678 25.5607 29.5607C25.2678 29.8536 24.9142 30 24.5 30ZM10.5 30L8.5 30C8.08579 30 7.73223 29.8536 7.43934 29.5607C7.14645 29.2678 7 28.9142 7 28.5L7 1.5C7 1.08579 7.14645 0.732233 7.43934 0.43934C7.73223 0.146447 8.08579 0 8.5 0L10.5 0C10.9142 0 11.2678 0.146447 11.5607 0.43934C11.8536 0.732233 12 1.08579 12 1.5L12 28.5C12 28.9142 11.8536 29.2678 11.5607 29.5607C11.2678 29.8536 10.9142 30 10.5 30Z" fill-rule="nonzero" transform="matrix(1 0 0 1 3 1)" fill="rgb(43, 80, 170)"/>
                                </g>
                            </svg>
                            
                            <Text size='4' weight='bold' ml='2' mt='1'>
                                Smart Analytics
                            </Text>
                        </Flex>

                        <Flex gap='2' ml='4' mt='2'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                <defs>
                                    <clipPath id="clipPath1337236954">
                                        <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath1337236954)">
                                    <defs>
                                        <clipPath id="clipPath0790671774">
                                            <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath0790671774)">
                                        <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                    </g>
                                </g>
                            </svg>
                            <Text>
                                Copyright Protection Reports
                            </Text>
                        </Flex>

                        <Flex gap='2' ml='4' mt='2'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                <defs>
                                    <clipPath id="clipPath1337236954">
                                        <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath1337236954)">
                                    <defs>
                                        <clipPath id="clipPath0790671774">
                                            <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath0790671774)">
                                        <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                    </g>
                                </g>
                            </svg>
                            <Text>
                                Industry Analysis
                            </Text>
                        </Flex>

                        <Flex gap='2' ml='4' mt='2'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                <defs>
                                    <clipPath id="clipPath1337236954">
                                        <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath1337236954)">
                                    <defs>
                                        <clipPath id="clipPath0790671774">
                                            <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath0790671774)">
                                        <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                    </g>
                                </g>
                            </svg>
                            <Text>
                                Usage Statistics
                            </Text>
                        </Flex>

                        <Flex gap='2' ml='4' mt='2' mb='1'>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                <defs>
                                    <clipPath id="clipPath1337236954">
                                        <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath1337236954)">
                                    <defs>
                                        <clipPath id="clipPath0790671774">
                                            <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath0790671774)">
                                        <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                    </g>
                                </g>
                            </svg>
                            <Text>
                                Trending Insights
                            </Text>
                        </Flex>

                    </Inset>

                    <br/>
                </Card>
            </Box>
        </Flex>
    {/* 2nd section ends here */}
    

    {/* 3rd section starts here */}
        <Flex width='100%' 
            style={{ 
                backgroundColor: "#f5f8fecc",
                position: 'relative',
                marginLeft: 'auto',
                marginRight: 'auto',                    
            }}>
            <Section height="300px" />
            <Box width='100%' align='center' mt='8'>
                <Heading align="center">
                    How It Works
                </Heading> 
            
            
                <Flex gap='4' mt='4' mb='8'
                    style={{
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignSelf: 'center', 
                        width:'1300px',
                    }}
                >
                    <Box width='320px' height='140px'  mt='8'>
                        <Box  width='100%' align='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                <path d="M32 0C14.3269 0 0 14.3269 0 32L0 32.048C0 49.7211 14.2789 64 31.952 64L32 64C49.6731 64 64 49.7211 64 32.048L64 32C64 14.3269 49.7211 0 32.048 0L32 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)" fill="rgb(43, 80, 170)"/>
                                <defs>
                                    <clipPath id="clipPath8524076103">
                                        <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath8524076103)">
                                    <defs>
                                        <clipPath id="clipPath1781217811">
                                            <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath1781217811)">
                                        <path d="M18.5 23.9953L13.5 23.9953C12.6687 23.9953 12 23.3266 12 22.4953L12 11.9953L6.51875 11.9953C5.40625 11.9953 4.85 10.6516 5.6375 9.86406L15.1438 0.351562C15.6125 -0.117188 16.3813 -0.117188 16.85 0.351562L26.3625 9.86406C27.15 10.6516 26.5938 11.9953 25.4812 11.9953L20 11.9953L20 22.4953C20 23.3266 19.3312 23.9953 18.5 23.9953ZM32 23.4953L32 30.4953C32 31.3266 31.3312 31.9953 30.5 31.9953L1.5 31.9953C0.66875 31.9953 0 31.3266 0 30.4953L0 23.4953C0 22.6641 0.66875 21.9953 1.5 21.9953L10 21.9953L10 22.4953C10 24.4266 11.5688 25.9953 13.5 25.9953L18.5 25.9953C20.4312 25.9953 22 24.4266 22 22.4953L22 21.9953L30.5 21.9953C31.3312 21.9953 32 22.6641 32 23.4953ZM24.25 28.9953C24.25 28.3078 23.6875 27.7453 23 27.7453C22.3125 27.7453 21.75 28.3078 21.75 28.9953C21.75 29.6828 22.3125 30.2453 23 30.2453C23.6875 30.2453 24.25 29.6828 24.25 28.9953ZM28.25 28.9953C28.25 28.3078 27.6875 27.7453 27 27.7453C26.3125 27.7453 25.75 28.3078 25.75 28.9953C25.75 29.6828 26.3125 30.2453 27 30.2453C27.6875 30.2453 28.25 29.6828 28.25 28.9953Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16.0047)" fill="rgb(255, 255, 255)"/>
                                    </g>
                                </g>
                            </svg>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text weight='bold' size='4' mt='2'>
                                Upload your content
                            </Text>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text align="center" color='gray' size='4' mt='2'>
                                Securely upload your videos
                            </Text>
                        </Box>
                    </Box>
                    
                    <Box width='320px' height='140px' ml='8' mt='8'>
                        <Box  width='100%' align='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                <path d="M32 0C14.3269 0 0 14.3269 0 32L0 32.048C0 49.7211 14.2789 64 31.952 64L32 64C49.6731 64 64 49.7211 64 32.048L64 32C64 14.3269 49.7211 0 32.048 0L32 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)" fill="rgb(43, 80, 170)"/>
                                <defs>
                                    <clipPath id="clipPath3573546967">
                                        <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath3573546967)">
                                    <defs>
                                        <clipPath id="clipPath1717931860">
                                            <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath1717931860)">
                                        <path d="M25 14L23.5 14L23.5 9.5C23.5 4.2625 19.2375 0 14 0C8.7625 0 4.5 4.2625 4.5 9.5L4.5 14L3 14C1.34375 14 0 15.3438 0 17L0 29C0 30.6562 1.34375 32 3 32L25 32C26.6562 32 28 30.6562 28 29L28 17C28 15.3438 26.6562 14 25 14ZM18.5 14L9.5 14L9.5 9.5C9.5 7.01875 11.5188 5 14 5C16.4813 5 18.5 7.01875 18.5 9.5L18.5 14Z" fill-rule="nonzero" transform="matrix(1 0 0 1 18 16)" fill="rgb(255, 255, 255)"/>
                                    </g>
                                </g>
                            </svg>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text weight='bold' size='4' mt='2'>
                                Secure with Blockchain
                            </Text>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text align="center" color='gray' size='4' mt='2'>
                                Get instant copyright protection
                            </Text>
                        </Box>
                    </Box>
                    

                    <Box width='320px' height='140px' ml='8' mt='8'>
                        <Box  width='100%' align='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                <path d="M32 0C14.3269 0 0 14.3269 0 32L0 32.048C0 49.7211 14.2789 64 31.952 64L32 64C49.6731 64 64 49.7211 64 32.048L64 32C64 14.3269 49.7211 0 32.048 0L32 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)" fill="rgb(43, 80, 170)"/>
                                <defs>
                                    <clipPath id="clipPath1665600007">
                                        <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath1665600007)">
                                    <defs>
                                        <clipPath id="clipPath9584028507">
                                            <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath9584028507)">
                                        <path d="M12 1Q9.76242 1 7.71976 1.86431Q5.746 2.69947 4.22273 4.22273Q2.69947 5.746 1.86431 7.71976Q1 9.76242 1 12Q1 14.2376 1.86431 16.2802Q2.69946 18.254 4.22273 19.7773Q5.746 21.3005 7.71976 22.1357Q9.76242 23 12 23Q14.2376 23 16.2802 22.1357Q18.254 21.3005 19.7773 19.7773Q21.3005 18.254 22.1357 16.2802Q23 14.2376 23 12Q23 9.76242 22.1357 7.71976Q21.3005 5.746 19.7773 4.22273Q18.254 2.69946 16.2802 1.86431Q14.2376 1 12 1ZM12 -1Q14.6433 -1 17.0596 0.0224094Q19.3925 1.00952 21.1915 2.80852Q22.9905 4.60751 23.9776 6.9404Q25 9.3567 25 12Q25 14.6433 23.9776 17.0596Q22.9905 19.3925 21.1915 21.1915Q19.3925 22.9905 17.0596 23.9776Q14.6433 25 12 25Q9.3567 25 6.9404 23.9776Q4.60751 22.9905 2.80852 21.1915Q1.00952 19.3925 0.0224094 17.0596Q-1 14.6433 -1 12Q-1 9.3567 0.0224094 6.9404Q1.00952 4.60752 2.80852 2.80852Q4.60752 1.00952 6.9404 0.0224094Q9.3567 -1 12 -1Z" fill-rule="nonzero" transform="matrix(1 0 0 1 20 20)" fill="rgb(255, 255, 255)"/>
                                        <path d="M0 -1C-0.55228 -1 -1 -0.55228 -1 0L-1 9Q-1 9.09849 -0.980785 9.19509Q-0.96157 9.29169 -0.923879 9.38268Q-0.886188 9.47368 -0.83147 9.55557Q-0.776751 9.63746 -0.707107 9.70711Q-0.637463 9.77675 -0.55557 9.83147Q-0.473678 9.88619 -0.382683 9.92388Q-0.291689 9.96157 -0.19509 9.98079Q-0.0984914 10 0 10L6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8L1 8L1 0C1 -0.55228 0.55228 -1 0 -1Z" fill-rule="evenodd" transform="matrix(1 0 0 1 32 24)" fill="rgb(255, 255, 255)"/>
                                    </g>
                                </g>
                            </svg>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text weight='bold' size='4' mt='2'>
                                24/7 Monitoring
                            </Text>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text align="center" color='gray' size='4' mt='2'>
                                Continuous content surveillance
                            </Text>
                        </Box>
                    </Box>


                    <Box width='320px' height='140px' ml='8' mt='8'>
                        <Box  width='100%' align='center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                                <path d="M32 0C14.3269 0 0 14.3269 0 32L0 32.048C0 49.7211 14.2789 64 31.952 64L32 64C49.6731 64 64 49.7211 64 32.048L64 32C64 14.3269 49.7211 0 32.048 0L32 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)" fill="rgb(43, 80, 170)"/>
                                <defs>
                                    <clipPath id="clipPath2307695208">
                                        <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clipPath2307695208)">
                                    <defs>
                                        <clipPath id="clipPath1855952873">
                                            <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 16 16)"/>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipPath1855952873)">
                                        <path d="M14 32C16.2075 32 17.9982 30.2094 17.9982 28L10.0019 28C10.0019 30.2094 11.7925 32 14 32ZM27.4619 22.6431C26.2544 21.3456 23.995 19.3937 23.995 13C23.995 8.14375 20.59 4.25625 15.9988 3.3025L15.9988 2C15.9988 0.895625 15.1038 0 14 0C12.8963 0 12.0013 0.895625 12.0013 2L12.0013 3.3025C7.41004 4.25625 4.00504 8.14375 4.00504 13C4.00504 19.3937 1.74567 21.3456 0.538168 22.6431C0.163168 23.0462 -0.0030818 23.5281 4.32121e-05 24C0.00691821 25.025 0.811293 26 2.00629 26L25.9938 26C27.1888 26 27.9938 25.025 28 24C28.0032 23.5281 27.8369 23.0456 27.4619 22.6431Z" fill-rule="nonzero" transform="matrix(1 0 0 1 18 16)" fill="rgb(255, 255, 255)"/>
                                    </g>
                                </g>
                            </svg>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text weight='bold' size='4' mt='2'>
                                Instant Alerts
                            </Text>
                        </Box>
                        <Box width='100%' align='center'>
                            <Text align="center" color='gray' size='4' mt='2'>
                                Get notified of infringements
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        {/* 3rd section ends here */}

        {/* 4th section starts here */}
        <Flex gap='3' mt='8' ml='4' mr='4' mb='8' maxWidth='1300px' 
            style={{ 
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center', 
                }}>
            <Box width='100%' align='center' mt='4' mb='4'>
                <Heading align="center"mb='4'>
                    Choose Your Plan
                </Heading> 
                <Flex gap='2' mt='6' mb='8'>
                    <Box Width="394px" 
                        style={{ 
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                            height:'261px',
                        }}>
                        
                        <Card  asChild size="2" alt='1st card' 
                            style={{ 
                                height:'291px',
                                width:'394px',
                                focus: 'outline',
                            }}>
                            <a href="#">
                            <Inset clip="padding-box" side="top" pb="current">
                                <Flex mt='4' ml='4' mb='4' >
                                    <Text size='4' weight='bold'  mt='1'>
                                        Starter
                                    </Text>
                                </Flex>

                                <Flex ml='4' mt='2' mb='4'>
                                    <Heading size='6' weight='bold'>
                                        $29
                                    </Heading>
                                </Flex>
                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        5 Videos Uploads
                                    </Text>
                                </Flex>
                                
                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Basic Analytics
                                    </Text>
                                </Flex>

                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Email Support
                                    </Text>
                                </Flex>

                                <Flex  width='371' align='center' mt='8' mb='2'>
                                    <Button variant="outline" 
                                        style={{
                                            width: '90%',
                                            position: 'relative',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            alignSelf: 'center', 
                                        }}>
                                        Get Started
                                    </Button>
                                </Flex>
                            </Inset>
                            <br/>
                        </a>
                        </Card>
                    </Box>
                    
                    {/* Professional */}
                    <Box Width="394px" 
                        style={{ 
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                            height:'261px',
                        }}>
                        
                        <Card  asChild size="2" alt='1st card' 
                            style={{ 
                                height:'291px',
                                width:'394px',
                                focus: 'outline',
                            }}>
                            <a href="#">
                            <Inset clip="padding-box" side="top" pb="current">
                                <Flex mt='4' ml='4' mb='4' >
                                    <Text size='4' weight='bold'  mt='1'>
                                        Professional
                                    </Text>
                                </Flex>

                                <Flex ml='4' mt='2' mb='4'>
                                    <Heading size='6' weight='bold'>
                                        $99
                                    </Heading>
                                </Flex>
                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Unlimited Uploads
                                    </Text>
                                </Flex>
                                
                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Advanced Analytics
                                    </Text>
                                </Flex>

                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Prioprity Support
                                    </Text>
                                </Flex>

                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        API Access
                                    </Text>
                                </Flex>

                                <Flex  width='371' align='center' mt='4' mb='2'>
                                    <Button variant="outline" 
                                        style={{
                                            width: '90%',
                                            position: 'relative',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            alignSelf: 'center', 
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </Flex>
                            </Inset>
                            <br/>
                        </a>
                        </Card>
                    </Box>

                    {/* Enterprise */}                        
                    <Box Width="394px" 
                        style={{ 
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                            height:'261px',
                        }}>
                        
                        <Card  asChild size="2" alt='1st card' 
                            style={{ 
                                height:'291px',
                                width:'394px',
                                focus: 'outline',
                            }}>
                            <a href="#">
                            <Inset clip="padding-box" side="top" pb="current">
                                <Flex mt='4' ml='4' mb='4' >
                                    <Text size='4' weight='bold'  mt='1'>
                                        Enterprise
                                    </Text>
                                </Flex>

                                <Flex ml='4' mt='2' mb='4'>
                                    <Heading size='6' weight='bold'>
                                        Custom
                                    </Heading>
                                </Flex>
                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Custom Solutions
                                    </Text>
                                </Flex>
                                
                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Dedicated Support
                                    </Text>
                                </Flex>

                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        SLA Guarantee
                                    </Text>
                                </Flex>

                                <Flex gap='2' ml='4' mt='2'>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
                                        <defs>
                                            <clipPath id="clipPath1337236954">
                                                <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#clipPath1337236954)">
                                            <defs>
                                                <clipPath id="clipPath0790671774">
                                                    <path d="M0 0L20 0L20 20L0 20L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#clipPath0790671774)">
                                                <path d="M19.375 9.6875C19.375 15.0378 15.0378 19.375 9.6875 19.375C4.33723 19.375 0 15.0378 0 9.6875C0 4.33723 4.33723 0 9.6875 0C15.0378 0 19.375 4.33723 19.375 9.6875ZM8.56695 14.817L15.7545 7.62945C15.9985 7.38539 15.9985 6.98965 15.7545 6.74559L14.8706 5.86172C14.6265 5.61762 14.2308 5.61762 13.9867 5.86172L8.125 11.7234L5.38832 8.98668C5.14426 8.74262 4.74852 8.74262 4.50441 8.98668L3.62055 9.87055C3.37648 10.1146 3.37648 10.5104 3.62055 10.7544L7.68305 14.8169C7.92715 15.061 8.32285 15.061 8.56695 14.817Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0.3125 0.3125)" fill="rgb(52, 211, 153)"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <Text>
                                        Custom Integration
                                    </Text>
                                </Flex>

                                <Flex  width='371' align='center' mt='4' mb='2'>
                                    <Button variant="outline" 
                                        style={{
                                            width: '90%',
                                            position: 'relative',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            alignSelf: 'center', 
                                        }}>
                                        Get Started
                                    </Button>
                                </Flex>
                            </Inset>
                            <br/>
                        </a>
                        </Card>
                    </Box>

                </Flex>
            </Box>
        </Flex>
{/* 4th section starts here */}


{/* footer for only home page */}
    <Flex width='100%' gap='2'
        style={{ 
            backgroundColor: "#111827",
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',                    
        }}>
        <Section height="400px" />
            <Flex gap='2' 
                style={{ 
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width:'1300px',                    
            }}>
            <Box width='280px' height='160px' mt='9'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <defs>
                        <clipPath id="clipPath2431258992">
                            <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#clipPath2431258992)">
                        <defs>
                            <clipPath id="clipPath4096649282">
                                <path d="M0 0L32 0L32 32L0 32L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 -0 -0)"/>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#clipPath4096649282)">
                            <path d="M28.1562 5.22969L16.1562 0.229691C15.7871 0.0765638 15.4028 0 15.0031 0C14.6035 0 14.2191 0.0765638 13.85 0.229691L1.85 5.22969C0.73125 5.69219 0 6.78594 0 7.99844C0 20.4047 7.15625 28.9797 13.8438 31.7672C14.5813 32.0734 15.4125 32.0734 16.15 31.7672C21.5063 29.5359 30 21.8297 30 7.99844C30 6.78594 29.2687 5.69219 28.1562 5.22969ZM15.0063 27.8922L15 4.07969L25.9937 8.66094C25.7875 18.1234 20.8625 24.9797 15.0063 27.8922Z" fill-rule="nonzero" transform="matrix(1 0 0 1 1 0.00155838)" fill="rgb(52, 211, 153)"/>
                        </g>
                    </g>
                </svg>
                <Text size='6' weight='bold' ml='2'
                    style={{
                        color: '#FFFFFF',
                    }}>
                        VidGuard
                </Text>
                <Flex mt='4'>
                    <Text size='3' ml='2'
                        style={{
                            color: 'grey'
                        }}>
                            Protecting your content with blockchain technology
                    </Text>
                </Flex>
            </Box>


            <Box width='280px' height='160px' >
                
            </Box>

            <Box width='280px' height='160px' >
                
            </Box>

            <Box width='280px' height='160px' >
                
            </Box>
        </Flex>

    </Flex>

</Theme>
  );
}
