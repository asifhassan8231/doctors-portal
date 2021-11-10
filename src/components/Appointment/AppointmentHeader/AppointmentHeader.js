import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import newBanner from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { LocalizationProvider } from '@mui/lab';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Box
            sx={{
                backgroundImage: `url(${newBanner})`,
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
                        <Typography variant='h4' sx={{ mb: 3, fontWeight: 'bold' }}>
                            Appointment
                        </Typography>
                        <Box>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img src={chair} alt="" style={{ width: '450px' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;