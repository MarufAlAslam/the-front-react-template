import React from "react";
// import Box from "@mui/material/Box";

import Main from "../../layouts/Main";
// import Container from "components/Container";

import {
  Banner,
  Headline,
  // Newsletter,
  // Headline,
  // Banner,
  Products,
  SidebarFilters,
  // Newsletter,
  // Partners,
} from "./components";
import { Box, Container } from "@mui/material";

const Listing = () => {
  return (
    <Main>
      <Box bgcolor={"alternate.main"}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <br />
      <Container paddingBottom={'0 !important'}>
        <Banner />
      </Container>
      <br />
      <div className="container">
        <SidebarFilters>
          <Products />
        </SidebarFilters>
      </div>
      {/* <Box paddingY={10} bgcolor={"alternate.main"}>
        <Container>
          <Newsletter />
        </Container>
      </Box> */}
      {/* <Container>
        <Partners />
      </Container> */}
    </Main>
  );
};

export default Listing;
