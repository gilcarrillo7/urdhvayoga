import * as React from "react";

const Contacto = () => {
  return (
    <div id="contacto" className="min-h-screen flex items-center">
      <div className="container">
        <form className="sm:w-3/4 md:w-2/3 mx-auto">
          <p className="font-belleza text-2xl sm:text-4xl text-center">
            CONTACTO
          </p>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text sm:text-lg">¿Cuál es tu nombre?</span>
            </div>
            <input
              type="text"
              placeholder="Nombre"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text sm:text-lg">
                ¿Cuál es tu correo electrónico?
              </span>
            </div>
            <input
              type="text"
              placeholder="Correo electrónico"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full mb-8">
            <div className="label">
              <span className="label-text sm:text-lg">Mensaje</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Mensaje"
            ></textarea>
          </label>
          <div className="w-full text-center">
            <button className="btn btn-primary w-full sm:w-1/3 text-lg">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
