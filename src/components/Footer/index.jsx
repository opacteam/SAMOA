import React from "react";
import {
  Typography,
  Link,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { PropTypes } from "prop-types";
export const Copyright = (props) => {
  const { copyrightURL } = props;
  return (
    <Typography variant="body2">
      {"Copyright © "}
      <Link color="inherit" href={copyrightURL}></Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = (props) => {
  const { siteName, logo, logo2, baseURL } = props;
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
        height: "auto",
        minHeight: "300px",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ padding: "2rem" }}>
            <img
              src={logo}
              alt={siteName || "Logo"}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
            <img src={logo2} alt="Logo2" />
          </Grid>
        </Grid>
        <Divider flexItem sx={{ marginTop: "40px", marginBottom: "20px" }} />

        <Copyright copyrightURL={baseURL} />
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  logo: PropTypes.string,
  siteName: PropTypes.string,
  baseURL: PropTypes.string,
  logo2: PropTypes.string,
};

Copyright.propTypes = {};
export default Footer;
