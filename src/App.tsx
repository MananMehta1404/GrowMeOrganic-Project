import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-br from-red-300 via-red-100 to-pink-200'>
      <div className='flex flex-col w-1/3 rounded-2xl p-10 border-2 border-amber-700'>
        <h1 className='text-4xl text-center m-5'>Enter your Details</h1>
        <TextField required id="outlined-required" label="Name" variant='outlined' margin='normal' fullWidth color='secondary' />
        <TextField required id="outlined-required" label="Phone Number" variant='outlined' margin='normal' fullWidth color='secondary' />
        <TextField required id="outlined-required" label="Email" variant='outlined' margin='normal' fullWidth color='secondary' />
        <Button variant="contained" className=''>Submit</Button>
      </div>
    </div>
  )
}