import * as React from 'react';

import {
  Box,
  Typography,
  Button,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  ButtonGroup,
} from '@mui/material';

export default function ProductCard({ product }) {
  return (
    <Box width={300} spacing={2}>
      <Card
        height={500}
        sx={{
          '&:hover': {
            scale: 2,
          },
        }}
      >
        <CardMedia component="img" height={200} image={product.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title.length <= 15 ? product.title : product.title.slice(0, 15) + '...'}
          </Typography>
          <Typography>₹{product.price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.length <= 100
              ? product.description
              : product.description.slice(0, 100) + '...'}
          </Typography>
          {/* <CardActions>
            <Button variant="contained" size="small" sx={{ fontSize: 20 }}>
              +
            </Button>
            <Button variant="contained" size="small" sx={{ fontSize: 20 }}>
              -
            </Button>
          </CardActions> */}
        </CardContent>
      </Card>
    </Box>
  );
}
