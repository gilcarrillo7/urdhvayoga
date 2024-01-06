import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import { useInView } from "react-intersection-observer";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Contacto from "../components/Contacto";

const IndexPage: React.FC<PageProps> = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: refBtn1, inView: inViewBtn1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: refBtn2, inView: inViewBtn2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: refEstudio, inView: inViewEstudio } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Layout>
      <Carousel />
      <div className="min-h-screen flex items-center">
        <div
          ref={ref}
          className="container py-8 sm:py-12 md:px-48 text-secondary-content"
        >
          <p
            className={`text-center font-bold font-belleza text-3xl sm:text-5xl transition-all duration-1000 ${
              inView ? "opacity-100" : "translate-y-24 opacity-0"
            }`}
          >
            Urdhva Yoga
          </p>
          <p
            className={`text-center italic font-medium mb-0 text-xl sm:text-3xl mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            Clases de Yoga Iyengar
          </p>
          <p className="text-center italic text-lg sm:text-xl">
            ¡Te invitamos a formar parte de nuestro grupo y a explorar los
            múltiples beneficios que el Yoga Iyengar puede aportar a tu vida!
          </p>
          <p className="text-center text-xl sm:text-2xl mt-16 mb-6 font-bold">
            Quiénes somos
          </p>
          <p className="text-center text-lg sm:text-xl">
            Somos un espacio comprometido con la difusión de las enseñanzas y
            los beneficios de la práctica del Yoga. Ofrecemos clases y talleres
            tanto presenciales como en línea. Estamos ubicados en el sur de la
            Ciudad de México.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-around my-6 sm:my-12">
            <button
              ref={refBtn1}
              className={`btn btn-primary w-full sm:w-auto min-w-[200px] text-lg transition-all duration-1000 ${
                inViewBtn1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              }`}
              onClick={() => navigate("/clases")}
            >
              Clases
            </button>
            <button
              ref={refBtn2}
              className={`btn btn-primary w-full sm:w-auto min-w-[200px] text-lg transition-all duration-1000 ${
                inViewBtn2
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              }`}
              onClick={() => navigate("/maestros")}
            >
              Maestros
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-[url('../images/home/estudio1.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            ref={refEstudio}
            className={`max-w-md transition-all duration-1000 ${
              inViewEstudio ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="mb-5 text-5xl font-bold">Estudio</h1>
            <p className="mb-5 text-xl sm:text-2xl">
              Tenemos todo lo necesario para que tu práctica sea segura,
              profunda y divertida.
            </p>
            <button
              className="btn btn-primary w-full sm:w-auto min-w-[200px] text-lg"
              onClick={() => navigate("/estudio")}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
      <Contacto />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
