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

export const Copyright = () => {
  return (
    <Typography variant="body2">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/"></Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = () => {
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
            <img src={""} alt="Footer Logo" style={{ width: "100%" }} />
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
            <img src={"https://i.imgur.com/KikZE4d.png"} alt="Surrey.ca" />
          </Grid>
        </Grid>
        <Divider flexItem sx={{ marginTop: "40px", marginBottom: "20px" }} />

        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
