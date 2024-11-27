import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";
import Image from "next/image";

export default function EditarContrato({
  closeModalEdit,
  textHeadEdit,
  textHeadEdit2,
  textHeadEdit3,
  textHeadEdit4,
  titleInput,
}) {
  const [isExiting, setIsExiting] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  const [checkboxState2, setCheckboxState2] = useState(false);
  const [checkboxState3, setCheckboxState3] = useState(false);
  const toggleCheckbox = () => {
    setCheckboxState(!checkboxState);
  };
  const toggleCheckbox2 = () => {
    setCheckboxState2(!checkboxState2);
  };
  const toggleCheckbox3 = () => {
    setCheckboxState3(!checkboxState3);
  };

  const handleCloseEdit = () => {
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
      {textHeadEdit && !textHeadEdit2 && !textHeadEdit3 && !textHeadEdit4 && (
        <>
          <HeadModal
            texto={textHeadEdit}
            icon="/iconamoon_arrow-up-2-duotone.png"
            onClose={handleCloseEdit}
          />
          <br />
          <br />
          <div className="py-[12px] px-[24px] overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
            <div className="py-[20px] flex flex-col justify-between h-[89vh]">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-[#657080]">{titleInput}</span>
                <button className="py-[12px] px-[20px] bg-black text-white font-medium rounded-md focus:outline-none">
                  Drive
                </button>
              </div>

              <button className="text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
                Listo
              </button>
            </div>
          </div>
        </>
      )}
      {textHeadEdit2 && !textHeadEdit && !textHeadEdit3 && !textHeadEdit4 && (
        <>
          <HeadModal
            texto={textHeadEdit2}
            icon="/iconamoon_arrow-up-2-duotone.png"
            onClose={handleCloseEdit}
          />
          <br />
          <br />
          <div className="py-[12px] px-[24px] overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
            <div className="py-[20px] flex flex-col justify-between h-[89vh]">
              <div>
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-sm text-[#000]">
                    Lugar céntrico/transcurrido
                  </span>
                  <div className="flex items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkboxState}
                        onChange={toggleCheckbox}
                      />
                      <span
                        className={`${
                          checkboxState ? "bg-black" : "bg-[#D6D9DD]"
                        } w-10 h-6 flex items-center rounded-full p-1`}
                      >
                        <span
                          className={`${
                            checkboxState ? "translate-x-4" : "translate-x-0"
                          } bg-white w-4 h-4 rounded-full transform transition-transform`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-sm text-[#000]">Primer piso</span>
                  <div className="flex items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkboxState2}
                        onChange={toggleCheckbox2}
                      />
                      <span
                        className={`${
                          checkboxState2 ? "bg-black" : "bg-[#D6D9DD]"
                        } w-10 h-6 flex items-center rounded-full p-1`}
                      >
                        <span
                          className={`${
                            checkboxState2 ? "translate-x-4" : "translate-x-0"
                          } bg-white w-4 h-4 rounded-full transform transition-transform`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-sm text-[#000]">
                    1km alejado de otro orb point
                  </span>
                  <div className="flex items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkboxState3}
                        onChange={toggleCheckbox3}
                      />
                      <span
                        className={`${
                          checkboxState3 ? "bg-black" : "bg-[#D6D9DD]"
                        } w-10 h-6 flex items-center rounded-full p-1`}
                      >
                        <span
                          className={`${
                            checkboxState3 ? "translate-x-4" : "translate-x-0"
                          } bg-white w-4 h-4 rounded-full transform transition-transform`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <button className="text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
                  Listo
                </button>
                <button className="text-[#E04540] py-[12px] font-medium border-2 border-[#E04540] rounded-[12px] focus:outline-none">
                  No cumple
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {textHeadEdit3 && !textHeadEdit && !textHeadEdit2 && !textHeadEdit4 && (
        <>
          <HeadModal
            texto={textHeadEdit3}
            icon="/iconamoon_arrow-up-2-duotone.png"
            onClose={handleCloseEdit}
          />
          <br />
          <br />
          <div className="py-[12px] px-[24px] overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
            <div className="py-[20px] flex flex-col justify-between h-[89vh]">
              <div>
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-sm text-[#000]">
                    ¿Acepto todo lo que le pedimos?
                  </span>
                  <div className="flex items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checkboxState3}
                        onChange={toggleCheckbox3}
                      />
                      <span
                        className={`${
                          checkboxState3 ? "bg-black" : "bg-[#D6D9DD]"
                        } w-10 h-6 flex items-center rounded-full p-1`}
                      >
                        <span
                          className={`${
                            checkboxState3 ? "translate-x-4" : "translate-x-0"
                          } bg-white w-4 h-4 rounded-full transform transition-transform`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="relative mt-6">
                  <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                    Acuerdo
                  </label>
                  <textarea
                    value="Quedamos que le vamos a pagar ..."
                    className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent border border-[#EBECEF] rounded-md focus:outline-none"
                    rows="4"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <button className="text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
                  Listo
                </button>
                <button className="text-[#E04540] py-[12px] font-medium border-2 border-[#E04540] rounded-[12px] focus:outline-none">
                  No quiero continuar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {textHeadEdit4 && !textHeadEdit && !textHeadEdit2 && !textHeadEdit3 && (
        <>
          <HeadModal
            texto={textHeadEdit4}
            icon="/iconamoon_arrow-up-2-duotone.png"
            onClose={handleCloseEdit}
          />
          <br />
          <br />
          <div className="py-[12px] px-[24px] overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
            <div className="py-[20px] flex flex-col justify-between gap-6">
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
                <div>
                  <a href="#" className="text-black text-[14px] underline">
                    Subir fotos y videos
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <button className="text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
                  Listo
                </button>
                <button className="text-[#E04540] py-[12px] font-medium border-2 border-[#E04540] rounded-[12px] focus:outline-none">
                  No quiero continuar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
