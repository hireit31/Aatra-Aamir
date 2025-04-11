import React from "react";
import { firstCol, secondCol, thirdCol, middle } from "../gridPresets/products";
import GridLayout from "../components/GridLayout/GridLayout";
function ProductPage() {
  return (
    <div className="grid">
      <GridLayout
        firstCol={firstCol}
        secondCol={secondCol}
        thirdCol={thirdCol}
        middle={middle}
      />
    </div>
  );
}

export default ProductPage;
