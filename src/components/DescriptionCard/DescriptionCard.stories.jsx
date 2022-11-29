import React from "react";
import DescriptionCard from "./";

export default {
  title: "DescriptionCard",
  component: DescriptionCard,
};

const Template = (args) => <DescriptionCard {...args} />;

export const Example = Template.bind({});

Example.args = {
  position: 0,
  thumbnail: "https://i.imgur.com/YX6yWsW.jpg",
  title: "Surrey Archives",
  heading: "Archives Collection",
  description:
    "The Surrey Archives is home to the documentary history of the City of Surrey. Its holdings include, but are not limited to, photographs, manuscripts, maps, architectural plans, audio-visual materials and an extensive reference collection. Located in one of the City's premier heritage buildings, the 1912 Municipal Hall in Cloverdale, the Archives preserves and provides access to records of Surrey's residents, community groups, businesses, and government",
  url: "/",
  urlTitle: "View More",
};
