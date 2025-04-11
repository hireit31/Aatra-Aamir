import React from "react";
import SubGridCol from "./SubGridCol";
import SubGridRow from "./SubGridRow";
import OpenableImage from "../OpenableImage/OpenableImage";

function GridLayout({ firstCol, secondCol, thirdCol, middle }) {
  return (
    <main className="grid lg:grid-cols-3 grid-flow-row gap-2 lg:gap-4 px-2 lg:px-8">
      <SubGridCol ColumnArray={firstCol.slice(0, 2)} />
      <SubGridCol ColumnArray={secondCol.slice(0, 2)} />
      <SubGridCol ColumnArray={thirdCol.slice(0, 2)} />
      <div className="lg:col-span-2">
        <OpenableImage
          src={middle[0].src}
          classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
        />
      </div>
      <OpenableImage
        src={middle[1].src}
        classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
      />
      <SubGridCol ColumnArray={firstCol.slice(2, 4)} />
      <SubGridCol ColumnArray={secondCol.slice(2, 4)} />
      <SubGridCol ColumnArray={thirdCol.slice(2, 4)} />
      <div className="lg:col-span-2">
        <OpenableImage
          src={middle[2].src}
          classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
        />
      </div>
      <OpenableImage
        src={middle[3].src}
        classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
      />
    </main>
  );
}

export default GridLayout;
