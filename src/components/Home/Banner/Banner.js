import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const Banner = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${banner})`,
                height: '100vh',
                backgroundSize: '100vw 100vh',
                backgroundRepeat: 'no-repeat',
                marginTop: '0', display: 'flex',
                alignItems: 'center'
            }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Grid item xs={12} md={6} >
                        <Typography variant='h3' sx={{ mb: 3, fontWeight: 'bold' }}>
                            Your New Smile <br />
                            Starts here
                        </Typography>
                        <Typography variant='subtitle1' color="text.secondary" sx={{ mb: 2 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, optio praesentium dolore voluptates quibusdam doloribus quam consectetur ad porro nisi.
                        </Typography>
                        <Button variant="contained" color="success">
                            Get Appointment
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={chair} alt="" style={{ width: '450px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Banner;