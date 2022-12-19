import React from "react";
import {
  BannerContainer,
  BannerBox,
  ShadowLayerBox,
  BannerContent,
  SearchBar,
  InputSearch,
  SubmitSearch,
  SiteHeading,
  SiteDescription,
} from "./SimpleSearchBanner.style";
import {
  Typography,
  Button,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
const Banner = (props) => {
  const { bannerURL, heading, description, noSearchBox, children } = props;
  return (
    <BannerContainer
      maxWidth={"true"}
      className="bannerContainer"
      banner={bannerURL}
    >
      <ShadowLayerBox />
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <SiteHeading variant="h1">{heading}</SiteHeading>
            <SiteDescription variant="p">{description}</SiteDescription>
          </Grid>
        </Grid>
        {!noSearchBox ? (
          <Grid container spacing={2}>
            <Grid item md={12} sm={12} style={{ width: "100%" }}>
              <Paper
                component="form"
                action="/summary"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "800px",
                  margin: "80px auto",
                  textAlign: "center",
                  boxShadow: "2px 4px 2px 0px rgba(1,1,1,0.5)",
                }}
              >
                <InputBase
                  style={{ height: "55px", fontSize: "1.2rem" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your search"
                  inputProps={{ "aria-label": "Enter your search" }}
                />
                <Button
                  style={{
                    height: "55px",
                    borderTop: "0",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                  }}
                  type="submit"
                  aria-label="search"
                  variant="contained"
                >
                  Search
                </Button>
              </Paper>
            </Grid>
          </Grid>
        ) : null}
      </Container>
      {children}
    </BannerContainer>
  );
};
Banner.propTypes = {
  bannerURL: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  noSearchBox: PropTypes.bool,
};
export default Banner;
