import React from "react";
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
  return (
    <div>
      <div style={{marginBottom: "50px"}} >
        <Button variant="text">Login</Button>
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Login</Button>
      </div>

    <div style={{marginBottom: "50px"}} >
        <Button color="primary">Sign in</Button>
        <Button color="error">Sign in</Button>
        <Button color="info">Sign in</Button>
        <Button color="secondary">Sign in</Button>
        <Button color="success" variant="contained">Sign in</Button>
    </div>

    <div style={{marginBottom: "50px"}} >
        <Button size="small" variant="contained" color="warning" style={{marginRight: "10px"}}>Save</Button>
        <Button size="medium" variant="contained" color="secondary" style={{marginRight: "10px"}}>Save</Button>
        <Button size="large" variant="contained" color="secondary">Save</Button>
    </div>

    <div style={{marginBottom: "50px"}} >
        <Button size="medium" variant="contained" color="success" startIcon={<AddCircleIcon/>} style={{marginRight: "10px"}}>Save</Button>
        <Button size="medium" variant="contained" color="success" endIcon={<AddCircleIcon/>} style={{marginRight: "10px"}}>Save</Button>
    </div>

    </div>
  );
}

export default MUIButton;
