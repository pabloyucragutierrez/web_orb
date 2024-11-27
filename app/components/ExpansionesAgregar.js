import Image from "next/image";
import HeadModal from "./HeaderModal";
import { useEffect, useState } from "react";

export default function ExpansionesAgregar({ closeModalEdit, textHeadEdit }) {
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
                <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                  País
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="Perú"
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
                  Departamento
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="La libertad"
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
                  Ciudad
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="Trujullo"
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
                  Distrito
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="Trujullo"
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
                  Número
                </label>
                <div className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer">
                  <input
                    type="text"
                    value="101"
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
              <div className="relative mt-4">
                <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                  Enlace
                </label>
                <textarea
                  value="https://docs.google.com/document/d/1vdSKLPuP6IWkoP2s1saH8v7FStMA6prtg/edit?usp=sharing&ouid=118170496166484924220&rto..."
                  className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                  rows="4"
                />
              </div>
            </div>
            <br></br>
            <div>
              <button className="w-[100%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
