import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";
import Image from "next/image";

export default function EditarPerfil({ closePerfil }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
  };

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        closePerfil();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, closePerfil]);

  return (
    <div
      className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${
        isExiting ? "animate-slide-out-right" : "animate-slide-in-right"
      }`}
    >
      <HeadModal
        texto="Editar Perfil"
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
      />
      <br></br>
      <br></br>
      <div className="py-[12px] px-[24px] overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
        <div className="py-[20px] flex flex-col justify-between h-[89vh]">
          <div className="space-y-6">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                Nombre
              </label>
              <input
                type="text"
                value="Mauricio Soto Bueño"
                className="w-full py-[12px] px-[20px] text-gray-800 bg-[#F9FAFB] border border-[#EBECEF] rounded-md focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="relative w-1/3">
                <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                  Teléfono
                </label>
                <div className=" flex items-center rounded-md bg-[#F9FAFB] border border-[#EBECEF] px-2 py-[12px]">
                  <Image
                    src="/emojione_flag-for-peru.png"
                    alt="Peru Flag"
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  <span className="text-gray-800 font-semibold">+51</span>
                  <svg
                    className="ml-auto h-4 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="relative w-2/3">
                <input
                  type="text"
                  value="973546593"
                  className="w-full py-[12px] px-[20px] text-gray-800 bg-[#F9FAFB] border border-[#EBECEF] rounded-md focus:outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                Correo electrónico
              </label>
              <input
                type="email"
                value="mauriciosoto2508@gmail.com"
                className="w-full py-[12px] px-[20px] text-gray-800 bg-[#F9FAFB] border border-[#EBECEF] rounded-md focus:outline-none"
              />
            </div>
          </div>
          <button className=" w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
