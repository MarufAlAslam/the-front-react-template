import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// import Main from 'layouts/Main';
// import Container from 'components/Container';
import { Content } from "./components";

const CompanyTerms = () => {
  const theme = useTheme();

  return (
    <div className="container">
      <Box boxShadow={4} borderRadius={2} overflow={"hidden"}>
        <Box
          bgcolor={theme.palette.primary.main}
          marginBottom={3}
          borderRadius={0}
        >
          {/* <Container paddingX={{ xs: 2, sm: 4 }}> */}
          <Typography
            variant={"h4"}
            gutterBottom
            sx={{
              fontWeight: 700,
              paddingX: theme.spacing(5),
              paddingTop: theme.spacing(10),
              color: theme.palette.common.white,
            }}
          >
            Company terms & privacy policy
          </Typography>
          <Typography
            gutterBottom
            paddingX={theme.spacing(5)}
            paddingBottom={theme.spacing(10)}
            sx={{
              color: theme.palette.common.white,
            }}
          >
            Last modified on <strong>23 Aug, 2021</strong>
          </Typography>
          {/* </Container> */}
          {/* <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            width={1}
            marginBottom={-1}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box> */}
        </Box>
        {/* <Container
        paddingTop={'0 !important'}
        paddingX={{ xs: 2, sm: 4 }}
        position={'relative'}
        top={0}
      > */}
        <Box
          component={Grid}
          container
          spacing={4}
          paddingX={theme.spacing(5)}
          paddingBottom={theme.spacing(10)}
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={12}>
            <Content />
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <Box
              position={'sticky'}
              top={theme.spacing(10)}
              className={'sticky'}
            >
              <ContactCard />
            </Box>
          </Grid> */}
        </Box>
        {/* </Container> */}
      </Box>
    </div>
  );
};

export default CompanyTerms;
