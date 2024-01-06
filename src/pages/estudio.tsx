import * as React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import Img1 from "../images/estudio/bloque.jpg";
import Img2 from "../images/estudio/silla.jpg";
import Img3 from "../images/estudio/cinturon.jpg";
import Img4 from "../images/estudio/bolster.jpg";
import Img5 from "../images/estudio/cobijas.jpg";
import Img6 from "../images/estudio/cuerdas1.jpg";

const libraries: any[] = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "300px",
};
const center = {
  lat: 19.2714799,
  lng: -99.1839657,
};

const Estudio = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDXaNgCknwK9Yi-Gg4L2FKOh7cDE5jBhSY",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <Layout>
      <div className="w-full">
        <div className="bg-[url('../images/estudio/header1.jpg')] w-full h-[40vh] sm:h-[60vh] bg-cover bg-[35%] sm:bg-[30%] bg-no-repeat mt-[120px] sm:mt-0" />
      </div>
      <div className="container">
        <div className="sm:w-2/3 lg:w-3/4 mx-auto text-justify text-lg sm:text-xl font-light pt-4 sm:pt-8">
          <h1 className="text-center font-belleza font-bold text-3xl sm:text-5xl mt-6 sm:mt-8 sm:mt-16 mb-4">
            Estudio
          </h1>
          <p className="text-center mb-4 sm:mb-8">
            Estamos comprometidos a ofrecer un ambiente enriquecedor y seguro
            donde puedas explorar y profundizar en tu práctica de yoga.
          </p>
          <p className="text-center mb-4 sm:mb-8">
            En nuestro estudio contamos con una amplia gama de props de yoga
            Iyengar para adaptarnos a las necesidades individuales de cada
            practicante.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="card bg-base-100 shadow-lg image-full">
            <figure>
              <img src={Img1} alt="Bloques Yoga" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-3xl font-belleza">Bloques</h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg image-full">
            <figure>
              <img src={Img6} alt="Cuerdas Yoga" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-3xl font-belleza">Cuerdas</h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg image-full">
            <figure>
              <img src={Img3} alt="Cinturones Yoga" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-3xl font-belleza">Cinturones</h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg image-full">
            <figure>
              <img src={Img4} alt="Bolster Yoga" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-3xl font-belleza">Bolster</h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg image-full">
            <figure>
              <img src={Img5} alt="Cobijas Yoga" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-3xl font-belleza">Cobijas</h2>
            </div>
          </div>
          <div className="card bg-base-100 shadow-lg image-full">
            <figure>
              <img src={Img2} alt="Sillas Yoga" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-3xl font-belleza">Sillas</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8">
        <div>
          <div className="text-center mb-8 sm:mb-16">
            <button className="btn btn-primary w-full sm:w-auto min-w-[200px] text-lg mx-auto">
              Quiero tomar una clase
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-12 mb-12">
            <div className="">
              <h2 className="mt-8 mb-4 font-belleza font-bold text-2xl sm:text-4xl">
                Ubicación
              </h2>
              <p className="mb-8">
                Estamos ubicados en Zacapulas 1, Colonia Pedregal de Santa
                Úrsula Xitla, Tlalpan. CDMX.
              </p>
            </div>
            <div className="w-full">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Estudio;

export const Head: HeadFC = () => <title>Estudio</title>;
