import React from "react";
import GridLayout from "./GridLayout";
function GalleryLayout({ firstCol, secondCol, thirdCol, middle }) {
  return (
    <div className="grid  gap-2 lg:gap-4 pb-5">
      <GridLayout
        firstCol={firstCol.slice(0, 4)}
        secondCol={secondCol.slice(0, 4)}
        thirdCol={thirdCol.slice(0, 4)}
        middle={middle.slice(0, 4)}
      />
      <GridLayout
        firstCol={firstCol.slice(4, firstCol.length)}
        secondCol={secondCol.slice(4, secondCol.length)}
        thirdCol={thirdCol.slice(4, thirdCol.length)}
        middle={middle.slice(4, middle.length)}
      />
    </div>
  );
}

export default GalleryLayout;
