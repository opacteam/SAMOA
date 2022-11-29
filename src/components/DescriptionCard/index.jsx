import React from "react";
import {
  Typography,
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import { DescriptionCardItem } from "./DescriptionCard.style";
const DescriptionCardInfo = ({ description, title, urlTitle, url }) => {
  return (
    <div
      style={{ margin: "40px  auto", padding: "5px 10px", maxWidth: "600px" }}
    >
      <Typography variant="h3"> {title}</Typography>
      <Typography component="p" sx={{ marginTop: "20px", fontSize: "1rem" }}>
        {description}
      </Typography>
      <Button variant="contained" sx={{ marginTop: "30px" }} size="large">
        {urlTitle}
      </Button>
    </div>
  );
};
const DescriptionCard = ({
  position,
  thumbnail,
  title,
  heading,
  description,
  url,
  urlTitle,
}) => {
  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        md={6}
        order={{ xs: 2, sm: 2, md: position % 2 !== 0 ? 1 : 2 }}
      >
        <DescriptionCardInfo {...{ title, description, url, urlTitle }} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ margin: "10px auto" }}
        order={{ xs: 1, sm: 1, md: position % 2 !== 0 ? 2 : 1 }}
      >
        <DescriptionCardItem raised={true}>
          <CardMedia
            component="img"
            height="300"
            image={thumbnail}
            alt={heading}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {heading}
            </Typography>
          </CardContent>
        </DescriptionCardItem>
      </Grid>
    </Grid>
  );
};

DescriptionCard.propTypes = {
  position: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlTitle: PropTypes.string,
};
export default DescriptionCard;
