import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";

export default function SupervisoresCards({ closeModal, openModal }) {
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
        texto="Elena Sofía Marquardt Pérez"
        icon="/iconamoon_arrow-up-2-duotone.png"
        iconMore="/typcn_plus.png"
        onClose={handleClose}
        openModal={openModal}
      />

      <br />
      <br />
      <div class="mt-3 overflow-auto bg-[#F5F5F7] pt-0 w-full md:w-[25rem]">
        <div class="w-full py-[8px] px-[24px]">
          <div class="flex items-center justify-between border-b border-[#E9EDF0] py-[20px]">
            <div>
              <p class="text-[#000] font-[400] text-[16px]">
                Metió su código de referido a usuarios
              </p>
              <p class="text-[#657080] text-sm">30 oct. 2024</p>
            </div>
          </div>
          <div class="flex items-center justify-between border-b border-[#E9EDF0] py-[20px]">
            <div>
              <p class="text-[#000] font-[400] text-[16px]">
                Recomendó exchange
              </p>
              <p class="text-[#657080] text-sm">30 oct. 2024</p>
            </div>
          </div>
          <div class="flex items-center justify-between border-b border-[#E9EDF0] py-[20px]">
            <div>
              <p class="text-[#000] font-[400] text-[16px]">
                Pidió un dato personal
              </p>
              <p class="text-[#657080] text-sm">30 oct. 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
