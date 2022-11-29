import React, { useId } from "react";
import {
  AdvancedSearchBanner,
  DescriptionCard,
  ImageCarousel,
  ImageMasonry,
  Map,
  Section,
  SimpleSearchBanner,
  TagCard,
  Layout,
} from "./index";

const KeysToComponentMap = {
  AdvancedSearchBanner,
  DescriptionCard,
  ImageCarousel,
  ImageMasonry,
  Map,
  Section,
  SimpleSearchBanner,
  TagCard,
  Layout,
};

function Component(block) {
  const key = useId();

  if (typeof KeysToComponentMap[block.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[block.component],
      { key, ...block.data },
      block.children &&
        (typeof block.children === "string"
          ? block.children
          : block.children.map((b) => Component(b)))
    );
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._id }
  );
}
export default Component;
