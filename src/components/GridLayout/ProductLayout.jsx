import React from "react";
import SubGridCol from "./SubGridCol";
import OpenableImage from "../OpenableImage/OpenableImage";

function ProductLayout({
  firstCol,
  secondCol,
  thirdCol,
  middle,
  large = false,
}) {
  return (
    <main className="grid lg:grid-cols-3 grid-flow-row gap-2 lg:gap-4 px-2 lg:px-8">
      {/* Initial Grid */}
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

      {/* Conditionally Render Remaining Images if large === true */}
      {large && (
        <>
          <SubGridCol ColumnArray={firstCol.slice(4, 6)} />
          <SubGridCol ColumnArray={secondCol.slice(4, 6)} />
          <SubGridCol ColumnArray={thirdCol.slice(4, 6)} />

          <div className="lg:col-span-2">
            <OpenableImage
              src={middle[4].src}
              classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          <OpenableImage
            src={middle[5].src}
            classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
          />

          <SubGridCol ColumnArray={firstCol.slice(6, 8)} />
          <SubGridCol ColumnArray={secondCol.slice(6, 8)} />
          <SubGridCol ColumnArray={thirdCol.slice(6, 8)} />

          <div className="lg:col-span-2">
            <OpenableImage
              src={middle[6].src}
              classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          <OpenableImage
            src={middle[7].src}
            classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
          />

          <SubGridCol ColumnArray={firstCol.slice(8, 10)} />
          <SubGridCol ColumnArray={secondCol.slice(8, 10)} />
          <SubGridCol ColumnArray={thirdCol.slice(8, 10)} />

          <div className="lg:col-span-2">
            <OpenableImage
              src={middle[8].src}
              classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          <OpenableImage
            src={middle[9].src}
            classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
          />

          <SubGridCol ColumnArray={firstCol.slice(10, 12)} />
          <SubGridCol ColumnArray={secondCol.slice(10, 12)} />
          <SubGridCol ColumnArray={thirdCol.slice(10, 12)} />

          <div className="lg:col-span-2">
            <OpenableImage
              src={middle[10].src}
              classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
            />
          </div>

          <OpenableImage
            src={middle[11].src}
            classes="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
          />
        </>
      )}
    </main>
  );
}

export default ProductLayout;
