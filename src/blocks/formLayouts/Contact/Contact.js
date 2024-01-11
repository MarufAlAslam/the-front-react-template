import React from "react";
import Grid from "@mui/material/Grid";
import { Map, Form } from "./components";

// import Container from "components/Container";

const Contact = () => {
  return (
    <div className="container">
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item container xs={12} md={6} alignItems={"center"}>
          <Form />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
