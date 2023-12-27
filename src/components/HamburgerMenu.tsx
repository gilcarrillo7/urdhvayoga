import React from "react";

const HamburgerMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  return (
    <button
      className={`relative z-50 w-10 h-10 focus:outline-none bg-transparent transition duration-200 ease-in-out ${
        open ? "text-neutral" : "text-black"
      }`}
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only bg-gray">Menu</span>
      <div className="block w-6 sm:w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-6 sm:w-8 transform transition duration-500 ease-in-out ${
            open ? "-rotate-45 bg-neutral" : `-translate-y-2 sm:-translate-y-3 bg-neutral`
          } `}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-6 sm:w-8 ${
            open ? "opacity-0" : "bg-neutral"
          } transform transition duration-500 ease-in-out `}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-6 sm:w-8 transform  transition duration-500 ease-in-out ${
            open ? "rotate-45 bg-neutral" : `translate-y-2 sm:translate-y-3 bg-neutral`
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerMenu;
