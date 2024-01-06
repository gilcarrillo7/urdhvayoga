import { Link } from "gatsby";
import * as React from "react";

const Menu = ({ setOpen }: { setOpen: (v: boolean) => void }) => {
  return (
    <div className="w-screen h-screen z-[90] bg-neutral-content fixed top-0 left-0 flex items-center">
      <div className="container flex flex-col items-center gap-4 sm:gap-5">
        <Link
          className="text-3xl sm:text-4xl font-belleza text-neutral hover:underline"
          to="/clases"
        >
          Clases
        </Link>
        <Link
          className="text-3xl sm:text-4xl font-belleza text-neutral hover:underline"
          to="/estudio"
        >
          Estudio
        </Link>
        <Link
          className="text-3xl sm:text-4xl font-belleza text-neutral hover:underline"
          to="/yoga"
        >
          Yoga
        </Link>
        <Link
          className="text-3xl sm:text-4xl font-belleza text-neutral hover:underline"
          to="/maestros"
        >
          Maestros
        </Link>
        <Link
          className="text-3xl sm:text-4xl font-belleza text-neutral hover:underline"
          to="/#contacto"
          onClick={() => setOpen(false)}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Menu;
