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
import DivAnimated from "../components/DivAnimated";
import Loader from "../components/Loader";
import WhatsappButton from "../components/commons/WhatsappButton";

const libraries: any[] = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "320px",
};
const center = {
  lat: 19.271459,
  lng: -99.181395,
};

type PropItem = {
  title: string;
  img: string;
  alt: string;
  desc: string;
};

const propsItems: PropItem[] = [
  {
    title: "Bloques",
    img: Img1,
    alt: "Bloques de yoga",
    desc: "Brindan estabilidad y claridad , permitiendo sostener y profundizar en todas las familias de ásanas.",
  },
  {
    title: "Cuerdas",
    img: Img6,
    alt: "Cuerdas de yoga",
    desc: "Facilitan tracción, apertura y extensión con soporte, ayudando a crear espacio en la columna y todo el cuerpo.",
  },
  {
    title: "Cinturones",
    img: Img3,
    alt: "Cinturones de yoga",
    desc: "Extienden el alcance sin forzar, favoreciendo una alineación precisa y protegiendo las articulaciones en posturas de apertura y flexibilidad.",
  },
  {
    title: "Bolster",
    img: Img4,
    alt: "Bolster de yoga",
    desc: "Proporciona apoyo cómodo y estable en prácticas restaurativas y pranayama, permitiendo relajación profunda y apertura del pecho.",
  },
  {
    title: "Cobijas",
    img: Img5,
    alt: "Cobijas de yoga",
    desc: "Ofrecen altura, soporte y ajuste fino para hombros, cuello y pelvis, mejorando la comodidad y la precisión en cada postura.",
  },
  {
    title: "Sillas",
    img: Img2,
    alt: "Sillas de yoga",
    desc: "Aportan accesibilidad y soporte en extensiones, torsiones y prácticas terapéuticas, haciendo la práctica más inclusiva y segura.",
  },
];

const Estudio = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY ?? "",
    libraries,
  });

  const [selected, setSelected] = React.useState<PropItem | null>(null);

  const openModal = (item: PropItem) => {
    setSelected(item);
    (
      document.getElementById("prop_modal") as HTMLDialogElement | null
    )?.showModal();
  };

  const closeModal = () => {
    (
      document.getElementById("prop_modal") as HTMLDialogElement | null
    )?.close();
    setSelected(null);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <Loader />;

  return (
    <Layout>
      <div className="w-full">
        <div className="relative w-full h-[42vh] sm:h-[62vh] mt-[120px] sm:mt-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('../images/estudio/header5.jpeg')] bg-cover bg-[35%] sm:bg-[30%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-end"></div>
        </div>
      </div>

      {/* Intro */}
      <div className="container">
        <DivAnimated>
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
        </DivAnimated>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {propsItems.map((item) => (
            <DivAnimated key={item.title} classNameHidden="translate-y-24">
              <button
                type="button"
                onClick={() => openModal(item)}
                className="card bg-base-100 shadow-lg overflow-hidden text-left hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <figure className="relative">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                </figure>
                {/*
                <div className="card-body">
                  <h3 className="card-title font-belleza text-2xl">
                    {item.title}
                  </h3>
                </div>*/}
              </button>
            </DivAnimated>
          ))}
        </div>
      </div>

      {/* Modal DaisyUI */}
      <dialog id="prop_modal" className="modal">
        <div className="modal-box max-w-3xl p-0 overflow-hidden">
          <div className="relative">
            {selected && (
              <img
                src={selected.img}
                alt={selected.alt}
                className="w-full max-h-[70vh] object-cover"
              />
            )}

            <button
              className="btn btn-circle btn-sm absolute top-3 right-3"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <h3 className="font-belleza text-3xl font-bold text-center">
              {selected?.title}
            </h3>
            {/* <p className="mt-2 text-lg opacity-80">{selected?.desc}</p> */}
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>

      {/* CTA + Ubicación */}
      <div className="container mt-10 sm:mt-14">
        <DivAnimated>
          <div className="text-center mb-10 sm:mb-16">
            <WhatsappButton variant="full" />
          </div>
        </DivAnimated>

        <div className="flex flex-col sm:flex-row sm:gap-12 mb-12">
          <DivAnimated className="sm:w-1/3">
            <div>
              <h2 className="mt-2 sm:mt-0 mb-4 font-belleza font-bold text-2xl sm:text-4xl">
                Ubicación
              </h2>
              <p className="mb-4 text-lg">
                Zacapulas 1, Col. Pedregal de Santa Úrsula Xitla, Tlalpan. CDMX.
              </p>

              <a
                className="btn btn-outline w-full sm:w-auto"
                href="https://www.google.com/maps/place/Urdhva+Yoga+Estudio/@19.2715878,-99.1812663,20.31z/data=!4m6!3m5!1s0x85ce013626ec5865:0x650b177358679170!8m2!3d19.2714799!4d-99.1813908!16s%2Fg%2F11vjnpsdp6?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps
              </a>
            </div>
          </DivAnimated>

          <DivAnimated
            className="w-full sm:w-2/3"
            classNameHidden="translate-y-24"
          >
            <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-base-300">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            </div>
          </DivAnimated>
        </div>
      </div>

      {/* Footer image / ambience */}
      <div className="w-full mt-12 mb-16">
        <div className="relative w-full h-[42vh] sm:h-[62vh] overflow-hidden">
          <div className="absolute inset-0 bg-[url('../images/estudio/estudio1.jpg')] bg-cover bg-[35%] sm:bg-[30%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      </div>
    </Layout>
  );
};

export default Estudio;

export const Head: HeadFC = () => <title>Estudio</title>;
