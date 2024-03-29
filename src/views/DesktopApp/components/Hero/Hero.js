import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className="py-10">
      <div className="container">
        <Grid container spacing={4}>
          <Grid item container xs={12} md={6} alignItems={"center"}>
            <Box data-aos={isMd ? "fade-right" : "fade-up"}>
              <Box marginBottom={2}>
                <Typography
                  variant="h3"
                  color="text.primary"
                  sx={{ fontWeight: 700 }}
                >
                  Beautiful data representation{" "}
                  <Typography
                    color={"primary"}
                    component={"span"}
                    variant={"inherit"}
                    sx={{
                      background: `linear-gradient(180deg, transparent 82%, ${alpha(
                        theme.palette.secondary.main,
                        0.3
                      )} 0%)`,
                    }}
                  >
                    built with theFront
                  </Typography>
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="text.secondary">
                  World developers use our theFront theme to build their
                  internal tools and client admin applications.
                  <br />
                  Save yourself time and money.
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretched", sm: "flex-start" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Start now
                </Button>
                <Box
                  component={Button}
                  variant="outlined"
                  color="primary"
                  size="large"
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                  fullWidth={isMd ? false : true}
                >
                  Learn more
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"center"}
            xs={12}
            md={6}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
           <div className="h-[750px] w-full bg-gray-500"></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
