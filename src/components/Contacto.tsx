
import * as React from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contacto = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: refBtn1, inView: inViewBtn1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");

  const sendEmail = (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    setStateMessage("");
    emailjs
      .sendForm(
        "service_3z7zmb8",
        "template_ki2z0ul",
        e.target,
        "iTFKhfuI6SvAekJaC"
      )
      .then(
        (result) => {
          setStateMessage(
            "Gracias por contactarnos, te responderemos a la brevedad"
          );
          setIsSubmitting(false);
        },
        (error) => {
          setIsSubmitting(false);
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div id="contacto" className="min-h-screen flex items-center">
      <div className="container">
        <form className="sm:w-3/4 md:w-2/3 mx-auto" onSubmit={sendEmail}>
          <p
            ref={ref}
            className={`font-belleza text-2xl sm:text-4xl text-center transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "translate-y-24 opacity-0"
            }`}
          >
            CONTACTO
          </p>
          <p
            className={`text-center transition-all duration-1000 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "translate-y-24 opacity-0"
            }`}
          >
            Envíanos un mensaje
            <br /> También puedes contactarnos por{" "}
            <a href="mailto:contacto@urdhvayogaestudio.com" target="_blank" className="underline">
              correo
            </a>{" "}
            o{" "}
            <a
              href="https://wa.me/+525516145283?text=Me%20puedes%20dar%20más%20información%20sobre%20las%20clases%20de%20yoga"
              className="underline"
              target="_blank"
            >
              WhatsApp
            </a>
          </p>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text sm:text-lg">¿Cuál es tu nombre?</span>
            </div>
            <input
              type="text"
              placeholder="Nombre"
              className="input input-bordered w-full"
              name="from_name"
            />
          </label>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text sm:text-lg">
                ¿Cuál es tu correo electrónico?
              </span>
            </div>
            <input
              type="text"
              placeholder="Correo electrónico"
              className="input input-bordered w-full"
              name="from_mail"
            />
          </label>
          <label className="form-control w-full mb-8">
            <div className="label">
              <span className="label-text sm:text-lg">Mensaje</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Mensaje"
              name="message"
            ></textarea>
          </label>
          <div className="w-full text-center">
            {stateMessage && <p className="mb-4">{stateMessage}</p>}
            {isSubmitting ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <button
                ref={refBtn1}
                className={`btn btn-primary w-full sm:w-1/3 text-lg transition-all duration-1000 delay-500 ${
                  inViewBtn1
                    ? "translate-y-0 opacity-100"
                    : "translate-y-24 opacity-0"
                }`}
              >
                Enviar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
