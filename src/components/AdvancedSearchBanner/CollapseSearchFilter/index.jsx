import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  CardContent,
  Typography,
  Button,
  Autocomplete,
  TextField,
  Item,
  Container,
  Grid,
} from "@mui/material";
const CollapseSearchFilter = (props) => {
  let { show, data } = props;
  console.log(props);
  return (
    <>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <CardContent>
          <Container>
            <Grid container spacing={2}>
              {data.map((e, i) => (
                <Grid item xs={12} sm={6} xl={3}>
                  <Autocomplete
                    disablePortal
                    options={e.data}
                    renderInput={(params) => (
                      <TextField {...params} label={e.title} />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardContent>
      </Collapse>
    </>
  );
};

CollapseSearchFilter.propTypes = {};

export default CollapseSearchFilter;
