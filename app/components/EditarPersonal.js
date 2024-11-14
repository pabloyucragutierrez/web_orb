import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";
import Image from "next/image";

export default function EditarPersonal({ closeModal }) {
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("Supervisor");
  const [salario, setSalario] = useState(1500);

  const [datosEmpresaOpen, setDatosEmpresaOpen] = useState(false);
  const [datosTrabajadorOpen, setDatosTrabajadorOpen] = useState(false);
  const [documentosOpen, setDocumentosOpen] = useState(false);

  const handleSliderChange = (e) => setSalario(e.target.value);

  const [isExiting, setIsExiting] = useState(false);

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
        texto="Editar personal"
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
      />
      <br></br>
      <br></br>
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-4 w-full md:w-[25rem]">
        <div className="w-[90%] m-auto flex flex-col justify-between min-h-[85vh]">
          <div className="space-y-4">
            {/* Datos de la empresa */}
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setDatosEmpresaOpen(!datosEmpresaOpen)}
              >
                <h2 className="text-[16px] font-[500] text-black mb-1">
                  Datos de la empresa
                </h2>
                <Image
                  src="/iconamoon_arrow_up.png"
                  className={`transition-transform ${
                    datosEmpresaOpen ? "" : "rotate-180"
                  }`}
                  alt="toggle"
                  width={16}
                  height={16}
                />
              </div>
              {datosEmpresaOpen && (
                <div className="space-y-4 mt-4">
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Razón social
                    </label>
                    <input
                      type="text"
                      defaultValue="Dignita Tech"
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      RUC
                    </label>
                    <input
                      type="text"
                      defaultValue="10254893152"
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Domicilio fiscal
                    </label>
                    <input
                      type="text"
                      defaultValue="Calle X urb. Lorem Ipsum"
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Nombre del representante legal
                    </label>
                    <input
                      type="text"
                      defaultValue="Leónidas Yauri"
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Apellidos del representante legal
                    </label>
                    <input
                      type="text"
                      defaultValue="Yuri Villanueva"
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      DNI del representante legal
                    </label>
                    <input
                      type="text"
                      defaultValue="85142386"
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Datos del trabajador */}
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setDatosTrabajadorOpen(!datosTrabajadorOpen)}
              >
                <h2 className="text-[16px] font-[500] text-black mb-1">
                  Datos del trabajador
                </h2>
                <Image
                  src="/iconamoon_arrow_up.png"
                  className={`transition-transform ${
                    datosTrabajadorOpen ? "" : "rotate-180"
                  }`}
                  alt="toggle"
                  width={16}
                  height={16}
                />
              </div>
              {datosTrabajadorOpen && (
                <div className="space-y-4 mt-4">
                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      DNI
                    </label>
                    <input
                      type="text"
                      defaultValue="74963014"
                      onChange={(e) => setDni(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Nombres
                    </label>
                    <input
                      type="text"
                      defaultValue="Elena Sofía"
                      onChange={(e) => setNombres(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      defaultValue="Marquardt Pérez"
                      onChange={(e) => setApellidos(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Dirección de domicilio
                    </label>
                    <input
                      type="text"
                      defaultValue="Marquardt Pérez"
                      onChange={(e) => setDireccion(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      defaultValue="+5198764321"
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      defaultValue="ejemplo@gmail.com"
                      onChange={(e) => setCorreo(e.target.value)}
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="relative mb-4">
                    <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                      Rol
                    </label>
                    <div className="border border-[#EBECEF] rounded-md px-[20px] py-[8px]">
                      <select
                        onChange={(e) => setRol(e.target.value)}
                        className="w-full bg-transparent text-[black] focus:outline-none"
                      >
                        <option>Supervisor</option>
                        <option>Analista</option>
                        <option>Operario</option>
                      </select>
                    </div>
                  </div>

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
            </div>

            {/* Documentos adjuntos */}
            <div>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setDocumentosOpen(!documentosOpen)}
              >
                <h2 className="text-[16px] font-[500] text-black mb-1">
                  Documentos adjuntos
                </h2>
                <Image
                  src="/iconamoon_arrow_up.png"
                  className={`transition-transform ${
                    documentosOpen ? "" : "rotate-180"
                  }`}
                  alt="toggle"
                  width={16}
                  height={16}
                />
              </div>
              {documentosOpen && (
                <div className="relative mt-4">
                  <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                    Enlace del drive
                  </label>
                  <textarea
                    value="https://docs.google.com/document/d/1vdSKLPuP6IWkoP2s1saH8v7FStMA6prtg/edit?usp=sharing&ouid=118170496166484924220&rto..."
                    className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    rows="4"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-10 ">
            <button className="w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
              Guardar
            </button>
            <button className="w-[90%] block mx-auto text-[#E04540] border-2 border-[#E04540] py-[12px] font-medium rounded-[12px] bg-transparent focus:outline-none">
              Eliminar personal
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
