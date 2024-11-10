import { useEffect, useState } from "react";
import HeadModal from "../HeaderModal";

export default function Editar({ closeModalEdit, textHeadEdit, selectedItem }) {
  const [isExiting, setIsExiting] = useState(false);

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
    <div className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${isExiting ? "animate-slide-out-right" : "animate-slide-in-right"}`}>
      <HeadModal texto={textHeadEdit} icon="/iconamoon_arrow-up-2-duotone.png" onClose={handleCloseEdit} />
      <br />
      <br />
      <div className="py-[12px] px-[24px] overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
        <div className="py-[20px] flex flex-col justify-between h-[89vh]">
          <div className="flex items-center gap-[4px]">
            <div className="relative w-[75%]">
              <label className="absolute -top-2 left-3 bg-white rounded-[4px] px-1 text-[#657080] text-sm">
                Código de acceso
              </label>
              <input
                type="text"
                value={selectedItem.code}
                className="w-full py-[12px] px-[20px] text-gray-800 bg-[#F9FAFB] border border-[#EBECEF] rounded-md focus:outline-none"
              />
            </div>
            <button className="py-[12px] px-[20px] text-white font-medium rounded-[8px] bg-black focus:outline-none">Generar</button>
          </div>
          <button className="text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">Guardar</button>
        </div>
      </div>
    </div>
  );
}
