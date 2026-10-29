import React from "react";
import Whatsapp from "../social/Whatsapp";

type WhatsappButtonProps = {
  message?: string;
  phone?: string;
  className?: string;
  variant?: "icon" | "full" | "link" | "image";
  label?: string; // para full o link
  inView?: boolean;
  buttonRef?: React.Ref<HTMLButtonElement>;
  image?: string; // solo aplica en variant === "image"
  alt?: string; // texto alternativo para la imagen
};

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  message = "Me puedes dar más información sobre las clases de yoga",
  phone = "+525516145283",
  className = "",
  variant = "icon",
  label = "Quiero tomar una clase",
  inView = true,
  buttonRef,
  image,
  alt = "Contáctanos por WhatsApp",
}) => {
  const url = `https://wa.me/${phone.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  if (variant === "full") {
    return (
      <button
        ref={buttonRef}
        onClick={() => window.open(url, "_blank")}
        className={`btn btn-primary w-full sm:w-auto min-w-[200px] text-lg mx-auto transition-all duration-1000 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        } ${className}`}
      >
        {label}
      </button>
    );
  }

  if (variant === "link") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`underline ${className}`}
      >
        {label}
      </a>
    );
  }

  if (variant === "image" && image) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <img src={image} alt={alt} />
      </a>
    );
  }

  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className={`btn btn-ghost btn-circle w-8 sm:w-12 ${className}`}
      aria-label="Contáctanos por WhatsApp"
    >
      <Whatsapp />
    </button>
  );
};

export default WhatsappButton;
