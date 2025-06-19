import React, {useState} from "react";
import { Button, Theme, Flex, Box, Section, Heading, Grid, Container } from '@radix-ui/themes';
import Navigator from '../navigator/index.js'
import "@radix-ui/themes/styles.css";
import './index.css'
import video_1 from '../../video/1-1.mp4';
import video_2 from '../../video/1-2.mp4';


export default function Vote() {
    const videoRef = React.useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    }

    const [infringingVotes, setInfringingVotes] = useState(57);
    const [notInfringingVotes, setNotInfringingVotes] = useState(29);
    const [hasVoted, setHasVoted] = useState(false);
    const [userVote, setUserVote] = useState(null);

    const handleVote = (voteType) => {
        if (hasVoted) return;
        
        setUserVote(voteType);
        
        if (voteType === 'infringing') {
            setInfringingVotes(prev => prev + 1);
        } else {
            setNotInfringingVotes(prev => prev + 1);
        }
        
        setHasVoted(true);
    };

    const resetVotes = () => {
        setInfringingVotes(57);
        setNotInfringingVotes(29);
        setHasVoted(false);
        setUserVote(null);
    };

    const totalVotes = infringingVotes + notInfringingVotes;
    const infringingPercentage = totalVotes > 0 ? (infringingVotes / totalVotes) * 100 : 0;
    const notInfringingPercentage = totalVotes > 0 ? (notInfringingVotes / totalVotes) * 100 : 0;



    return (
        <Theme>
            <Box
                style={{ 
                        backgroundColor: "#f5f8fecc",
                        position: 'relative',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignSelf: 'center', 
            }}>
                <Flex gap='8' maxWidth='1300px' 
                    style={{ 
                            backgroundColor: "#f5f8fecc",
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                            marginBottom:'100px',
                }}>
                    <Box mt='9' 
                        style={{ 
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                    }}>
                        <video ref={videoRef} controls 
                            style={{width:'603px', height:'337px'}}
                        >
                            <source src={video_1} type="video/mp4"/>
                        </video>
                    </Box>
                    <Box mt='9' 
                        style={{ 
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            alignSelf: 'center', 
                    }}>
                        <video ref={videoRef} controls 
                            style={{width:'603px', height:'337px'}}
                        >
                            <source src={video_2} type="video/mp4"/>
                        </video>
                    </Box>
                </Flex>

                <Box maxWidth='500px' style={{
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    alignSelf: 'center' ,
                    height:'200px',
                }}>
                    <h2 className="vote-title">Is this content infringing?</h2>
                    
                    {!hasVoted ? (
                        <div className="vote-buttons">
                        <button 
                            className="vote-button infringing-btn"
                            onClick={() => handleVote('infringing')}
                        >
                            Infringing
                        </button>
                        <button 
                            className="vote-button not-infringing-btn"
                            onClick={() => handleVote('not-infringing')}
                        >
                            Not infringing
                        </button>
                        </div>
                    ) : (
                        <div className="vote-results">
                        <div className="result-bar" >
                            <div 
                            className="bar-segment infringing-bar" 
                            style={{ width: `${infringingPercentage}%` }}
                            >
                            <span className="bar-label">{infringingVotes}</span>
                            </div>
                            <div 
                            className="bar-segment not-infringing-bar" 
                            style={{ width: `${notInfringingPercentage}%` }}
                            >
                            <span className="bar-label">{notInfringingVotes}</span>
                            </div>
                        </div>
                        
                        <button 
                            className="reset-button"
                            onClick={resetVotes}
                        >
                            Vote Again
                        </button>
                        </div>
                    )}
                </Box>
            </Box>
        </Theme>
    );
}