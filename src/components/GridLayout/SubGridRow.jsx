import React from "react";

function SubGridRow({ rowArray }) {
  return (
    <div className="w-full h-full">
      <img
        src={rowArray[0].src}
        className="w-full h-auto object-bottom col-span-2"
      />
      <img src={rowArray[1].src} className="w-full h-auto object-bottom" />
    </div>
  );
}

export default SubGridRow;
