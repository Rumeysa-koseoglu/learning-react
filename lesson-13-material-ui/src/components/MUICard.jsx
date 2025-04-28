import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Honda from '../image/honda.jpg'

function MUICard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345, marginTop:"40px" }}>
      <CardMedia
        sx={{ height: '200px' }}
        image={Honda}
        title="Honda Civic"
      />

<CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Honda Civic
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis labore cumque reprehenderit saepe vitae, enim deleniti doloribus illo sit atque quae. Nesciunt ut minus reprehenderit enim! Unde assumenda cupiditate possimus ipsum sint iusto, nemo enim pariatur. Reprehenderit saepe unde rem?
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Contact</Button>
      </CardActions>
      </Card>
    </div>
  )
}

export default MUICard
