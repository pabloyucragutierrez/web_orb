import Image from "next/image";
import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";

export default function AgregarPersonal({ closeModal }) {
  const [isExiting, setIsExiting] = useState(false);

  const [activeSection, setActiveSection] = useState("Empresa");

  const [razonSocial, setRazonSocial] = useState("Dignita Tech");
  const [ruc, setRuc] = useState("10254893152");
  const [domicilioFiscal, setDomicilioFiscal] = useState(
    "Calle X urb. Lorem Ipsum"
  );
  const [nombreRepresentante, setNombreRepresentante] =
    useState("Leónidas Yauri");
  const [apellidosRepresentante, setApellidosRepresentante] =
    useState("Yuri Villanueva");

  const [dni, setDni] = useState("74963014");
  const [nombres, setNombres] = useState("Elena Sofía");
  const [apellidos, setApellidos] = useState("Marquardt Pérez");
  const [direccion, setDireccion] = useState("Marquardt Pérez");
  const [telefono, setTelefono] = useState("+5198764321");
  const [correo, setCorreo] = useState("ejemplo@gmail.com");
  const [rol, setRol] = useState("Supervisor");
  const [salario, setSalario] = useState(1500);
  const [enlaceDrive, setEnlaceDrive] = useState(
    "https://docs.google.com/document/d/1vdSKLPuP6IWkoP2s1H8v7FStMA6prtg/edit?usp=sharing&ouid=118170496166484924220&rto..."
  );

  const handleNext = () => {
    if (activeSection === "Empresa") setActiveSection("Trabajador");
    else if (activeSection === "Trabajador") setActiveSection("Documentos");
  };

  const handleBack = () => {
    if (activeSection === "Trabajador") setActiveSection("Empresa");
    else if (activeSection === "Documentos") setActiveSection("Trabajador");
  };

  const handleSliderChange = (e) => {
    setSalario(Number(e.target.value));
  };

  const handleClose = () => {
    setIsExiting(true);
  };
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => closeModal(), 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, closeModal]);

  return (
    <div
      className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${
        isExiting ? "animate-slide-out-right" : "animate-slide-in-right"
      }`}
    >
      <HeadModal
        texto="Agregar personal"
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-4 w-full md:w-[25rem]">
        <div className="w-[90%] m-auto">
          {/* Tabs */}
          <div className="flex justify-between mb-[40px] border-b pb-2">
            <div
              className="w-[8rem] pt-[8px] text-center cursor-pointer flex justify-center items-center flex-col"
              onClick={() => setActiveSection("Empresa")}
            >
              <Image
                src="/mdi_company.png"
                alt="Empresa"
                width={24}
                height={24}
              />
              <p
                className={`text-sm ${
                  activeSection === "Empresa"
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                Empresa
              </p>
              {activeSection === "Empresa" && (
                <div className="border-b-[3px] border-black w-full mt-[14px]" />
              )}
            </div>
            <div
              className="w-[8rem] pt-[8px] text-center cursor-pointer flex justify-center items-center flex-col"
              onClick={() => setActiveSection("Trabajador")}
            >
              <Image
                src="/healthicons_city-worker.png"
                alt="Trabajador"
                width={24}
                height={24}
              />
              <p
                className={`text-sm ${
                  activeSection === "Trabajador"
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                Trabajador
              </p>
              {activeSection === "Trabajador" && (
                <div className="border-b-[3px] border-black w-full mt-[14px]" />
              )}
            </div>
            <div
              className="w-[8rem] pt-[8px] text-center cursor-pointer flex justify-center items-center flex-col"
              onClick={() => setActiveSection("Documentos")}
            >
              <Image
                src="/ic_round-share.png"
                alt="Documentos"
                width={24}
                height={24}
              />
              <p
                className={`text-sm ${
                  activeSection === "Documentos"
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
              >
                Documentos
              </p>
              {activeSection === "Documentos" && (
                <div className="border-b-[3px] border-black w-full mt-[14px]" />
              )}
            </div>
          </div>

          <div className="flex flex-col min-h-[70vh] justify-between">
            {/* Section Content */}
            <div>
              {activeSection === "Empresa" && (
                <div>
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                      Razón social
                    </label>
                    <input
                      type="text"
                      value={razonSocial}
                      onChange={(e) => setRazonSocial(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                      RUC
                    </label>
                    <input
                      type="text"
                      value={ruc}
                      onChange={(e) => setRuc(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                      Domicilio fiscal
                    </label>
                    <input
                      type="text"
                      value={domicilioFiscal}
                      onChange={(e) => setDomicilioFiscal(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                      Nombre del representante legal
                    </label>
                    <input
                      type="text"
                      value={nombreRepresentante}
                      onChange={(e) => setNombreRepresentante(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                      Apellidos del representante legal
                    </label>
                    <input
                      type="text"
                      value={apellidosRepresentante}
                      onChange={(e) =>
                        setApellidosRepresentante(e.target.value)
                      }
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {activeSection === "Trabajador" && (
                <div>
                  {/* DNI */}
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      DNI
                    </label>
                    <input
                      type="text"
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  {/* Nombres */}
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Nombres
                    </label>
                    <input
                      type="text"
                      value={nombres}
                      onChange={(e) => setNombres(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  {/* Apellidos */}
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      value={apellidos}
                      onChange={(e) => setApellidos(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  {/* Dirección */}
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Dirección de domicilio
                    </label>
                    <input
                      type="text"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  {/* Teléfono */}
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  {/* Correo */}
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                  {/* Rol */}
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Rol
                    </label>
                    <div className="flex items-center w-full border border-[#EBECEF] rounded-md">
                      <input
                        type="text"
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                        className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent focus:outline-none"
                      />
                      <Image
                        src="/iconamoon_arrow_bottom.png"
                        className="mr-4"
                        alt="arrow"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  {/* Salario */}
                  <div className="relative mb-6">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1 z-10">
                      Salario
                    </label>

                    <div className="flex items-center space-x-4 mt-4">
                      <div className="py-[16px] px-[20px] border rounded-[8px] text-center text-gray-800 ">
                        {`S/ ${parseFloat(salario).toFixed(2)}`}
                      </div>

                      <div className="relative flex-1">
                        <div className="relative h-2 bg-[#EFEFEF] rounded-full overflow-hidden">
                          <div
                            className="absolute h-2 bg-[#EFEFEF] rounded-full transition-width duration-200"
                            style={{
                              width: `${
                                ((salario - 1000) / (5000 - 1000)) * 100
                              }%`,
                            }}
                          ></div>
                        </div>

                        <div
                          className="absolute top-[-6px] w-6 h-6 bg-white border-2 border-[#D3D6DA] rounded-full shadow-md"
                          style={{
                            left: `${
                              ((salario - 1000) / (5000 - 1000)) * 100
                            }%`,
                            transform: "translateX(-50%)",
                          }}
                        ></div>

                        <input
                          type="range"
                          min="1000"
                          max="5000"
                          value={salario}
                          onChange={handleSliderChange}
                          className="absolute inset-0 opacity-0 w-full cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "Documentos" && (
                <div>
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Enlace del drive
                    </label>
                    <textarea
                      value={enlaceDrive}
                      onChange={(e) => setEnlaceDrive(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                      rows="4"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-4 flex-col-reverse gap-[10px]">
              {activeSection !== "Empresa" && (
                <button
                  onClick={handleBack}
                  className="w-[90%] block mx-auto text-[#657080] py-[12px] border-2 border-[#657080] font-medium rounded-[12px] bg-transparent focus:outline-none"
                >
                  Retroceder
                </button>
              )}
              {activeSection === "Documentos" ? (
                <button className="w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
                  Agregar
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none"
                >
                  Siguiente
                </button>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
