import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 25,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 30,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 20,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 15,
        space: 10,
    },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Box>
                <Typography variant="h5" sx={{ my: 3, textAlign: 'center', fontWeight: 'bold' }}>Avaiable Appointment on {date.toDateString()}</Typography>
                {bookingSuccess && <Alert severity="success">Booking Successful!</Alert>}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        bookings.map(booking => <Booking key={booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess}></Booking>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointment;