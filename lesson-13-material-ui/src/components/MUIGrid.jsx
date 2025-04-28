import React from 'react'
import Grid from '@mui/material/Grid';

function MUIGrid() {
  return (
    <div>
      <Grid container >
        <Grid size={{xs:12, sm:6, md:8, lg: 9}} >ITEM1</Grid>
        <Grid size={{xs:12, sm:6, md:4, lg: 3}} >ITEM2</Grid>
      </Grid>
    </div>
  )
}

export default MUIGrid
