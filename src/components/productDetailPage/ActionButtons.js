import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import './ActionButtons.scss';

const ActionButtons = () => {
  return (
    <Paper
      className="paper-card"
      sx={{ minHeight: 100, maxWidth: 200, margin: "auto" }}
      elevation={0}
    >
      <Stack spacing={3}>
        <Button variant="contained" color="primary">
          Add to cart
        </Button>
        <Button variant="contained" color="secondary">
          Buy now
        </Button>
      </Stack>
    </Paper>
  );
};

export default ActionButtons;
