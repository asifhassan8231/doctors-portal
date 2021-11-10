import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: '150px',
    backgroundPosition: 'left',
    backgroundColor: 'rgba(48,58,74)',
    backgroundBlendMode: 'multiply'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: '400px', marginTop: '-120px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ color: 'success.main', mb: 3 }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" sx={{ color: 'white', my: 2 }}>
                                Make An Appointment Today
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', my: 2 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla repellat asperiores, dicta in optio obcaecati reiciendis iste libero id.
                            </Typography>
                            <Button variant="contained" color="success">
                                Learn more
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;