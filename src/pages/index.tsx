import * as React from "react";
import { navigate, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Contacto from "../components/Contacto";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Carousel />
      <div className="min-h-screen flex items-center">
        <div className="container py-8 sm:py-12 md:px-48 text-secondary-content">
          <p className="text-center font-bold font-belleza text-3xl sm:text-5xl">
            Urdhva Yoga
          </p>
          <p className="text-center italic font-medium mb-0 text-xl sm:text-3xl mb-8 sm:mb-12">
            Clases de Yoga Iyengar
          </p>
          <p className="text-center italic text-lg sm:text-xl">
            ¡Te invitamos a formar parte de nuestra comunidad y a explorar los
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
              className="btn btn-primary w-full sm:w-auto min-w-[200px] text-lg"
              onClick={() => navigate("/clases")}
            >
              Clases
            </button>
            <button
              className="btn btn-primary w-full sm:w-auto min-w-[200px] text-lg"
              onClick={() => navigate("/maestros")}
            >
              Maestros
            </button>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div className="bg-[url('../images/home/estudio1.jpg')] w-full h-screen bg-cover bg-[70%] bg-no-repeat" />
        <div className="absolute w-full top-1/2 -translate-y-1/2 text-center bg-base-100/50 text-accent-content py-6 text-3xl font-semibold">
          <button className="" onClick={() => navigate("/estudio")}>
            Nuestro estudio
          </button>
        </div>
      </div>
      <Contacto />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
