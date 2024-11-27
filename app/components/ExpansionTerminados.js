import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";
import Image from "next/image";

export default function ExpansionTerminados({ closeModalEdit, textHeadEdit }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
  };
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => closeModalEdit(), 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, closeModalEdit]);

  return (
    <div
      className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${
        isExiting ? "animate-slide-out-right" : "animate-slide-in-right"
      }`}
    >
      <HeadModal
        texto={textHeadEdit}
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-4 w-full md:w-[25rem]">
        <div className="w-[90%] m-auto">
          <div className="mt-4 flex flex-col justify-between">
            <div>
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                  Nombre local
                </label>
                <input
                  type="text"
                  value="Galería comercial"
                  className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                />
              </div>
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                  Dirección
                </label>
                <input
                  type="text"
                  value="Galería comercial"
                  className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                />
              </div>
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                  Link Google Maps
                </label>
                <input
                  type="text"
                  value="htps://maps.com"
                  className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                />
              </div>
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                  Moneda
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="Soles"
                    className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent focus:outline-none"
                    readOnly
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
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                  Costo mensual
                </label>
                <input
                  type="text"
                  value="900.00"
                  className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                />
              </div>
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                  Tipo de locación
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="Galería"
                    className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent focus:outline-none"
                    readOnly
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
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                  Días de operación
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="Lunes - Domingo"
                    className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent focus:outline-none"
                    readOnly
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
              <div className="relative mb-6">
                <label className="absolute -top-3 left-3 bg-[#F5F5F7] text-[#657080] text-sm px-1">
                  Horarios de apertura
                </label>
                <input
                  type="text"
                  value="7:10"
                  className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div>
              <button className="w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
                Ver drive
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
