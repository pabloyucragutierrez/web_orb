import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";

export default function ExpansionesCards({
  closeModal,
  titleCard,
  itemsCard,
  openCards,
  openEdit,
}) {
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
        texto={titleCard}
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
        openModal={openCards}
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-0 w-full md:w-[25rem]">
        <div className="w-full py-[8px] px-[24px]">
          {itemsCard.map((item, index) => (
            <div
              key={index}
              onClick={openEdit}
              className="flex items-center justify-between py-[5px]"
            >
              <div>
                <p className="text-[#000] font-[400] text-[16px]">
                  {item.horas}
                </p>
                <p className="text-[#657080] text-sm">{item.nombre}</p>
              </div>
              <div className="text-[#000] font-[500] text-[16px] py-[20px]">
                <p>{item.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
