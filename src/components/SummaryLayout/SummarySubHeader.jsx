import * as React from "react";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { Item } from "./SummaryLayout.style";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Typography } from "@mui/material";
export default function TabsVariants() {
  const [index, setIndex] = React.useState(0);
  return (
    <Item sx={{ hight: "80px", padding: "10px 16px" }} elevation={6}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            {" "}
            50 Search results for "Test"
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Sort By:
            </Typography>
          </Box>
          <Tabs
            aria-label="Plain tabs"
            value={index}
            onChange={(event, value) => setIndex(value)}
            sx={{ borderRadius: "lg" }}
          >
            <TabList variant="plain">
              <Tab
                color={index === 0 ? "primary" : "neutral"}
                variant={index === 0 ? "solid" : "plain"}
              >
                Name
              </Tab>
              <Tab
                color={index === 1 ? "primary" : "neutral"}
                variant={index === 1 ? "solid" : "plain"}
              >
                Date
              </Tab>
              <Tab
                color={index === 2 ? "primary" : "neutral"}
                variant={index === 2 ? "solid" : "plain"}
              >
                Title
              </Tab>
              <Tab
                color={index === 3 ? "primary" : "neutral"}
                variant={index === 3 ? "solid" : "plain"}
              >
                Subject
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    </Item>
  );
}
