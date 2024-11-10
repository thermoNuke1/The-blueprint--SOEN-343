import SearchIcon from "@mui/icons-material/Search"; // Placeholder for Component2
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import React from "react";

const Container = () => {
  return (
    <Box sx={{ width: 604, height: 245, position: "relative" }}>
      <Box sx={{ width: 771, height: 196, position: "relative", top: -1 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#004052",
            fontSize: "2rem",
            letterSpacing: "0.1rem",
            lineHeight: "1.5",
          }}
        >
          Track Your Shipment
        </Typography>

        <Box
          sx={{
            maxWidth: 592,
            width: 592,
            height: 63,
            position: "absolute",
            top: 133,
            left: 0,
            backgroundColor: "white",
            border: "1px solid #acacac",
            display: "flex",
            alignItems: "center",
            boxShadow: "0px 6px 16px #e8e8e8b5",
            borderRadius: 1,
          }}
        >
          <Grid2 container alignItems="center" spacing={2}>
            <Grid2 item>
              <SearchIcon sx={{ color: "#FFC107", fontSize: 32 }} />
            </Grid2>
            <Grid2 item xs>
              <TextField
                placeholder="Type your tracking number here"
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    fontSize: "1rem",
                    color: "#6c757d",
                  },
                }}
              />
            </Grid2>
            <Grid2 item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#004052",
                  color: "white",
                  borderRadius: 1,
                  padding: "8px 34px",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
              >
                Track
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
