import * as React from "react";
import Layout from "../components/Layout";

import Image from "../images/iyengarhanumanasana.jpeg";
import { HeadFC } from "gatsby";

const Yoga = () => {
  return (
    <Layout>
      <div className="card bg-base-100 shadow-lg image-full mt-[130px] rounded-none">
        <figure>
          <img
            src={Image}
            alt="Iyengar Hanumanasana"
            className="w-full rounded-none"
          />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title text-3xl sm:text-5xl font-belleza">
            {" "}
            Sobre el Yoga
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="sm:w-2/3 lg:w-3/4 mx-auto text-justify text-lg sm:text-xl font-light">
          <h1 className="font-belleza font-bold text-3xl sm:text-5xl mt-8 sm:mt-16 mb-4">
            ¿Qué es el yoga?
          </h1>
          <p className="mb-4">
            Patañjali en su obra de los Yoga Sutras define al yoga como el cese
            de las fluctuaciones de la mente (yogaś cittavrittinirodhah), más
            adelante también describe los 8 pasos para alcanzar Samadhi
            (liberación); dentro de esos pasos encontramos la práctica de
            posturas (ásana) y respiración (pranayama), muy presentes en la
            práctica moderna del yoga.
          </p>
          <p className="mb-6 sm:mb-8">
            Esa es la filosofía en la que se sustenta el yoga. Sin dejar por
            completo de lado su origen, la praćtica contemporánea de yoga está
            mas enfocada en una práctica postural y de respiración, la cual nos
            ayuda a lidiar con los problemas cotidianos de la vida moderna,
            ayuda a reducir el estrés, mejorar la salud e incrementar la
            vitalidad.
          </p>
          <div className="divider divider-neutral my-6" />
          <h1 className="font-belleza font-bold text-2xl sm:text-3xl mb-4">
            Yoga Iyengar
          </h1>
          <p className="mb-4">
            Es el método desarrollado por B.K.S. Iyengar, diseñado para que
            cualquier persona pueda practicar ásanas (posturas) sin importar su
            edad, flexibilidad o condición física.
          </p>
          <p className="mb-4">
            Está basado en acciones, ejecutando estas acciones se llegán a
            distintos objetivos. Regularmente se utilizan props (apoyos) para
            tener un práctica amable y a la vez profunda.
          </p>
          <p className="mb-8 sm:mb-16">
            El Yoga Iyengar es muy versátil; es alineación pero también
            movimiento, a veces es detallista y otras es dinámico, puede llegar
            a ser una práctica intensa pero a la vez segura y sanadora!.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Yoga;

export const Head: HeadFC = () => <title>Yoga</title>;
