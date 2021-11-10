import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/footer-bg.png';

const Footer = () => {
    const footerBg = {
        backgroundImage: `url(${bg})`,
        height: '20vh',
        backgroundSize: '100vw 100vh',
        backgroundRepeat: 'no-repeat',
        marginTop: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }
    return (
        <Box style={footerBg}>
            <Typography variant="caption"> &copy; 2021 Doctors Portal, All rights preserved</Typography>
        </Box>
    );
};

export default Footer;