import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div className='flex flex-col w-1/3 rounded-2xl p-10 border-2 border-amber-700'>
      <h1 className='text-4xl text-center m-5'>Enter your Details</h1>
      <TextField required id="outlined-required" label="Name" variant='outlined' margin='normal' fullWidth color='secondary' />
      <TextField required id="outlined-required" label="Phone Number" variant='outlined' margin='normal' fullWidth color='secondary' />
      <TextField required id="outlined-required" label="Email" variant='outlined' margin='normal' fullWidth color='secondary' />
      <Button variant="contained" className=''>Submit</Button>
    </div>
  )
}

export default Login
