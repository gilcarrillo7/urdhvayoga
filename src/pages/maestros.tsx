import * as React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";

import Gilberto from "../images/gilberto.jpg";
import Karla from "../images/karla.jpg";
import DivAnimated from "../components/DivAnimated";

const Maestros = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center">
        <div className="container">
          <div className="xl:w-3/4 mx-auto text-justify text-lg sm:text-xl font-light pt-4 sm:pt-8">
            <h1 className="text-center font-belleza font-bold text-3xl sm:text-5xl mt-32 sm:mt-32 mb-12">
              Maestros
            </h1>
            <DivAnimated>
              <div className="hero">
                <div className="hero-content lg:items-start flex-col lg:flex-row gap-8">
                  <div className="flex">
                    <img
                      alt="Gilberto Carrillo Yoga"
                      src={Gilberto}
                      className="w-full lg:w-auto max-w-sm m-0 rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-belleza font-bold text-center lg:text-left">
                      Gilberto Carrillo
                    </h1>
                    <p className="py-6">
                      <strong className="font-semibold">
                        Maestro certificado de Yoga Iyengar Nivel 2
                      </strong>
                      <br />
                      Inicié mi práctica de yoga en 2007 y desde 2012 imparto
                      clases de manera regular a grupos de todos los niveles de
                      experiencia. Practiqué estilos y métodos muy variados e
                      hice dos formaciones en hatha yoga y yoga restaurativo,
                      pero fue la profundidad del yoga Iyengar la que me
                      cautivó.
                      <br />
                      <br /> Continuo estudiando, preparándome y practicando
                      bajo las enseñanzas de este método. He estudiado
                      directamente con la familia Iyengar en Pune, India y he
                      tomado clases y talleres intensivos con profesores senior
                      como Chantal Gómez Jauffred (México), David Meloni
                      (Italia), Gloria Goldberg (EUA), Christian Pisano
                      (Francia), Lois Steinberg (EUA), Jawahar Banghera (India),
                      Peter Scott (Australia), Usha Devi (Suiza), Alan Brown
                      (Inglaterra), entre otros además estudié filosofía del
                      yoga y sánscrito con el Dr. Roberto García. <br />
                      <br />
                      Para mí, el yoga es una vía para conectar con mi interior,
                      una herramienta de transformación no solo a nivel físico
                      sino a niveles más profundos. Trato de que mi enseñanza
                      sea entusiasta, busco combinar el dinamismo y la frescura
                      con la precisión y atención características del método
                      Iyengar.
                    </p>
                  </div>
                </div>
              </div>
            </DivAnimated>
            <DivAnimated>
              <div className="hero mt-12">
                <div className="hero-content lg:items-start flex-col lg:flex-row gap-8">
                  <div className="flex lg:hidden">
                    <img
                      alt="Karla Carrillo Yoga"
                      src={Karla}
                      className="w-full lg:w-auto max-w-sm m-0 rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-belleza font-bold text-center lg:text-left">
                      Karla Carrillo
                    </h1>
                    <p className="py-6">
                      <strong className="font-semibold"></strong>
                      Profesora de yoga, certificada en hatha yoga y en
                      preparación para la ceritficación Iyengar.
                      <br />
                      Estoy en constante formación en talleres y cursos con
                      maestros nacionales e internacionales del método. Imparto
                      clases en la Universidad Iberoamericana desde 2019 y he
                      sido instructora en diversos centros deportivos y
                      culturales. Soy egresada como cirujana dentista por la
                      UNAM.
                    </p>
                  </div>
                  <div className="hidden lg:flex">
                    <img
                      alt="Gilberto Carrillo Yoga"
                      src={Gilberto}
                      className="w-full lg:w-auto max-w-sm m-0 rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </DivAnimated>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Maestros;

export const Head: HeadFC = () => <title>Maestros</title>;
