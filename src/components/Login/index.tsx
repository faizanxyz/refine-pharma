import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();

    function login_navigate() {
        navigate("/mainPage");
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            bgcolor="#585ce4"
            width="100vw"
        >
            <Box
                textAlign="center"
                height="476px"
                width="380px"
            >
                <Box>
                    <img src="./assets/Layer_1.png" style={{ padding: '12.13px', gap: '12.13px' }} />
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: '367px',
                            borderRadius: '8px',
                        }}
                    >
                        <Box sx={{ width: '224px', height: '24px' }}>
                            <Typography variant="h6" sx={{ color: '#262626', fontSize: '20px', lineHeight: '24.2px', marginTop: '5px', position: 'relative', top: '35px' }}>
                                Sign into your account
                            </Typography>
                        </Box>

                        <Box position='relative' top='67px'>
                            <label htmlFor="email" style={{ marginRight: '283px', fontSize: '14px' }}>Email:</label>
                            <TextField
                                sx={{
                                    height:30,
                                   width:'330px',
                                    "& .MuiInputBase-input": {
                                        height: "9px", // adjust as needed
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                    },
                                    
                                    "&::placeholder": { // Target placeholder text
                                        fontSize: '5px', // Adjust font size as needed
                                        color: 'gray', // Optional: adjust placeholder color
                                      },
                                  
                                }}
                                
                                placeholder='Enter your email'
                            />
                        </Box>

                        <Box position='relative' top='85px'>
                            <label htmlFor="password" style={{ marginRight: '260px', fontSize: '14px', lineHeight: '20px' }}>Password:</label>
                            <TextField
                                sx={{
                                    height:30,
                                   width:'330px',
                                    "& .MuiInputBase-input": {
                                        height: "9px", // adjust as needed
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                    },
                                     
                                    "&::placeholder": { // Target placeholder text
                                        fontSize: 5, // Adjust font size as needed
                                        color: 'gray', // Optional: adjust placeholder color
                                      },
                                }}
                                placeholder='Enter your password'
                            />
                        </Box>

                        <Button
                            sx={{
                                width: '330px',
                                height: '40px',
                                backgroundColor: '#262627',
                                color: 'white',
                                marginTop: '130px',
                            }}
                            onClick={login_navigate}
                        >
                            Log in
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
