import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import {
  SectionContainer,
  SubHeading,
  SubDescription,
  ViewMore,
} from "./Section.style";
const Section = (props) => {
 
  const { heading, description, url = "/", urlTitle, children } = props;
  return (
    <SectionContainer>
      <Container>
        <div>
          <SubHeading as="h2">{heading}</SubHeading>
          <SubDescription as="p">{description}</SubDescription>
          <ViewMore href={url} text={urlTitle} />
        </div>

        <Grid container spacing={2} sx={{ marginTop: "80px" }}>
      
          {children}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlTitle: PropTypes.string,
};

export default Section;
