import * as React from "react";
import Layout from "../components/Layout";
import { HeadFC, navigate } from "gatsby";

import Gilberto from "../images/gilberto.jpeg";
import Karla from "../images/karla.jpg";
import DivAnimated from "../components/DivAnimated";
import WhatsappButton from "../components/commons/WhatsappButton";

const Maestros = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="w-full mt-[120px] sm:mt-0">
        <div className="container py-10 sm:py-16">
          <DivAnimated>
            <h1 className="text-center font-belleza font-bold text-3xl sm:text-5xl mt-32 sm:mt-32 mb-12">
              Maestros
            </h1>
          </DivAnimated>
        </div>
      </div>

      {/* Content */}
      <div className="container pb-16">
        <div className="xl:w-3/4 mx-auto space-y-10">
          {/* Gilberto */}
          <DivAnimated>
            <div className="card bg-base-100 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-[360px_1fr] gap-0">
                <figure className="m-0">
                  <img
                    alt="Gilberto Carrillo Yoga"
                    src={Gilberto}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </figure>

                <div className="card-body p-6 sm:p-10">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="font-belleza font-bold text-2xl sm:text-4xl text-center lg:text-left">
                        Gilberto Carrillo
                      </h2>

                      <p className="mt-2 text-center lg:text-left">
                        <span className="font-semibold">
                          Maestro certificado de Yoga Iyengar Nivel 2
                        </span>
                      </p>
                    </div>

                    <div className="text-lg sm:text-xl leading-relaxed text-justify">
                      <p>
                        Inicié mi práctica en 2007 y desde 2012 imparto clases a
                        practicantes de todos los niveles. Exploré distintos
                        estilos y realicé formaciones en hatha yoga y yoga
                        restaurativo; sin embargo, la profundidad, precisión y
                        claridad del método Iyengar fue lo que verdaderamente me
                        cautivó.
                      </p>

                      <p className="mt-4">
                        En 2017 obtuve la certificación como Profesor Iyengar
                        Nivel 1 y en 2023 recibí la certificación como Maestro
                        de Yoga Iyengar Nivel 2, lo que me permite también
                        desempeñarme como mentor dentro del proceso de
                        formación.
                      </p>

                      <p className="mt-5">
                        He estudiado directo con la familia Iyengar en Pune,
                        India en más de tres ocasiones y asistido a numerosos
                        talleres con maestros senior internacionales, lo que ha
                        ampliado mi comprensión del método y enriquecido mi
                        enseñanza.
                      </p>

                      <p className="mt-5">
                        Para mí, el yoga es una vía de autoconocimiento y
                        transformación: cultivar atención, sensibilidad y
                        claridad interior, más allá del trabajo físico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DivAnimated>

          {/* Karla */}
          <DivAnimated>
            <div className="card bg-base-100 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_360px] gap-0">
                {/* Text first on desktop */}
                <div className="card-body p-6 sm:p-10 order-2 lg:order-1">
                  <h2 className="font-belleza font-bold text-2xl sm:text-4xl text-center lg:text-left">
                    Karla Carrillo
                  </h2>

                  <p className="mt-2 text-center lg:text-left">
                    <span className="font-semibold">
                      En proceso de certificación Iyengar
                    </span>
                  </p>

                  <div className="mt-6 text-lg sm:text-xl leading-relaxed text-justify">
                    <p>
                      Profesora de yoga certificada en hatha yoga y en
                      preparación para la certificación Iyengar. Me mantengo en
                      constante formación a través de talleres y cursos con
                      maestros nacionales e internacionales del método.
                    </p>

                    <ul className="mt-5 space-y-2 list-disc pl-5 opacity-90">
                      <li>
                        Imparto clases en la Universidad Iberoamericana desde
                        2019.
                      </li>
                      <li>
                        Experiencia como instructora en centros deportivos y
                        culturales.
                      </li>
                      <li>Egresada como cirujana dentista por la UNAM.</li>
                    </ul>
                  </div>
                </div>

                {/* Image on desktop right */}
                <figure className="m-0 order-1 lg:order-2">
                  <img
                    alt="Karla Carrillo Yoga"
                    src={Karla}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </DivAnimated>
        </div>
      </div>
    </Layout>
  );
};

export default Maestros;

export const Head: HeadFC = () => <title>Maestros</title>;
