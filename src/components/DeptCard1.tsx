import { useState } from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const DeptCard1 = () => {
    const [checked, setChecked] = useState([false, false]);
    const [toggle, setToggle] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 8 }}>
            <FormControlLabel
                label="Support"
                control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
            />
            <FormControlLabel
                label="Customer Success"
                control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
            />
        </Box>
    );

    return (
        <div className=''>
            {!toggle && 
                <AddIcon className='mr-2 cursor-pointer' onClick={() => setToggle(!toggle)} />
            }
            {toggle && 
                <RemoveIcon className='mr-2 cursor-pointer' onClick={() => setToggle(!toggle)} />
            }
            <FormControlLabel
                label="Customer Service [2]"
                control={
                <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange}
                />
                }
            />
            {toggle && children}
        </div>
  )
}

export default DeptCard1
