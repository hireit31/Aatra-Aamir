import React from "react";
import GridLayout from "../components/GridLayout/GridLayout";
import { firstCol, secondCol, thirdCol, middle } from "../gridPresets/general";
function LandingPage() {
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

export default LandingPage;
