import React from "react";
import GridLayout from "../components/GridLayout/GridLayout";
import {
  firstCol,
  middle,
  secondCol,
  thirdCol,
} from "../gridPresets/ecommerce";
import GalleryLayout from "../components/GridLayout/GalleryLayout";

function EcommercePage() {
  return (
    <GalleryLayout
      firstCol={firstCol}
      middle={middle}
      secondCol={secondCol}
      thirdCol={thirdCol}
    />
  );
}

export default EcommercePage;
