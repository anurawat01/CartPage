import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import productList from '../../../data';
import React from 'react';
import ProductCard from './ProductCard';
import Header from '../Header';


const HomePage = () => {
  // console.log(productList);
  return (
    <Paper sx={{ maxWidth: 1500, margin: 'auto', backgroundColor: '#fafafa' }}>
      <Stack>
        <Box>
          <Header />
        </Box>
        <Box sx={{}}>
          <Grid
            container
            spacing={6}
            sx={{ display: 'flex', justifyContent: 'space-evenly', boxShadow: 0 }}
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

export default HomePage;
