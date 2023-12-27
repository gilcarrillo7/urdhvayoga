import * as React from "react";
import CIYT from "./icons/Ciyt";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="divider divider-neutral my-12">
          <CIYT />
        </div>
        <div className="container pb-8">
          <p className="text-center font-medium text-base sm:text-lg">
            "Tu cuerpo existe en el pasado y tu mente en el futuro. En yoga
            ellos están juntos en el presente."
          </p>
          <p className="text-center text-sm sm:text-base font-belleza">
            Yogacharya B.K.S. Iyengar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
