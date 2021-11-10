import { Button, Grid, Modal, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { name, time, space } = booking;
    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }} >
                    <Typography variant="h5" sx={{ color: 'success.main' }}>{name}</Typography>
                    <Typography variant="h6">{time}</Typography>
                    <Typography variant="caption">{space} spaces available</Typography>
                    <br />
                    <Box>
                        <Button variant="contained" color="success" onClick={handleOpen} >Book Appointment</Button>
                    </Box>
                </Paper>
            </Grid>
            <BookingModal booking={booking} open={open} handleClose={handleClose} date={date}></BookingModal>
        </>
    );
};

export default Booking;