import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";

const Price = () => {
  return (
    <div>
        <Card sx={{margin:2}}>
            <CardContent>
                <Typography>
                    <strong>Price: </strong> <i>100</i>
                </Typography>
                <Typography>
                    <strong>Total amount:</strong><i>1000</i>
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default Price