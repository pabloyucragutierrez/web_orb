"use client";
import { useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import HeadModal from "./HeaderModal";
import PerfilAddressCard from "./PerfilAddressCards";

export default function PerfilAddress({ closeModal, textHead, openModal, title }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
  };

  const openTodos = () => {
    openModal(true);
  };

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => closeModal(), 300); // 300ms se ajusta al tiempo de animación en CSS
      return () => clearTimeout(timer);
    }
  }, [isExiting, closeModal]);

  const routes = [
    { path: "#", icon: "/fluent_location-16-filled.png", label: "" },
    { path: "#", icon: "/lets-icons_user-fill.png", label: "" },
  ];

  const gerentes = [
    {
      icon: "/mdi_person-tie.png",
      cargo: "Supervisor",
      nombre: "Elena Sofía Marquardt Pérez",
    },
    {
      icon: "/arcticons_worldcoin.png",
      cargo: "Operador",
      nombre: "Leónidas Yauri Yuri Villanueva",
    },
    {
      icon: "/majesticons_shield.png",
      cargo: "Vigilante",
      nombre: "Miguel Torres Escalante",
    },
  ];

  return (
    <div
      className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${
        isExiting ? "animate-slide-out-right" : "animate-slide-in-right"
      }`}
    >
      <HeadModal
        texto={textHead}
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
      />
      <br></br>
      <br></br>
      <PerfilAddressCard openTodos={openTodos} gerentes={gerentes} textHead={title} />
      <br></br>
      <br></br>
      <br></br>

      <BottomNavigation routes={routes} />
    </div>
  );
}
