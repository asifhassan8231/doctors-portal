import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { user } = useAuth();
    const { name, time } = booking;
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleBookingSubmit = e => {

        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString(),
        }

        fetch('https://salty-brook-32025.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleClose();
                }
            })

        e.preventDefault();
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ my: 2 }}>
                    {name}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        label="Time"
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        label="Date"
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"

                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your Name"
                        defaultValue={user.displayName}
                        id="outlined-size-small"
                        size="small"
                        name="patientName"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Your Email"
                        type="email"
                        defaultValue={user.email}
                        id="outlined-size-small"
                        size="small"
                        name="email"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        label="Phone Number"
                        type="number"
                        id="outlined-size-small"
                        size="small"
                        name="phone"
                        onBlur={handleOnBlur}
                    />
                    <Button type="submit" variant="contained" >Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;