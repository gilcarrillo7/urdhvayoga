import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import { useInView } from "react-intersection-observer";
import Layout from "../components/Layout";
import HeroSlider from "../components/commons/HeroSlider";

// Si ya tienes WhatsappButton, úsalo donde quieras
import WhatsappButton from "../components/commons/WhatsappButton";

// Opcional: si quieres embebido el mapa aquí también
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import Loader from "../components/Loader";

const scrollToId = (id: string) => {
  if (typeof window === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const IndexPage: React.FC<PageProps> = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: refCTA1, inView: inViewCTA1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: refCTA2, inView: inViewCTA2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Layout>
      {/* HERO */}
      <HeroSlider />

      {/* INTRO */}
      <section
        id="inicio"
        className="min-h-[70vh] flex items-center scroll-mt-28"
      >
        <div
          ref={ref}
          className="container py-10 sm:py-16 md:px-48 text-secondary-content"
        >
          <p
            className={`text-center font-bold font-belleza text-3xl sm:text-5xl transition-all duration-1000 ${
              inView ? "opacity-100" : "translate-y-24 opacity-0"
            }`}
          >
            Urdhva Yoga
          </p>

          <p
            className={`text-center italic font-medium text-xl sm:text-3xl mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            Clases de Yoga Iyengar presencial y en línea
          </p>
          <p className="text-center italic text-lg sm:text-xl">
            Te invitamos a unirte a nuestra comunidad y descubrir cómo la
            práctica del Yoga Iyengar puede transformar tu cuerpo, mente y
            respiración. Explora sus beneficios con una guía precisa y
            consciente.
          </p>
          <p className="text-center text-xl sm:text-2xl mt-16 mb-6 font-bold">
            Quiénes somos
          </p>
          <p className="text-center text-lg sm:text-xl">
            En Urdhva Yoga somos un espacio dedicado a compartir la profundidad
            del Yoga Iyengar, con atención al detalle, el alineamiento y la
            consciencia corporal. Ofrecemos clases y talleres presenciales y en
            línea, abiertos a todos los niveles. Nos encontramos en el sur de la
            Ciudad de México, en un ambiente acogedor y equipado especialmente
            para la práctica.
          </p>
        </div>
      </section>
      {/* CLASES */}
      <section id="clases" className="scroll-mt-28">
        <div className="container py-14 sm:py-20 md:px-24">
          <h2 className="text-center font-belleza font-bold text-3xl sm:text-5xl mb-4">
            Clases
          </h2>
          <p className="text-center text-lg sm:text-xl mb-10">
            Para todos los niveles · Presencial y en línea · Grupos reducidos
          </p>
          <div className="flex justify-center mb-10">
            <div className="w-full md:w-3/4 lg:w-1/2 overflow-x-auto">
              <table className="table table-zebra w-full text-center text-lg sm:text-xl">
                <tbody>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Lunes</td>
                    <td className="py-4 px-4">19:45 - 21:00</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Miércoles</td>
                    <td className="py-4 px-4">19:45 - 21:00</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Sábado</td>
                    <td className="py-4 px-4">08:30 - 10:00</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-center py-4 px-4 text-base">
                      Clase restaurativa y pranayama al final de cada mes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              className="btn btn-primary w-full sm:w-auto min-w-[220px]"
              onClick={() => navigate("/clases")}
            >
              Ver clases
            </button>
          </div>
        </div>
      </section>

      {/* ESTUDIO */}
      <section id="estudio" className="scroll-mt-28">
        <div className="hero min-h-[70vh] bg-[url('../images/home/estudio1.jpg')]">
          <div className="hero-overlay bg-black/35"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h2 className="mb-5 text-4xl sm:text-5xl font-bold font-belleza">
                Estudio
              </h2>
              <p className="mb-5 text-xl sm:text-2xl">
                Props Iyengar, ambiente acogedor y espacio diseñado para una
                práctica segura y profunda.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  className="btn btn-primary w-full sm:w-auto min-w-[220px]"
                  onClick={() => (window.location.href = "/estudio")}
                >
                  Ver estudio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOGA (resumen) */}
      <section id="yoga" className="scroll-mt-28">
        <div className="container py-14 sm:py-20 md:px-24">
          <h2 className="text-center font-belleza font-bold text-3xl sm:text-5xl mb-6">
            Sobre el Yoga
          </h2>
          <p className="text-center text-lg sm:text-xl mb-10">
            ¿Qué es Yoga Iyengar y por qué es tan accesible y profundo?
          </p>

          <div className="max-w-3xl mx-auto text-lg sm:text-xl font-light text-justify">
            <p className="mb-6">
              El método Iyengar está diseñado para que cualquier persona pueda
              practicar con seguridad, apoyándose en acciones claras y, cuando
              es necesario, props para profundizar sin forzar.
            </p>
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary min-w-[240px]"
              onClick={() => (window.location.href = "/yoga")}
            >
              Leer más
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Urdhva Yoga</title>;
