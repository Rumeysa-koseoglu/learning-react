import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

function MUICheckbox() {
    const [isConfirm, setIsConfirm] = useState(true)
    
    const submit = () => {
        if (!isConfirm) {
            alert("Please confirm the term")
        }else{
            alert("sended successfully")
        }
    }
  return (
    <>
    <FormControl sx={{marginRight: "40px"}}>
        <FormLabel>Educational status</FormLabel>
        <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="primary"
          labelPlacement="end"
        />
        
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="highschool"
          labelPlacement="end"
        />
        
        <FormControlLabel
          control={<Checkbox />}
          label="university"
          labelPlacement="end"
        />
        </FormGroup>
    </FormControl>

    
<FormControl>
<FormGroup>
<FormControlLabel
  control={<Checkbox checked={isConfirm} onChange={(e) => setIsConfirm(e.target.checked)} />}
  label="I accept the terms of use"
  labelPlacement="end"
/>

<Button onClick={submit} variant="contained">Send Form</Button>

</FormGroup>
</FormControl>

</>
  )
}

export default MUICheckbox
