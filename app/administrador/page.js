// Administrador.js
"use client";
import { useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import HeadNavigation from "../components/HeaderNavigation";
import Todos from "../components/modals/Todos";
import Cards from "../components/Cards";
import Editar from "../components/modals/Editar";
import Perfil from "../components/Perfil";

export default function Administrador() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isPerfilOpen, setPerfilOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ items: [], textHead: "" });
  const [selectedItem, setSelectedItem] = useState(null);
  const [activePage, setActivePage] = useState("Administrador"); // Estado para la página activa

  const routes = [
    { path: "#", icon: "/icon_sidebar.png", label: "Roles" },
    { path: "#", icon: "/lets-icons_user-fill.png", label: "Supervisores" },
  ];
    
  const gerentes = [
    { icon: "/mdi_person-tie.png", cargo: "Gerente de Recursos Humanos", nombre: "Daniel Roldán" },
    { icon: "/arcticons_worldcoin.png", cargo: "Director Financiero (CFO)", nombre: "José Eduardo De La Guardia" },
    { icon: "/majesticons_shield.png", cargo: "Director de Expansiones", nombre: "Giuseppe Capurro" },
  ];

  const supervisores = [
    { icon: "/mdi_person-tie.png", cargo: "Orb Point 101", nombre: "Anthony Williams Guanilo Castro" },
    { icon: "/mdi_person-tie.png", cargo: "Orb Point 201", nombre: "Javier Alejandro Téllez Gómez" },
  ];

  const itemsGerentes = [
    { name: "Daniel Roldán", title: "Gerente de Recursos Humanos", code: "PASFCVXDS" },
    { name: "José Eduardo De La Guardia", title: "Director Financiero (CFO)", code: "AZ8U9H5U" },
    { name: "Giuseppe Capurro", title: "Director de Expansiones", code: "AZ8U9H5U" },
  ];

  const itemsSupervisores = [
    { name: "Anthony Williams Guanilo Castro", title: "Orb Point 101", code: "AZ8U9H5U" },
    { name: "Javier Alejandro Téllez Gómez", title: "Orb Point 201", code: "AZ8U9H5U" },
  ];

  const openModal = (items, textHead) => {
    setModalContent({ items, textHead });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setModalOpen(false);
    setEditModalOpen(true);
  };

  const openPerfil = () => {
    setPerfilOpen(true);
    setModalOpen(false);
    setEditModalOpen(false);
    setActivePage("Perfil"); 
  };

  const closePerfil = () => {
    setPerfilOpen(false);
    setModalOpen(false);
    setEditModalOpen(false);
    setActivePage("Administrador");
  };

  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf]">
      {!isModalOpen && !isEditModalOpen && !isPerfilOpen && (
        <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen">
          <HeadNavigation texto="Roles" />
          <br />
          <br />
          <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
            <Cards
              title="Gerentes/directores"
              onVerTodoClick={() => openModal(itemsGerentes, "Gerentes/directoresass")}
              directores={gerentes}
            />
            <Cards
              title="Supervisores"
              onVerTodoClick={() => openModal(itemsSupervisores, "Supervisores")}
              directores={supervisores}
            />
          </div>
          <br />
          <br />
          <BottomNavigation
            routes={routes}
            activePage={activePage} 
            onSupervisoresClick={openPerfil}
            onInicioClick={closePerfil}  
          />
        </div>
      )}

      {isModalOpen && (
        <Todos
          closeModal={() => setModalOpen(false)}
          items={modalContent.items}
          textHead={modalContent.textHead}
          onItemClick={openEditModal}
        />
      )}

      {isEditModalOpen && selectedItem && (
        <Editar
          closeModalEdit={() => setEditModalOpen(false)}
          textHeadEdit={selectedItem.title.includes("Gerente") ? "Editar Gerente" : "Editar Supervisor"}
          selectedItem={selectedItem}
        />
      )}

      {isPerfilOpen && (
        <Perfil activePage={activePage} onInicioClick={closePerfil} bottonIcons={routes}/>  
      )}
    </div>
  );
}
