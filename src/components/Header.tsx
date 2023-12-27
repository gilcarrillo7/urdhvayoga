import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import LogoPose from "./LogoPose";
import { Link } from "gatsby";
import Whatsapp from "./social/Whatsapp";
import Instagram from "./social/Instagram";
import Facebook from "./social/Facebook";
import HamburgerMenu from "./HamburgerMenu";
import Menu from "./Menu";

const Header = () => {
  const [top, setTop] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) setTop(false);
    else setTop(true);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar z-20 fixed transition-all duration-500 ${
          top || open ? "bg-transparent" : "bg-neutral-content opacity-90"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <HamburgerMenu open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="flex flex-col items-center">
            <LogoPose small={!(top || open)} />
            <span
              className={`font-belleza text-neutral transition-all duration-500 ${
                top || open ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
              }`}
            >
              Urdhva Yoga
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle w-8 sm:w-12">
            <Instagram />
          </button>
          <button className="btn btn-ghost btn-circle w-8 sm:w-12">
            <Facebook />
          </button>
          <button className="btn btn-ghost btn-circle w-8 sm:w-12">
            <Whatsapp />
          </button>
        </div>
      </div>
      {open && (
        <>
          <Menu setOpen={setOpen} />
          <Helmet
            bodyAttributes={{
              class: `${open ? "overflow-hidden" : ""}`,
            }}
          />
        </>
      )}
    </>
  );
};

export default Header;
