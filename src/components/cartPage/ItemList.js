import React, { useState } from "react";
import {
  Paper,
  Card,
  Stack,
  ButtonGroup,
  Button,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  Chip,
} from "@mui/material";
import Price from "./Price";

const ItemList = () => {
  const [count, setCount] = useState(10);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Typography gutterBottom variant="body2" color="text.secondary">All cart Item listed here: </Typography>
      <Paper variant="outlined" sx={{ padding: 5 }}>
        
        <Card
          sx={{
            minWidth: 200,
            margin: "auto",
            padding: 5,
            marginBottom: 5,
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={3}>
              <img
                alt="product_image"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                height="150"
                width="150"
              />
            </Grid>
            <Grid item md={3}>
              <CardContent>
                <Typography>
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </Typography>
                <Typography>
                  <strong>Category :</strong> <i>men's clothing</i>
                </Typography>
              </CardContent>
            </Grid>
            <Grid item md={3}>
              <Typography>
                <strong>Quantity:</strong> {count}
              </Typography>
              <ButtonGroup variant="outlined" color="secondary">
                <Button
                  color="secondary"
                  size="small"
                  variant="outlined"
                  onClick={decrease}
                >
                  -
                </Button>

                <Button
                  color="secondary"
                  size="small"
                  variant="outlined"
                  onClick={increase}
                >
                  +
                </Button>
              </ButtonGroup>

              <Chip label="Instock" color="success" variant="contained" />
            </Grid>
            <Grid item md={3}>
              <Price />
              <Button
                sx={{ margin: "auto" }}
                size="small"
                variant="contained"
                color="error"
              >
                Remove Item
              </Button>
            </Grid>
          </Grid>
        </Card>
        <Typography>
            <strong>SubTotal: </strong>( {count} items)
        </Typography>
        <Button variant="contained" color="secondary">
          Check out
        </Button>
      </Paper>
      
    </div>
  );
};

export default ItemList;
