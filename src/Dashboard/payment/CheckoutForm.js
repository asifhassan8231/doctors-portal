import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const CheckoutForm = ({ appointment }) => {
    const [error, setError] = useState('');
    const { price, patientName, _id } = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [success, setSuccess] = useState('');
    const [process, setProcess] = useState(false);

    useEffect(() => {
        fetch('https://salty-brook-32025.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };
        setProcess(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        // name: { patientName },
                        email: user.email,
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully!')
            console.log(paymentIntent);
            setProcess(false);
            //save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.split('_secret_')[0],
            }
            const url = `https://salty-brook-32025.herokuapp.com/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {process ? <CircularProgress color="secondary" /> : <button type="submit" disabled={!stripe || success}>
                    Pay $ {price}
                </button>}
                {error && <h3 style={{ color: 'red' }}>{error}</h3>}
                {success && <h3 style={{ color: 'green' }}>{success}</h3>}
            </form>
        </div>
    );
};

export default CheckoutForm;