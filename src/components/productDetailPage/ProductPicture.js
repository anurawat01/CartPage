import { Card, CardActionArea, CardMedia, Paper } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import productList from "../../../data";

const ProductPicture = () => {
    
  const { id } = useParams();
  const prod = productList[id];

  return (
    <Card sx={{ margin: "auto", maxWidth: 400, padding: 5 }}>
      <CardActionArea>
        <CardMedia component="img" image={prod.image} alt="product_image" />
      </CardActionArea>
    </Card>
  );
};

export default ProductPicture;
