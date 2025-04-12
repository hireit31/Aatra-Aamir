import React, { useState } from "react";

function OpenableImage({ src, classes }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Image Card */}
      <div
        className="relative cursor-pointer shadow-sm transition-opacity hover:opacity-85  object-cover transform transition-transform duration-300 ease-in-out hover:scale-95"
        onClick={handleOpen}
        // onContextMenu={(e) => e.preventDefault()}
      >
        <img alt="image" className={classes} src={src} loading="lazy" />
        <div
          className={`z-[100] bg-transparent absolute top-0 right-0 h-full w-full`}
        ></div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={handleClose} // Clicking outside the modal closes it
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center transition-opacity bg-gray-600 bg-opacity-50"
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 lg:right-6 text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-full p-1 focus:outline-none"
            onClick={handleClose}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className=" flex justify-center items-center lg:relative lg:m-4 w-full h-full lg:w-auto lg:h-auto bg-white shadow-sm p-4"
            onClick={(e) => e.stopPropagation()} // Prevent click on modal from closing
          >
            {/* Modal Content */}
            <div className="relative border-b border-t border-b-blue-gray-100 border-t-blue-gray-100 p-0">
              {/* <button>Back</button> */}
              <img
                alt="nature"
                className="h-auto w-full object-center object-contain"
                src={src}
              />
              {/* <button>Fwd</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OpenableImage;
