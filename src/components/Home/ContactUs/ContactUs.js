import { Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';

const ContactUs = () => {
    const contactBg = {
        background: `url(${bg})`,
        marginTop: '150px',
        backgroundPosition: 'left',
        backgroundColor: 'rgba(48,58,74)',
        backgroundBlendMode: 'multiply'
    }
    return (

        <Box style={contactBg}>
            <Container>
                <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'success.main', my: 2 }}>Contact Us</Typography>
                    <Typography variant="h4" sx={{ color: 'white', my: 2 }}>
                        Always Contact With Us
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                        <TextField
                            id="outlined-required"
                            defaultValue="Your Email"
                            type="email"
                            sx={{ backgroundColor: 'white', my: 1 }}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={2}
                            defaultValue="Subject"
                            sx={{ backgroundColor: 'white', my: 1 }}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={3}
                            defaultValue="Your Message"
                            sx={{ backgroundColor: 'white', my: 1 }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactUs;