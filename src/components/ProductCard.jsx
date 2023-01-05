import * as React from 'react';

import { Box, Typography, CardMedia, Card, CardContent, Divider } from '@mui/material';

export default function ProductCard({ product }) {
  return (
    <Box width={300} spacing={2} boxShadow={5} elevation={2}>
      <Card
        height={500}
        sx={{
          cursor: 'pointer',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: ' scale(1.2)',
          },
        }}
      >
        <CardMedia component="img" height={200} image={product.image} />
        <Divider variant="middle" />
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
        </CardContent>
      </Card>
    </Box>
  );
}
