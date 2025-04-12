import React from "react";
import { firstCol, secondCol, thirdCol, middle } from "../gridPresets/products";
import ProductLayout from "../components/GridLayout/ProductLayout";
function ProductPage() {
  return (
    <div className="grid">
      <ProductLayout
        firstCol={firstCol}
        secondCol={secondCol}
        thirdCol={thirdCol}
        middle={middle}
        large={true}
      />
    </div>
  );
}

export default ProductPage;
