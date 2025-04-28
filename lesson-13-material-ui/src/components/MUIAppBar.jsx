import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MUIAppBar() {

  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const closeMenu = () => {
    setAnchorEl(null)
  }

  const openControl = anchorEl ? true : false;

  return (
    <div style={{marginBottom:"100px"}}>
      <AppBar position='static'>
        <Toolbar>
            <IconButton>
                <MenuIcon sx={{ color: "#fff" }}/>
            </IconButton>

            <Typography variant='h6'>Material UI</Typography>

            <Stack direction="row" sx={{ marginLeft: 'auto'}} >
              <Button sx={{ color: '#fff' }} >Home</Button>
              <Button sx={{ color: '#fff' }} >About</Button>
              <Button sx={{ color: '#fff' }} onClick={openMenu} >Products</Button>
              <Button sx={{ color: '#fff' }} >Contact</Button>
            </Stack>

            <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu} >
              <MenuItem onClick={closeMenu}>Short</MenuItem>
              <MenuItem onClick={closeMenu}>Pants</MenuItem>
              <MenuItem onClick={closeMenu}>Shoe</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MUIAppBar
