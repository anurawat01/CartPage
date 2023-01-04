import { Grid } from "@mui/material";
import React from "react";
import Header from "../Header";
import ActionButtons from "./actionButtons";
import ProductDescription from "./productDescription";
import ProductPicture from "./productPicture";


const ProductDetail = () => {
  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductPicture />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDescription />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
