import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function MUIBadge() {
  return (
    <div style={{marginTop: "40px" , marginBottom: "40px", marginLeft: "20px"}}>
      <Badge badgeContent={13} max={7} color='error' anchorOrigin={{vertical: "top", horizontal: "left"}}>{/**anchorOrigin provides us to place the badge */}
        <MailIcon color='action'/>
      </Badge>
    </div>
  )
}

export default MUIBadge
