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
import { Box } from "@mui/material";

const Listing = () => {
  return (
    <Main>
      <Box bgcolor={"alternate.main"}>
        <div className="container">
          <Headline />
        </div>
      </Box>
      <br />
      <div className="container">
        <Banner />
      </div>
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
