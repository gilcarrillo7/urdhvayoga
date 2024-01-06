import * as React from "react";
import { useInView } from "react-intersection-observer";

const DivAnimated = ({
  className = "",
  classNameShow = "",
  classNameHidden = "",
  children,
}: {
  className?: string;
  classNameShow?: string;
  classNameHidden?: string;
  children: React.ReactNode;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className} ${
        inView ? `opacity-100 ${classNameShow}` : `opacity-0 ${classNameHidden}`
      }`}
    >
      {children}
    </div>
  );
};

export default DivAnimated;
