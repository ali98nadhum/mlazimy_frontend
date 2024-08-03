import React from 'react'
import "./CategoryCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CategoryCard = ({ fontSize = '24px' , category }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='category_card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={category.image.url}
          alt="green iguana"
          className='image_category_card'
        />
        <CardContent>
          <Typography className='title_category_card' style={{ fontSize }} gutterBottom variant="" component="div">
           {category.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CategoryCard;
