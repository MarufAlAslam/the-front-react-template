/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { alpha } from "@mui/material/styles";
// import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import InputAdornment from "@mui/material/InputAdornment";

// import Container from 'components/Container';

const Hero = () => {
  // const theme = useTheme();

  return (
    <Box
      minHeight={{ xs: 300, sm: 500 }}
      position={"relative"}
      sx={{
        // backgroundColor: theme.palette.alternate.main,
        background:
          "url(https://assets.maccarianagency.com/backgrounds/img52.jpg) no-repeat top",
        backgroundSize: "cover",
        marginTop: -12,
        paddingTop: 30,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha("#161c2d", 0.4),
          zIndex: 1,
        }}
      />
      <div className="container">
        <Box>
          <Box marginBottom={4} data-aos="fade-up">
            <div className="relative z-50">
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 900,
                  color: "white",
                }}
              >
                What do you need?
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{
                  fontWeight: 400,
                  color: "white",
                }}
              >
                We are founded by a leading academic and researcher in the field
                of Industrial Systems Engineering.
              </Typography>
            </div>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Hero;
