"use client";
import { useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import HeadModal from "./HeaderModal";
import Cards from "./Cards";

export default function PerfilAddress({ closeModal, textHead, openModal }) {
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
        onClose={handleClose} // Pasamos handleClose como onClose
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
        <div className="bg-white w-[90%] m-auto px-[6px] pt-[24px] pb-[8px]  mb-5 rounded-[16px] relative">
          <div className="flex justify-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <img
                src="/emojione_flag-for-peru.png"
                alt="Bandera"
                className="w-16 h-16"
              />
            </div>
          </div>

          <button className="absolute top-2 right-2 bg-white p-2 rounded-lg border border-[#EBECEF]">
            <img
              src="/solar_pen-bold.png"
              alt="Edit Icon"
              className="w-4 h-4"
            />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Orb Point 101
            </h2>
            <p className="text-sm text-gray-500">
              Galería Comercial La Familia
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F9FAFB] rounded-lg p-4 text-center">
              <p className="text-lg font-medium text-gray-800">Perú</p>
              <p className="text-xs text-gray-500">País</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-4 text-center">
              <p className="text-lg font-medium text-gray-800">Áncash</p>
              <p className="text-xs text-gray-500">Departamento</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-4 text-center">
              <p className="text-lg font-medium text-gray-800">Santa</p>
              <p className="text-xs text-gray-500">Provincia</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-4 text-center">
              <p className="text-lg font-medium text-gray-800">
                Nuevo Chimbote
              </p>
              <p className="text-xs text-gray-500">Distrito</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFAE5] border border-[#FFB200] rounded-[12px] w-[90%] m-auto p-4 mb-5 flex items-center">
          <img
            src="/typcn_warning.png"
            alt="Advertencia"
            className="w-10 h-10 bg-yellow-500 rounded-full p-2 mr-3"
          />
          <p className="text-sm text-gray-900">
            Falta completar la métrica{" "}
            <span className="text-gray-900">“Cancelaciones diarias”</span>
          </p>
        </div>

        <Cards
          title="Personal"
          directores={gerentes}
          onVerTodoClick={openTodos}
        />
      </div>
      <br />
      <br />
      <BottomNavigation routes={routes} />
    </div>
  );
}
