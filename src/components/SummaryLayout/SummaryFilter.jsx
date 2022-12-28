import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "./SummaryLayout.style";
import {
  Divider,
  Typography,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Card from "@mui/joy/Card";

const FieldFilter = (props) => {
  const { data } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: "400px",
        overflowY: "scroll",
        overflowX: "hidden",
        margin: "18px 16px",
        padding: "12px",
        borderRadius: "sm",
      }}
    >
      <Typography
        id="filter-status"
        sx={{
          textTransform: "uppercase",
          fontSize: "xs1",
          letterSpacing: "lg",
          fontWeight: "bold",
          color: "text.secondary",
          mb: 2,
        }}
      >
        {}
      </Typography>
      <Box role="group" aria-labelledby="filter-status">
        <List>
          {data.item_group.map((item) => (
            <ListItem sx={{ marginTop: "16px" }}>
              <Checkbox
                label={item.item_value}
                overlay
                sx={{ color: "inherit" }}
                onChange={(_) => (window.location = item.item_link)}
              />
              <Typography textColor="inherit" sx={{ ml: "auto" }}>
                {item.item_frequency}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* <Button
        variant="outlined"
        color="neutral"
        size="sm"
        sx={{ px: 1.5, mt: 1 }}
      >
        Clear All
      </Button> */}
    </Card>
  );
};
const SummaryFilter = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Item
      elevation={6}
      sx={{
        height: "100vh",
        maxHeight: "1500px",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "0",
      }}
    >
      <div>
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "secondary.main",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Search Filter{" "}
        </Typography>
      </div>
      {data.map((item, i) => (
        <FieldFilter data={item} />
      ))}
    </Item>
  );
};

SummaryFilter.propTypes = {};

export default SummaryFilter;
