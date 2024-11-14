"use client";
import Image from "next/image";
import BottomNavigation from "../components/BottomNavigation";
import HeadNavigation from "../components/HeaderNavigation";
import Notificaciones from "../components/Notificaciones";
import PerfilAddress from "../components/PerfilAddress"; // Importa PerfilAddress
import { useState } from "react";
import PersonalTodos from "../components/PersonalTodos";
import AgregarPersonal from "../components/AgregarPersonal";
import EditarPersonal from "../components/EditarPersonal";
import Perfil from "../components/Perfil";
export default function GerenteDeRrhh() {
  const [modalContent, setModalContent] = useState({ textHead: "" });
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPerfilOpen, setPerfilOpen] = useState(false);
  const [isPerfilOpen2, setPerfilOpen2] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [todosModal, setTodosModal] = useState(false);
  const [agregarPersonal, setAgregarPerfil] = useState(false);
  const [editarPersonal, setEditarPersonal] = useState(false);
  const [activePage, setActivePage] = useState("gerentederrhh");

  const routes = [
    { path: "#", icon: "/fluent_location-16-filled.png", label: "" },
    { path: "#", icon: "/lets-icons_user-fill.png", label: "" },
  ];

  const locations = [
    {
      name: "Galería Comercial La Familia",
      location: "Nuevo Chimbote",
      countryFlag: "/emojione_flag-for-peru.png",
      alertIcon: "/typcn_warning.png",
      showAlert: true,
    },
    {
      name: "Centro Comercial Santa Fe",
      location: "Cuajimalpa de Morelos",
      countryFlag: "/emojione_flag-for-mexico.png",
      showAlert: false,
    },
    {
      name: "Óvalo Papal",
      location: "Trujillo",
      countryFlag: "/emojione_flag-for-peru.png",
      showAlert: false,
    },
  ];

  const notifications = [
    {
      icon: "/fluent_location-pink.png",
      title: "Se ha habilitado un nuevo Orb Point",
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
    // Otros elementos...
  ];

  // Función para abrir las notificaciones
  const openModal = (items) => {
    setModalContent({ items });
    setModalOpen(true);
  };

  // Función para abrir PerfilAddress con una ubicación
  const openPerfilAddress = (location) => {
    setSelectedLocation(location);
    setPerfilOpen(true);
  };

  const openPerfil = () => {
    setPerfilOpen2(true);
    setModalOpen(false);
    setEditModalOpen(false);
  };

  const closePerfil = () => {
    setPerfilOpen2(false);
    setModalOpen(false);
    setEditModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf]">
      {!isModalOpen && !isPerfilOpen && !isPerfilOpen2 && (
        <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen">
          <HeadNavigation
            texto="Orb Points"
            icon="/mingcute_notification-line.png"
            mostrarModal={() => openModal(notifications)}
          />

          <br />
          <br />

          <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
            <div className="w-[90%] m-auto rounded-lg mb-5">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Busca por nombre, distrito o país"
                  className="w-full px-12 py-[12px] bg-transparent border border-[#EBECEF] rounded-[12px] text-[#657080] focus:outline-none"
                />
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <Image
                    src="/uil_search.png"
                    alt="Buscar"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => openPerfilAddress(location)} // Añade evento para abrir PerfilAddress
                  className="flex items-center p-[16px] mb-[16px] rounded-[16px] bg-[#F9FAFB] cursor-pointer"
                >
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      src={location.countryFlag}
                      alt="Flag"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="flex-grow">
                    <p className="text-black text-[18px] font-[400]">
                      {location.name}
                    </p>
                    <p className="text-[#657080] text-[16px]">
                      {location.location}
                    </p>
                  </div>
                  {location.showAlert && (
                    <div className="ml-auto bg-[#FFB200] p-[8px] rounded-full">
                      <Image
                        src={location.alertIcon}
                        alt="Alert"
                        width={20}
                        height={20}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <br />
          <br />

          <BottomNavigation
            routes={routes}
            onSupervisoresClick={openPerfil}
            onInicioClick={closePerfil}
          />
        </div>
      )}
      {isModalOpen && (
        <Notificaciones
          closeModal={() => setModalOpen(false)}
          items={notifications}
        />
      )}
      {isPerfilOpen && !todosModal && (
        <PerfilAddress
          closeModal={() => setPerfilOpen(false)}
          location={selectedLocation}
          textHead="Galería Comercial La Familia"
          openModal={setTodosModal}
        />
      )}

      {todosModal && !agregarPersonal && !editarPersonal && (
        <PersonalTodos
          openAgregar={setAgregarPerfil}
          closeModal={() => setTodosModal(false)}
          openEp={setEditarPersonal}
        />
      )}
      {agregarPersonal && (
        <AgregarPersonal closeModal={() => setAgregarPerfil(false)} />
      )}
      {editarPersonal && (
        <EditarPersonal closeModal={() => setEditarPersonal(false)} />
      )}
      {isPerfilOpen2 && (
        <Perfil activePage={activePage} onInicioClick={closePerfil} bottonIcons={routes}/>
      )}
    </div>
  );
}
