import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import productList from '../../data';
import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // console.log(productList);
  return (
    <Paper sx={{ maxWidth: 1500, margin: 'auto' }}>
      <Stack>
        <Box>
          <Typography align="center" sx={{ fontSize: 32 }}>
            Product List
          </Typography>
        </Box>
        <Box sx={{}}>
          <Grid
            container
            spacing={6}
            sx={{ display: 'flex', justifyContent: 'space-around', boxShadow: 0 }}
          >
            {productList.map((product) => (
              <Grid item>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Home;
