import { Button, Input, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://salty-brook-32025.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    alert('doctor added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h3>Add a doctor</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Name" variant="standard" type="text" sx={{ width: '50%' }} required onChange={e => setName(e.target.value)} />
                <br />
                <br />
                <TextField id="standard-basic" label="
                Email" variant="standard" type="email" sx={{ width: '50%' }} required onChange={e => setEmail(e.target.value)} />
                <br />
                <br />
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" multiple type="file" onChange={e => setImage(e.target.files[0])} />
                        <br />
                        <br />
                        <Button variant="contained" type="submit" >
                            Add Doctor
                        </Button>
                    </label>
                </Stack>
            </form>
        </div>
    );
};

export default AddDoctor;