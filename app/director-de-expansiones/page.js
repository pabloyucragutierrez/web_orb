"use client";
import { useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import HeadNavigation from "../components/HeaderNavigation";
import Notificaciones from "../components/Notificaciones";
import Cards from "../components/Cards";
import ExpansionesCards from "../components/ExpansionesCards";
import EditarContrato from "../components/EditarContrato";
import EstadoContratos from "../components/EstadoContratos";
import ExpansionTerminados from "../components/ExpansionTerminados";
import LocationExpasiones from "../components/LocationExpansiones";
import ExpansionesAgregar from "../components/ExpansionesAgregar";
import Perfil from "../components/Perfil";

export default function DirectorDeExpansiones() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [expansionesCardIShow, setExpansionesCardIShow] = useState(false);
  const [expansionesCardIShow2, setExpansionesCardIShow2] = useState(false);
  const [expansionesCardIShow3, setExpansionesCardIShow3] = useState(false);
  const [expansionesCardIShow4, setExpansionesCardIShow4] = useState(false);
  const [expansionesCardIShow5, setExpansionesCardIShow5] = useState(false);
  const [expansionesCardIShow6, setExpansionesCardIShow6] = useState(false);
  const [expansionesCardIShow7, setExpansionesCardIShow7] = useState(false);
  const [expansionesCardIShow8, setExpansionesCardIShow8] = useState(false);
  const [expansionesCardIShow9, setExpansionesCardIShow9] = useState(false);
  const [expansionesCardIShow10, setExpansionesCardIShow10] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isEditModalOpen3, setEditModalOpen3] = useState(false);
  const [isEditModalOpen4, setEditModalOpen4] = useState(false);
  const [isEditModalOpen5, setEditModalOpen5] = useState(false);
  const [isEditModalOpen6, setEditModalOpen6] = useState(false);
  const [isEditModalOpen7, setEditModalOpen7] = useState(false);
  const [isEditModalOpen8, setEditModalOpen8] = useState(false);
  const [isEditModalOpen9, setEditModalOpen9] = useState(false);
  const [pageLocation, setPageLocation] = useState(false);
  const [agregarLocation, setAgregarLocation] = useState(false);
  const [isPerfilOpen, setIsPerfilOpen] = useState(false);

  const openLocationPage = () => {
    setPageLocation(true);
    setIsPerfilOpen(false);

  };
  const closeLocationPage = () => {
    setPageLocation(false);
  };

  const openPerfil = () => {
    setIsPerfilOpen(true);
  };
  const closePerfil = () => {
    setIsPerfilOpen(false);
  };

  const onInicioWindow = () => {
    setPageLocation(false);
    setIsPerfilOpen(false);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };
  const openEditModal3 = () => {
    setEditModalOpen3(true);
  };
  const openEditModal4 = () => {
    setEditModalOpen4(true);
  };
  const openEditModal5 = () => {
    setEditModalOpen5(true);
  };
  const openEditModal6 = () => {
    setEditModalOpen6(true);
  };
  const openEditModal7 = () => {
    setEditModalOpen7(true);
  };
  const openEditModal8 = () => {
    setEditModalOpen8(true);
  };
  const openEditModal9 = () => {
    setEditModalOpen8(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const routes = [
    { path: "#", icon: "/material-symbols_window.png", label: "" },
    { path: "#", icon: "/fluent_location-16-filled.png", label: "" },
    { path: "#", icon: "/lets-icons_user-fill.png", label: "" },
  ];
  const notifications = [
    {
      icon: "/fluent_location-pink.png",
      title: "Completa “investigación del mercado”",
      description:
        "Se ha abierto un nuevo local, añade trabajadores para que comiencen a operar.",
      date: "28 nov.",
      bgColor: "bg-[#FFC3DC]",
    },
    {
      icon: "/majesticons_shield.png",
      title: "Se necesita vigilante",
      description:
        "El orb point 101 “Galería La Familia” necesita un vigilante",
      date: "28 nov.",
      bgColor: "bg-[#DFDFDF]",
    },
    {
      icon: "/arcticons_worldcoin_color.png",
      title: "Se necesita operador",
      description: "El orb point 101 “Galería La Familia” necesita un promotor",
      date: "28 nov.",
      bgColor: "bg-[#FFD8CA]",
    },
    {
      icon: "/arcticons_worldcoin_color2.png",
      title: "Se necesita promotor",
      description: "El orb point 101 “Galería La Familia” necesita un promotor",
      date: "28 nov.",
      bgColor: "bg-[#FFF6B5]",
    },
    {
      icon: "/mdi_person-tie_color.png",
      title: "Se necesita supervisor",
      description:
        "El orb point 101 “Galería La Familia” necesita un supervisor",
      date: "28 nov.",
      bgColor: "bg-[#FFCCCC]",
    },
    // Otros elementos...
  ];

  // cards
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

  const itemsExpansionesCards = [
    {
      horas: "Orb point 101",
      nombre: "Nuevo Chimbote",
      fecha: "18 dic. 2024",
    },
    {
      horas: "Orb point 102",
      nombre: "Chimbote",
      fecha: "20 dic. 2024",
    },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const openAgregarLocation = () => {
    setAgregarLocation(true);
  };
  const closeAgregarLocation = () => {
    setAgregarLocation(false);
  };
  const expansionesCard = () => {
    setExpansionesCardIShow(true);
  };
  const expansionesCard2 = () => {
    setExpansionesCardIShow2(true);
  };
  const expansionesCard3 = () => {
    setExpansionesCardIShow3(true);
  };
  const expansionesCard4 = () => {
    setExpansionesCardIShow4(true);
  };
  const expansionesCard5 = () => {
    setExpansionesCardIShow5(true);
  };
  const expansionesCard6 = () => {
    setExpansionesCardIShow6(true);
  };
  const expansionesCard7 = () => {
    setExpansionesCardIShow7(true);
  };
  const expansionesCard8 = () => {
    setExpansionesCardIShow8(true);
  };
  const expansionesCard9 = () => {
    setExpansionesCardIShow9(true);
  };
  const expansionesCard10 = () => {
    setExpansionesCardIShow10(true);
  };

  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf]">
      {!isModalOpen &&
        !expansionesCardIShow &&
        !expansionesCardIShow2 &&
        !isEditModalOpen &&
        !expansionesCardIShow3 &&
        !isEditModalOpen3 &&
        !expansionesCardIShow4 &&
        !pageLocation &&
        !expansionesCardIShow5 &&
        !expansionesCardIShow6 &&
        !expansionesCardIShow7 &&
        !expansionesCardIShow8 &&
        !expansionesCardIShow9 &&
        !expansionesCardIShow10 &&
        !isPerfilOpen && (
          <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen">
            <HeadNavigation
              texto="Tablero"
              icon="/mingcute_notification-line.png"
              mostrarModal={() => openModal(notifications)}
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
                  <span className="text-gray-900">
                    “Permiso de funcionamiento”
                  </span>
                </p>
              </div>
            </div>
            <Cards
              title="Contrato"
              directores={items1}
              onVerTodoClick={expansionesCard}
            />
            <Cards
              title="Estado contrato"
              directores={items2}
              onVerTodoClick={expansionesCard2}
            />
            <Cards
              title="Terminados"
              directores={items3}
              onVerTodoClick={expansionesCard3}
            />
            <Cards
              title="Rechazados"
              directores={items4}
              onVerTodoClick={expansionesCard4}
            />
            <br></br>
            <br></br>
            <br></br>
            <BottomNavigation
              routes={routes}
              onInicioClick={openLocationPage}
              onSupervisoresClick={openPerfil}
            />
          </div>
        )}
      {isModalOpen && (
        <Notificaciones
          closeModal={() => setModalOpen(false)}
          items={notifications}
        />
      )}
      {expansionesCardIShow && !isEditModalOpen && (
        <ExpansionesCards
          titleCard="Contratos"
          closeModal={() => setExpansionesCardIShow(false)}
          openCards={expansionesCard}
          itemsCard={itemsExpansionesCards}
          openEdit={openEditModal}
        />
      )}
      {isEditModalOpen && (
        <EditarContrato
          textHeadEdit="Orb point 101"
          titleInput="Sube el contrato"
          closeModalEdit={() => setEditModalOpen(false)}
        />
      )}
      {expansionesCardIShow2 && (
        <EstadoContratos
          titleCard="Estado contratos"
          titleBottom="Estado del contrato"
          closeModal={() => setExpansionesCardIShow2(false)}
          openCards={expansionesCard2}
          itemsCard={itemsExpansionesCards}
        />
      )}
      {expansionesCardIShow3 && !isEditModalOpen3 && (
        <ExpansionesCards
          titleCard="Terminados"
          closeModal={() => setExpansionesCardIShow3(false)}
          openCards={expansionesCard3}
          itemsCard={itemsExpansionesCards}
          openEdit={openEditModal3}
        />
      )}
      {isEditModalOpen3 && (
        <ExpansionTerminados
          textHeadEdit="Orb point 101"
          closeModalEdit={() => setEditModalOpen3(false)}
        />
      )}
      {expansionesCardIShow4 && (
        <ExpansionesCards
          titleCard="Rechazados"
          closeModal={() => setExpansionesCardIShow4(false)}
          openCards={expansionesCard4}
          itemsCard={itemsExpansionesCards}
        />
      )}
      {pageLocation &&
        !agregarLocation &&
        !expansionesCardIShow5 &&
        !expansionesCardIShow6 &&
        !expansionesCardIShow7 &&
        !expansionesCardIShow8 &&
        !expansionesCardIShow9 &&
        !expansionesCardIShow10 &&
        !isPerfilOpen && (
          <LocationExpasiones
            titleModal="Orb Points"
            iconMore="/typcn_plus.png"
            openAgregar={openAgregarLocation}
            onVerTodoClick={expansionesCard5}
            onVerTodoClick2={expansionesCard6}
            onVerTodoClick3={expansionesCard7}
            onVerTodoClick4={expansionesCard8}
            onVerTodoClick5={expansionesCard9}
            onVerTodoClick6={expansionesCard10}
            onInicioWindow={closeLocationPage}
            openPerfil={openPerfil}
          />
        )}
      {agregarLocation && (
        <ExpansionesAgregar
          textHeadEdit="Agregar orb point"
          closeModalEdit={closeAgregarLocation}
        />
      )}
      {expansionesCardIShow5 && !isEditModalOpen4 && (
        <ExpansionesCards
          titleCard="Investigación del mercados"
          closeModal={() => setExpansionesCardIShow5(false)}
          itemsCard={itemsExpansionesCards}
          openEdit={openEditModal4}
        />
      )}
      {isEditModalOpen4 && (
        <EditarContrato
          textHeadEdit2="Orb point 101"
          closeModalEdit={() => setEditModalOpen4(false)}
        />
      )}
      {expansionesCardIShow6 && !isEditModalOpen5 && (
        <EstadoContratos
          titleCard="Contactar con el arrendatario"
          titleBottom="Contactar"
          closeModal={() => setExpansionesCardIShow6(false)}
          openCards={expansionesCard6}
          itemsCard={itemsExpansionesCards}
        />
      )}
      {expansionesCardIShow7 && !isEditModalOpen6 && (
        <ExpansionesCards
          titleCard="Orb point 101"
          closeModal={() => setExpansionesCardIShow7(false)}
          openCards={expansionesCard7}
          itemsCard={itemsExpansionesCards}
          openEdit={openEditModal6}
        />
      )}
      {isEditModalOpen6 && (
        <EditarContrato
          textHeadEdit="Orb point 101"
          titleInput="Sube las fotos y videos"
          closeModalEdit={() => setEditModalOpen6(false)}
        />
      )}
      {expansionesCardIShow8 && !isEditModalOpen7 && (
        <ExpansionesCards
          titleCard="Negociación"
          closeModal={() => setExpansionesCardIShow8(false)}
          openCards={expansionesCard8}
          itemsCard={itemsExpansionesCards}
          openEdit={openEditModal7}
        />
      )}
      {isEditModalOpen7 && (
        <EditarContrato
          textHeadEdit3="Orb point 101"
          closeModalEdit={() => setEditModalOpen7(false)}
        />
      )}
      {expansionesCardIShow9 && !isEditModalOpen8 && (
        <ExpansionesCards
          titleCard="Subir formulario TFH"
          closeModal={() => setExpansionesCardIShow9(false)}
          openCards={expansionesCard9}
          itemsCard={itemsExpansionesCards}
          openEdit={openEditModal8}
        />
      )}
      {isEditModalOpen8 && (
        <EditarContrato
          textHeadEdit4="Orb point 101"
          closeModalEdit={() => setEditModalOpen8(false)}
        />
      )}
      {expansionesCardIShow10 && !isEditModalOpen9 && (
        <EstadoContratos
          titleCard="Estado formulario"
          titleBottom="Respuesta de TFH"
          closeModal={() => setExpansionesCardIShow10(false)}
          openCards={expansionesCard10}
          itemsCard={itemsExpansionesCards}
        />
      )}
      {isPerfilOpen && (
        <Perfil
          onInicioClick={openLocationPage}
          bottonIcons={routes}
          onInicioWindow={onInicioWindow}
          onSupervisoresClick={openLocationPage}
        />
      )}
    </div>
  );
}
