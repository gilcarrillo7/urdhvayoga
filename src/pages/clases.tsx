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

            <WhatsappButton
              variant="image"
              image={ImgJueves}
              alt="clase jueves"
              message="Me interesa tomar la clase de yoga Iyengar del jueves."
            />

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
                        <td className="py-4 px-4">19:30 - 20:50 hrs</td>
                      </tr>

                      {/* Miércoles */}
                      <tr className="rounded-xl shadow-sm">
                        <td className="py-4 px-4 font-semibold">Miércoles</td>
                        <td className="py-4 px-4">19:30 - 20:50 hrs</td>
                      </tr>

                      {/* Jueves */}
                      <tr className="rounded-xl shadow-sm">
                        <td className="py-4 px-4 font-semibold">Jueves</td>
                        <td className="py-4 px-4">
                          <p>19:30 - 20:30 hrs</p>
                          <p className="text-sm font-semibold text-primary mt-1">
                            Aportación: $50
                          </p>
                        </td>
                      </tr>

                      {/* Sábado */}
                      <tr className="rounded-xl shadow-sm">
                        <td className="py-4 px-4 font-semibold">Sábado</td>
                        <td className="py-4 px-4">08:30 - 09:50 hrs</td>
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
            <div className="divider divider-neutral my-12" />
            <DivAnimated>
              <h2 className="my-8 text-center font-belleza font-bold text-2xl sm:text-4xl">
                Tarifas
              </h2>
              <div className="overflow-x-auto flex justify-center mb-4">
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-xl">
                    {/* Plan 1 */}
                    <div className="rounded-2xl p-6 shadow-md bg-transparent border border-black">
                      <p className="font-semibold text-lg">
                        1 clase por semana
                      </p>
                      <p className="text-3xl my-2 font-bold">$600</p>
                      <p className="text-sm tracking-wide uppercase font-bold text-gray-600">
                        Mensualidad
                      </p>
                    </div>

                    {/* Plan 2 */}
                    <div className="border rounded-2xl p-6 shadow-md bg-transparent border border-black">
                      <p className="font-semibold text-lg">
                        2 clases por semana
                      </p>
                      <p className="text-3xl my-2 font-bold">$800</p>
                      <p className="text-sm tracking-wide uppercase font-bold text-gray-600">
                        Mensualidad
                      </p>
                    </div>

                    {/* Plan destacado */}
                    <div className="col-span-1 sm:col-span-2 border-2 border-primary rounded-2xl p-6 shadow-lg  bg-transparent border">
                      <p className="font-semibold text-lg">Todas las clases</p>
                      <p className="text-3xl my-2 font-bold text-primary">
                        $1000
                      </p>
                      <p className="text-sm tracking-wide uppercase font-bold text-gray-600">
                        Mensualidad
                      </p>
                    </div>

                    {/* Clases sueltas */}
                    <div className="rounded-2xl p-6 shadow-md bg-transparent border border-black">
                      <p className="font-semibold text-lg">Clase suelta</p>
                      <p className="text-3xl my-2 font-bold">$180</p>
                      <p className="text-sm font-bold text-gray-600">
                        Sin pago de mensualidad
                      </p>
                    </div>

                    <div className="rounded-2xl p-6 shadow-md bg-transparent border border-black">
                      <p className="font-semibold text-lg">Clase en jueves</p>
                      <p className="text-3xl my-2 font-bold">$50</p>
                      <p className="text-sm font-bold text-gray-600">
                        Sin pago de mensualidad
                      </p>
                    </div>

                    {/* Descuento */}
                    <div className="col-span-1 sm:col-span-2 text-center text-base mt-1 bg-blue-25 p-4 rounded-md">
                      Menores de 25 años:{" "}
                      <span className="font-bold">50% de descuento</span> en
                      mensualidad
                    </div>
                  </div>
                </div>
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
