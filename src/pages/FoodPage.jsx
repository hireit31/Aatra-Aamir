import React from "react";
import GridLayout from "../components/GridLayout/GridLayout";
import { firstCol, middle, secondCol, thirdCol } from "../gridPresets/food";
import GalleryLayout from "../components/GridLayout/GalleryLayout";

function FoodPage() {
  return (
    <GalleryLayout
      firstCol={firstCol}
      middle={middle}
      secondCol={secondCol}
      thirdCol={thirdCol}
    />
  );
}

export default FoodPage;
