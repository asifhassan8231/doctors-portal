import { Container, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm.js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jw098GCtwhQIHNtG6EPEPfk756T5Jro4kCZNMll3PAlDtDJhhBisttzQxUt7capNF4DNN2VJqlHYFnZfzhVbDPg00ibxb6tS3');

const Payment = () => {
    const [appointment, setAppointment] = useState({});
    const { appointmentId } = useParams();

    useEffect(() => {
        fetch(`https://salty-brook-32025.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => {
                setAppointment(data);
            })
    }, [appointmentId])

    return (
        <Container>
            <Typography variant="h5">Payment for appointment {appointment.serviceName}</Typography>
            <Typography variant="h6">Patient: {appointment.patientName}</Typography>
            <Typography variant="h6">Pay $ {appointment.price}</Typography>
            <Box>
                {appointment?.price && <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}
                    ></CheckoutForm>
                </Elements>}
            </Box>
        </Container>
    );
};

export default Payment;