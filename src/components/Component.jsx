import React from "react";

const KeysToComponentMap = {};

function Component(block) {
  if (typeof KeysToComponentMap[block.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[block.component],
      {
        key: block._id,
      },
      block.children &&
        (typeof block.children === "string"
          ? block.children
          : block.children.map((b) => Component(b)))
    );
  }
}
export default Component;
