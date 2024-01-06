import * as React from "react";
import Layout from "../components/Layout";
import { HeadFC, Link } from "gatsby";

const Clases = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="bg-[url('../images/clases1.jpg')] w-full h-[40vh] sm:h-[60vh] bg-cover bg-[35%] sm:bg-[0%_0%] bg-no-repeat mt-[120px] sm:mt-0" />
      </div>
      <div className="flex items-center">
        <div className="container">
          <div className="sm:w-2/3 lg:w-3/4 mx-auto text-justify text-lg sm:text-xl font-light pt-4 sm:pt-8">
            <h1 className="text-center font-belleza font-bold text-3xl sm:text-5xl mt-6 sm:mt-8 sm:mt-16 mb-4">
              Clases
            </h1>
            <p className="text-center mb-4 sm:mb-8">
              Contamos con clases presenciales en nuestro{" "}
              <Link to="/estudio" className="underline">
                estudio
              </Link>{" "}
              y clases en línea vía zoom.
            </p>
            <h2 className="mt-8 mb-4 text-center font-belleza font-bold text-2xl sm:text-4xl">
              Horarios
            </h2>
            <div className="overflow-x-auto flex justify-center mb-4">
              <div className="w-full sm:w-1/2">
                <table className="table table-zebra text-xl">
                  <tbody>
                    <tr>
                      <th className="">Lunes</th>
                      <td className="text-center">
                        <p className="">19:00 - 20:20 hrs</p>
                        <p className="text-sm font-bold">Multinivel</p>
                        <p className="text-sm">Presencial y en línea</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Miércoles</th>
                      <td className="text-center">
                        <p className="">19:00 - 20:20 hrs</p>
                        <p className="text-sm font-bold">Multinivel</p>
                        <p className="text-sm">Presencial y en línea</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Jueves</th>
                      <td className="text-center">
                        <p className="">19:30 - 20:50 hrs</p>
                        <p className="text-sm font-bold">Multinivel</p>
                        <p className="text-sm">Presencial y en línea</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Sábados</th>
                      <td className="text-center">
                        <p className="">08:30 - 09:50 hrs</p>
                        <p className="text-sm font-bold">Multinivel</p>
                        <p className="text-sm">Presencial y en línea</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center mb-8 sm:mb-16 text-base">
              Clase Restaurativa y clase de Pranayama al final de cada mes.
            </p>
            <h2 className="mt-8 mb-4 text-center font-belleza font-bold text-2xl sm:text-4xl">
              Tarifas
            </h2>
            <div className="overflow-x-auto flex justify-center mb-4">
              <div className="w-full sm:w-1/2">
                <table className="table table-zebra text-xl">
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <p className="font-semibold">1 clase por semana</p>
                        <p className="text-2xl my-2">$500</p>
                        <p className="text-sm font-bold">Mensualidad</p>
                      </td>
                      <td className="text-center">
                        <p className="font-semibold">2 clases por semana</p>
                        <p className="text-2xl my-2">$800</p>
                        <p className="text-sm font-bold">Mensualidad</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <p className="font-semibold">3 clases por semana</p>
                        <p className="text-2xl my-2">$900</p>
                        <p className="text-sm font-bold">Mensualidad</p>
                      </td>
                      <td className="text-center">
                        <p className="font-semibold">Todas las clases</p>
                        <p className="text-2xl my-2">$1000</p>
                        <p className="text-sm font-bold">Mensualidad</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center" colSpan={2}>
                        <p className="font-semibold">Clase suelta</p>
                        <p className="text-2xl my-2">$135</p>
                        <p className="text-sm font-bold">
                          Sin pago de mensualidad
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center" colSpan={2}>
                        <p className="font-semibold">Primera clase</p>
                        <p className="text-2xl my-2">$50</p>
                        <p className="text-sm font-bold">
                          Toma tu primer clase a un precio reducido
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center mb-8 sm:mb-16">
              <button className="btn btn-primary w-full sm:w-auto min-w-[200px] text-lg mx-auto">
                Quiero tomar una clase
              </button>
            </div>
            <p className="text-center mb-8 sm:mb-16">
              Para clases particulares{" "}
              <Link to="/#contacto" className="underline">
                contactanos
              </Link>
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
