import {
  TextField,
  Typography,
  Rating,
  Chip,
  Stack,
  Table,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

import productList from "../../../data";

import React from "react";
import ActionButtons from "./actionButtons";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
    
  const { id } = useParams();
  
  const prod = productList[id];

  return (
    <div>
      <Paper sx={{ maxWidth: 400, margin: "auto", padding: 5 }} elevation={1}>
        <Stack spacing={3}>
          <Typography gutterBottom variant="h5" component="div">
            {prod.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {prod.description}
          </Typography>
          <Table>
            <TableRow>
              <TableCell>
                <Typography>
                  <Rating name="read-only" value={prod.rating.rate} readOnly />
                </Typography>
              </TableCell>
              <TableCell>
                <Typography>{prod.rating.count}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Price</Typography>
              </TableCell>
              <TableCell>
                <Typography>{prod.price}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Enter Quantity </Typography>
              </TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  size="small"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Availability </Typography>
              </TableCell>
              <TableCell>
                <Chip label="In stock" color="success" />
              </TableCell>
            </TableRow>
          </Table>
          <ActionButtons />
        </Stack>
      </Paper>
    </div>
  );
};

export default ProductDescription;
