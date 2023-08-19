import React, { useState } from 'react';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phoneNumber && email) {
      const userData = {
        name,
        phoneNumber,
        email,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/main-content')
    }
  };

  return (
    <Container component="main" maxWidth="xs" className='h-screen mt-44'>
      <CssBaseline />
      <div className='flex flex-col items-center justify-center'>
        <Typography component="h1" variant="h5">
          Enter your Details (Page 1)
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;