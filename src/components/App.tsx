import { useState, useEffect } from 'react';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('login', 'true');
    navigate('/main-content');
  };

  useEffect(() => {
    const login = localStorage.getItem('login');
    if(!login) {
      navigate('/');
    }
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Enter your Details
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

export default App;

{/* <div className='flex justify-center items-center h-screen bg-gradient-to-br from-red-300 via-red-100 to-pink-200'> */}