import * as React from "react";
import Layout from "../components/Layout";
import { HeadFC, Link } from "gatsby";
import { useInView } from "react-intersection-observer";
import DivAnimated from "../components/DivAnimated";
import ImgJueves from "../images/claseJueves.png";
import WhatsappButton from "../components/commons/WhatsappButton";

const Clases = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <Layout>
      <div className="w-full">
        <div className="bg-[url('../images/clases1.jpg')] w-full h-[40vh] sm:h-[60vh] bg-cover bg-[35%] sm:bg-[0%_0%] bg-no-repeat mt-[120px] sm:mt-0" />
      </div>
      <div className="flex items-center">
        <div className="container">
          <div className="sm:w-2/3 lg:w-3/4 mx-auto text-justify text-lg sm:text-xl font-light pt-4 sm:pt-8">
            <h1
              ref={ref}
              className={`text-center font-belleza font-bold text-3xl sm:text-5xl mt-6 sm:mt-8 sm:mt-16 mb-4 transition-all duration-1000 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "translate-y-24 opacity-0"
              }`}
            >
              Clases
            </h1>
            <p className="mb-4 text-center">
              Las clases son para todos los niveles, desde principiantes hasta
              avanzadosen grupos reducidos. En cada clase se ofrecen
              modificaciones y ajustes para adaptarse a las necesidades de cada
              estudiante. Nuestro enfoque es en la alineación, la respiración y
              la conciencia corporal, siguiendo los principios del yoga Iyengar.
            </p>
            <p
              className={`text-center mb-4 sm:mb-8 transition-all duration-1000 delay-500 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              Contamos con clases presenciales en nuestro{" "}
              <Link to="/estudio" className="underline">
                estudio
              </Link>{" "}
              y clases en línea vía zoom.
            </p>

            <DivAnimated className="delay-500">
              <h2 className="mt-8 mb-1 text-center font-belleza font-bold text-2xl sm:text-4xl">
                Horarios
              </h2>
              <h5 className="text-center text-lg sm:text-xl mb-4">
                Presenciales y en línea
              </h5>
              <div className="overflow-x-auto flex justify-center mb-6">
                <div className="w-full md:w-3/4 lg:w-1/2">
                  <table className="table table-zebra w-full text-center text-xl">
                    <tbody>
                      {/* Lunes */}
                      <tr className="rounded-xl shadow-sm">
                        <td className="py-4 px-4 font-semibold">Lunes</td>
                        <td className="py-4 px-4">19:45 - 21:00 hrs</td>
                      </tr>

                      {/* Miércoles */}
                      <tr className="rounded-xl shadow-sm">
                        <td className="py-4 px-4 font-semibold">Miércoles</td>
                        <td className="py-4 px-4">19:45 - 21:00 hrs</td>
                      </tr>

                      {/* Jueves */}
                      {/* <tr className="rounded-xl shadow-sm">
                        <td className="py-4 px-4 font-semibold">Jueves</td>
                        <td className="py-4 px-4">
                          <p>19:30 - 20:30 hrs</p>
                          <p className="text-sm font-semibold text-primary mt-1">
                            Aportación: $50
                          </p>
                        </td>
                      </tr> */}

                      {/* Sábado */}
                      <tr className="rounded-xl shadow-sm">
                        <td className="py-4 px-4 font-semibold">Sábado</td>
                        <td className="py-4 px-4">08:30 - 10:00 hrs</td>
                      </tr>

                      {/* Clase especial */}
                      <tr>
                        <td
                          colSpan={2}
                          className="text-center py-4 px-4 rounded-md text-base font-medium"
                        >
                          Clase restaurativa y clase de pranayama al final de
                          cada mes.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </DivAnimated>

            <div className="divider divider-neutral my-16" />

            <DivAnimated>
              <h2 className="text-center font-belleza font-bold text-3xl sm:text-5xl text-primary mb-10">
                Paquetes Mensuales
              </h2>

              <div className="flex justify-center">
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  {[
                    { nombre: "5 clases", precio: "$600" },
                    { nombre: "8 clases", precio: "$800" },
                    {
                      nombre: "Clases ilimitadas",
                      precio: "$1000",
                      destacado: false,
                    },
                  ].map(({ nombre, precio, destacado }, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl px-2 py-4 sm:p-4 xl:p-6 shadow-lg border ${
                        destacado
                          ? "border-primary bg-primary/10"
                          : "border-gray-300 bg-base-100"
                      }`}
                    >
                      <p
                        className={`text-base md:text-lg font-bold tracking-wider uppercase mb-2 ${
                          destacado ? "text-primary" : "text-primary"
                        }`}
                      >
                        {nombre}
                      </p>
                      <p
                        className={`text-2xl md:text-3xl ${
                          destacado ? "text-primary" : "text-gray-800"
                        }`}
                      >
                        {precio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-base text-center font-bold text-gray-600">
                Asiste en cualquier horario · Vigencia de 1 mes · Pago
                anticipado
              </p>

              <h3 className="mt-12 mb-2 text-center font-belleza font-bold text-2xl sm:text-4xl">
                Clase Suelta
              </h3>
              <p className="text-center text-base text-gray-600 mb-6">
                Asiste sin pagar mensualidad
              </p>

              <div className="grid grid-cols-2 gap-4 w-full lg:w-4/5 mx-auto text-center">
                {[
                  // { precio: "$50", label: "Clase en jueves", destacado: true },
                  {
                    precio: "$125",
                    label: "Clase lunes o miércoles",
                    destacado: false,
                  },
                  { precio: "$150", label: "Clase en sábado" },
                ].map(({ precio, label, destacado }, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl py-4 px-2 sm:p-4 xl:p-6 shadow-md border ${
                      destacado
                        ? "text-primary border-primary bg-primary/10"
                        : "text-gray-600 bg-base-100 border-gray-300"
                    }
                        `}
                  >
                    <p className="text-base md:text-lg font-bold text-primary ">
                      {label}
                    </p>
                    <p className="text-2xl md:text-3xl font-normal mb-2 text-gray-800">
                      {precio}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 w-full md:w-3/4 xl:w-2/3 mx-auto bg-blue-50 border border-blue-200 text-center text-base rounded-md p-4">
                Menores de 25 años:{" "}
                <span className="font-bold">50% de descuento</span> en
                mensualidad
              </div>
            </DivAnimated>

            <div className="text-center my-8 sm:my-16">
              <WhatsappButton variant="full" />
            </div>
            <p className="text-center mb-8 sm:mb-16">
              Para clases particulares{" "}
              <WhatsappButton
                variant="link"
                label="contactanos"
                message="Me interesa tomar clases partículares de yoga iyengar."
              />
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Clases;

export const Head: HeadFC = () => <title>Clases</title>;
