import React from 'react'
import { Divider, Stack } from '@mui/material'

function MUIStack() {
  return (
    <div>
        {/**the "direction={{xs:'column', sm: 'row'}}" here, provides us to arrange responsive values easily */}
      <Stack sx={{marginTop:"40px"}} direction={{xs:'column', sm: 'row'}} spacing={10} divider={<Divider orientation='vertical' flexItem/>} >
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Stack>
    </div>
  )
}

export default MUIStack
