import Image from "next/image";
import HeadModal from "./HeaderModal";
import { useEffect, useState } from "react";

export default function PersonalTodos({ closeModal, openAgregar, openEp }) {
  const [isExiting, setIsExiting] = useState(false);

  const roles = [
    { name: "Elena Sofía Marquardt Pérez", role: "Supervisor" },
    { name: "Elena Sofía Marquardt Pérez", role: "Operador" },
    { name: "Elena Sofía Marquardt Pérez", role: "Operador" },
    { name: "Elena Sofía Marquardt Pérez", role: "Promotor" },
    { name: "Elena Sofía Marquardt Pérez", role: "Seguridad" },
  ];
  const openEditarPersonal = () => {
    openEp(true);
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
        texto="Personal"
        icon="/iconamoon_arrow-up-2-duotone.png"
        iconMore="/typcn_plus.png"
        onClose={handleClose}
        openModal={openAgregar}
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-0 w-full md:w-[25rem]">
        <div className="w-full py-[8px] px-[24px]">
          {roles.map((item, index) => (
            <div
              key={index}
              onClick={openEditarPersonal}
              className="flex items-center justify-between border-b border-[#E9EDF0] py-[20px]"
            >
              <div>
                <p className="text-[#000] font-[400] text-[16px]">
                  {item.name}
                </p>
                <p className="text-[#657080] text-sm">{item.role}</p>
              </div>
              <Image
                src="/iconamoon_arrow_right.png"
                alt="Arrow icon"
                width={20}
                height={20}
                className="text-gray-400"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
