import { useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import HeadModal from "./HeaderModal";
import Cards from "./Cards";

export default function LocationExpasiones({
  openAgregar,
  titleModal,
  onVerTodoClick,
  onVerTodoClick2,
  onVerTodoClick3,
  onVerTodoClick4,
  onVerTodoClick5,
  onVerTodoClick6,
  onInicioWindow,
  iconMore,
  openPerfil,
}) {
  const items1 = [
    {
      icon: "/ph_house-fill.png",
      cargo: "Nuevo Chimbote",
      titleBlack: "Orb point 101",
    },
    {
      icon: "/ph_house-fill.png",
      cargo: "Chimbote",
      titleBlack: "Orb point 102",
    },
  ];
  const items2 = [
    {
      icon: "/ph_house-fill.png",
      cargo: "Nuevo Chimbote",
      titleBlack: "Orb point 101",
    },
    {
      icon: "/ph_house-fill.png",
      cargo: "Chimbote",
      titleBlack: "Orb point 102",
    },
  ];
  const items3 = [
    {
      icon: "/ph_house-fill.png",
      cargo: "Nuevo Chimbote",
      titleBlack: "Orb point 101",
    },
    {
      icon: "/ph_house-fill.png",
      cargo: "Chimbote",
      titleBlack: "Orb point 102",
    },
  ];
  const items4 = [
    {
      icon: "/ph_house-fill.png",
      cargo: "Nuevo Chimbote",
      titleBlack: "Orb point 101",
    },
    {
      icon: "/ph_house-fill.png",
      cargo: "Chimbote",
      titleBlack: "Orb point 102",
    },
  ];
  const items5 = [
    {
      icon: "/ph_house-fill.png",
      cargo: "Nuevo Chimbote",
      titleBlack: "Orb point 101",
    },
    {
      icon: "/ph_house-fill.png",
      cargo: "Chimbote",
      titleBlack: "Orb point 102",
    },
  ];
  const items6 = [
    {
      icon: "/ph_house-fill.png",
      cargo: "Nuevo Chimbote",
      titleBlack: "Orb point 101",
    },
    {
      icon: "/ph_house-fill.png",
      cargo: "Chimbote",
      titleBlack: "Orb point 102",
    },
  ];

  const routes = [
    { path: "#", icon: "/material-symbols_window.png", label: "" },
    { path: "#", icon: "/fluent_location-16-filled.png", label: "" },
    { path: "#", icon: "/lets-icons_user-fill.png", label: "" },
  ];

  return (
    <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen">
      <HeadModal
        iconText={titleModal}
        iconMore={iconMore}
        openModal={openAgregar}
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
        <div className="bg-[#FFFAE5] border border-[#FFB200] rounded-[12px] w-[90%] m-auto p-4 mb-5 flex items-center">
          <img
            src="/typcn_warning.png"
            alt="Advertencia"
            className="w-10 h-10 bg-yellow-500 rounded-full p-2 mr-3"
          />
          <p className="text-sm text-gray-900">
            Consigue el permiso municipal
            <span className="text-gray-900">“Permiso de funcionamiento”</span>
          </p>
        </div>
      </div>
      <Cards
        title="Investigación del mercado"
        directores={items1}
        onVerTodoClick={onVerTodoClick}
      />
      <Cards
        title="Contactar con el arrendatario"
        directores={items2}
        onVerTodoClick={onVerTodoClick2}
      />
      <Cards
        title="Contenido multimedia"
        directores={items3}
        onVerTodoClick={onVerTodoClick3}
      />
      <Cards
        title="Negociación"
        directores={items4}
        onVerTodoClick={onVerTodoClick4}
      />
      <Cards
        title="Subir formulario TFH"
        directores={items5}
        onVerTodoClick={onVerTodoClick5}
      />
      <Cards
        title="Estado formulario"
        directores={items6}
        onVerTodoClick={onVerTodoClick6}
      />
      <br />
      <br />
      <br />
      <BottomNavigation
        routes={routes}
        onInicioWindow={onInicioWindow}
        onSupervisoresClick={openPerfil}
      />
    </div>
  );
}
