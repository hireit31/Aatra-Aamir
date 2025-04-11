import React from "react";
import OpenableImage from "../OpenableImage/OpenableImage";

function SubGridCol({ ColumnArray }) {
  return (
    <div className="w-full grid h-auto grid-flow-col gap-x-2 lg:gap-x-0 lg:grid-flow-row  lg:gap-y-4">
      {ColumnArray.map((image, index) => {
        return (
          <OpenableImage
            key={index}
            src={image.src}
            classes="min-w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
          />
        );
      })}
    </div>
  );
}

export default SubGridCol;
