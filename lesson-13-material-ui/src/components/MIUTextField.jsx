import React from 'react'
import  TextField  from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';

function MIUTextField() {
  return (
    <>
    <div style={{marginBottom: "50px"}} >
      <TextField label="name" variant='outlined' style={{marginRight: "10px"}}/>
      <TextField label="name" variant='filled'  style={{marginRight: "10px"}}/>
      <TextField label="name" variant='standard' />
    </div>
    
    <div style={{marginBottom: "50px"}} >
      <TextField label="name" variant='outlined' color='success' style={{marginRight: "10px"}}/>
    </div>
    
    <div style={{marginBottom: "50px"}} >
      <TextField label="name" variant='outlined' color='warning' helperText="enter your name" style={{marginRight: "10px"}}/>
      <TextField label="name" variant='outlined' color='secondary' helperText="Do not share your password with anyone" style={{marginRight: "10px"}}/>
    </div>
    
    <div style={{marginBottom: "50px"}} >
      <TextField label="password" disabled variant='outlined' color='warning' style={{marginRight: "10px"}}/>
    </div>
    
    <div style={{marginBottom: "50px"}} >
      <TextField slotProps={{  input: {readOnly: true}}} variant='filled' defaultValue="rumeysa" color='warning'/>
    </div>
    
    <div style={{marginBottom: "50px"}} >
      <TextField label="enter your name" variant='outlined' slotProps={{input: {startAdornment: <InputAdornment position='start'><PersonIcon/></InputAdornment>}}}/>
    </div>
    
    <div style={{marginBottom: "50px"}} >
      <TextField label="enter your name" variant='outlined' slotProps={{input: {endAdornment: <InputAdornment position='end'><PersonIcon/></InputAdornment>}}}/>
    </div>
    
    <div style={{marginBottom: "50px"}} >
      <TextField label="name" variant='outlined' color='warning' helperText="enter your name" size='small' style={{marginRight: "10px"}}/>
      <TextField label="name" variant='outlined' color='secondary' helperText="Do not share your password with anyone" size='medium' style={{marginRight: "10px"}}/>
    </div>
    </>
  )
}

export default MIUTextField
