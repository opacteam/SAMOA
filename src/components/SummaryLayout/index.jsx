import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SummaryContainer, Item } from "./SummaryLayout.style";
import SummaryHeader from "./SummaryHeader";
import SummaryFilter from "./SummaryFilter";
const SummaryLayout = (props) => {
  const { filter } = props;
  return (
    <div>
      <SummaryContainer elevation={2}>
        <Grid container spacing={2} rowSpacing={2} sx={{ padding: "16px" }}>
          <Grid item xs={12}>
            <SummaryHeader />
          </Grid>
          <Grid item xs={0} md={3} display={{ xs: "none", md: "block" }}>
            <SummaryFilter data={filter} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <Item sx={{ height: "80px" }} elevation={6}>
                  xs=6 md=8
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item sx={{ height: "500px" }} elevation={6}>
                  xs=6 md=8
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SummaryContainer>
    </div>
  );
};

SummaryLayout.propTypes = {
  filter: PropTypes.array,
};

export default SummaryLayout;
