import React from "react";
import { Typography } from "@mui/material";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          fontSize: "70px",
        }}
      >
        Home
      </Typography>
    </>
  );
};

export default Home;
