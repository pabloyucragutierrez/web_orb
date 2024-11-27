"use client";
import { useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import HeadNavigation from "../components/HeaderNavigation";
import PerfilAddressCard from "../components/PerfilAddressCards";
import Notificaciones from "../components/Notificaciones";
import SupervisorTodos from "../components/SupervisorTodos";
import SupervisorAdd from "../components/SupervisorAdd";
import PersonalCards from "../components/PersonalCards";
import PersonalTodos from "../components/PersonalTodos";
import SupervisoresCards from "../components/SupervisoresCards";
import Historial from "../components/Historial";
import Perfil from "../components/Perfil";

export default function Supervisores() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTodosMetricas, setIsTodosMetricas] = useState(false);
  const [personalCards, setPersonalCards] = useState(false);
  const [cardsAdd, setCardsAdd] = useState(false);
  const [horasDescontadas, setHorasDescontadas] = useState(false);
  const [horasDescontadasAdd, setHorasDescontadasAdd] = useState(false);
  const [articulosPerdidos, setArticulosPerdidos] = useState(false);
  const [articulosPerdidosAdd, setArticulosPerdidosAdd] = useState(false);
  const [incumplimientos, setIncumplimientos] = useState(false);
  const [selectArt, setSelectArt] = useState(false);
  const [selectFalta, setSelectFalta] = useState(false);
  const [incumplimientosAdd, setIncumplimientosAdd] = useState(false);
  const [incumplimientosAddCard, setIncumplimientosAddCard] = useState(false);
  const [historial, setHistorial] = useState(false);
  const [isPerfilOpen, setIsPerfilOpen] = useState(false);

  const routes = [
    { path: "#", icon: "/fluent_location-16-filled.png", label: "" },
    { path: "#", icon: "/lets-icons_user-fill.png", label: "" },
  ];

  
  const items1 = [
    {
      icon: "/tdesign_money.png",
      cargo: "Diario",
      titleBlack: "Cancelaciones diarias",
      exit: "Completado",
    },
    {
      icon: "/tdesign_money.png",
      cargo: "Diario",
      titleBlack: "Orb usados",
      error: "No completado",
    },
    {
      icon: "/solar_money-bag-bold.png",
      cargo: "Diario",
      titleBlack: "Verificaciones de Tre",
      exit: "completado",
    },
  ];

  const items2 = [
    {
      icon: "/tdesign_money.png",
      cargo: "Elena Sofía Marquardt Pérez",
      titleBlack: "1 hora",
      date: "20 dic. 2024",
    },
    {
      icon: "/tdesign_money.png",
      cargo: "Leónidas Yauri Yuri Villanueva",
      titleBlack: "2 horas",
      date: "20 dic. 2024",
    },
    {
      icon: "/tdesign_money.png",
      cargo: "Elena Sofía Marquardt Pérez",
      titleBlack: "2 horas",
      date: "20 dic. 2024",
    },
  ];

  const items3 = [
    {
      icon: "/tdesign_money.png",
      cargo: "Elena Sofía Marquardt Pérez",
      titleBlack: "1 hora",
      date: "20 dic. 2024",
    },
    {
      icon: "/tdesign_money.png",
      cargo: "Leónidas Yauri Yuri Villanueva",
      titleBlack: "2 horas",
      date: "20 dic. 2024",
    },
    {
      icon: "/tdesign_money.png",
      cargo: "Elena Sofía Marquardt Pérez",
      titleBlack: "2 horas",
      date: "20 dic. 2024",
    },
  ];

  const items4 = [
    {
      icon: "/hugeicons_anonymous.png",
      cargo: "Educativo",
      titleBlack: "Banner informativo",
      date: "18 dic. 2024",
    },
    {
      icon: "/hugeicons_anonymous.png",
      cargo: "Higiene",
      titleBlack: "Papelera",
      date: "20 dic. 2024",
    },
    {
      icon: "/hugeicons_anonymous.png",
      cargo: "Higiene",
      titleBlack: "Papelera",
      date: "18 dic. 2024",
    },
  ];

  const items5 = [
    {
      icon: "/hugeicons_anonymous.png",
      cargo: "Supervisor",
      titleBlack: "Elena Sofía Marquardt Pérez",
      date: "1 strike",
    },
    {
      icon: "/hugeicons_anonymous.png",
      cargo: "Operador",
      titleBlack: "Leónidas Yauri Yuri Villanueva",
      date: "0 strike",
    },
    {
      icon: "/hugeicons_anonymous.png",
      cargo: "Vigilante",
      titleBlack: "Miguel Torres Escalante",
      date: "2 strikes",
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

  const itemsCards = [
    {
      horas: "1 hora",
      nombre: "Elena Sofía Marquardt Pérez",
      fecha: "18 dic. 2024",
    },
    {
      horas: "2 horas",
      nombre: "Leónidas Yauri Yuri Villanueva",
      fecha: "20 dic. 2024",
    },
    {
      horas: "3 horas",
      nombre: "Elena Sofía Marquardt Pérez",
      fecha: "22 dic. 2024",
    },
  ];
  const itemsHorasDescontadas = [
    {
      horas: "1 hora 30 minutos",
      nombre: "Elena Sofía Marquardt Pérez",
      fecha: "18 dic. 2024",
    },
    {
      horas: "15 minutos",
      nombre: "Leónidas Yauri Yuri Villanueva",
      fecha: "20 dic. 2024",
    },
    {
      horas: "3 horas",
      nombre: "Elena Sofía Marquardt Pérez",
      fecha: "22 dic. 2024",
    },
  ];
  const itemsArticulosPerdidos = [
    {
      horas: "Banner informativo",
      nombre: "Educativo",
      fecha: "18 dic. 2024",
    },
    {
      horas: "Banner informativo",
      nombre: "Educativo",
      fecha: "18 dic. 2024",
    },
    {
      horas: "Banner informativo",
      nombre: "Educativo",
      fecha: "18 dic. 2024",
    },
  ];
  const itemsIncumpilientos = [
    {
      horas: "Banner informativo",
      nombre: "Educativo",
    },
    {
      horas: "Banner informativo",
      nombre: "Educativo",
    },
    {
      horas: "Banner informativo",
      nombre: "Educativo",
    },
  ];

  const openModal = () => {
    setModalOpen(true);
  };

  const roles = [
    { name: "Elena Sofía Marquardt Pérez", role: "Supervisor" },
    { name: "Elena Sofía Marquardt Pérez", role: "Operador" },
    { name: "Elena Sofía Marquardt Pérez", role: "Operador" },
    { name: "Elena Sofía Marquardt Pérez", role: "Promotor" },
    { name: "Elena Sofía Marquardt Pérez", role: "Seguridad" },
  ];

  const openSupervisor = () => {
    setIsTodosMetricas(true);
  };
  const openSupervisorCards = () => {
    setPersonalCards(true);
  };
  const openHorasDescontadas = () => {
    setHorasDescontadas(true);
  };
  const openArticulosPerdidos = () => {
    setArticulosPerdidos(true);
  };
  const openIncumplimientos = () => {
    setIncumplimientos(true);
  };

  const openPerfil = () => {
    setIsPerfilOpen(true);
  };
  const closePerfil = () => {
    setIsPerfilOpen(false);
  };
  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf]">
      {!isModalOpen &&
        !isTodosMetricas &&
        !personalCards &&
        !cardsAdd &&
        !horasDescontadas &&
        !articulosPerdidos &&
        !incumplimientos &&
        !historial &&
        !isPerfilOpen && (
          <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen">
            <HeadNavigation
              texto="Galería Comercial La Familia"
              icon="/mingcute_notification-line.png"
              mostrarModal={() => openModal(notifications)}
            />

            <br />
            <br />
            <PerfilAddressCard
              items1={items1}
              items2={items2}
              items3={items3}
              items4={items4}
              items5={items5}
              textHead="Métricas"
              textHead2="Horas extras"
              textHead3="Horas descontadas"
              textHead4="Artículos perdidos"
              textHead5="Incumplimientos"
              openSupervisor={openSupervisor}
              openSupervisorCards={openSupervisorCards}
              openHorasDescontadas={openHorasDescontadas}
              openArticulosPerdidos={openArticulosPerdidos}
              openIncumplimientos={openIncumplimientos}
            />
            <br></br>
            <br></br>
            <br></br>
            <BottomNavigation
              routes={routes}
              onSupervisoresClick={openPerfil}
            />
          </div>
        )}
      {isModalOpen && !isTodosMetricas && (
        <Notificaciones
          closeModal={() => setModalOpen(false)}
          items={notifications}
        />
      )}
      {isTodosMetricas && !historial && (
        <SupervisorTodos
          closeModal={() => setIsTodosMetricas(false)}
          openHistorial={setHistorial}
        />
      )}
      {personalCards && !cardsAdd && (
        <PersonalCards
          titleCard="Horas extras"
          closeModal={() => setPersonalCards(false)}
          openCards={setCardsAdd}
          itemsCard={itemsCards}
        />
      )}
      {cardsAdd && (
        <SupervisorAdd
          titleCardAdd="Agregar horas extras"
          closeModal={() => setCardsAdd(false)}
        />
      )}
      {horasDescontadas && !horasDescontadasAdd && (
        <PersonalCards
          titleCard="Horas descontadas"
          closeModal={() => setHorasDescontadas(false)}
          openCards={setHorasDescontadasAdd}
          itemsCard={itemsHorasDescontadas}
        />
      )}
      {horasDescontadasAdd && (
        <SupervisorAdd
          titleCardAdd="Agregar horas descontadas"
          closeModal={() => setHorasDescontadasAdd(false)}
        />
      )}
      {articulosPerdidos && !articulosPerdidosAdd && (
        <PersonalCards
          titleCard="Artículos perdidos"
          closeModal={() => setArticulosPerdidos(false)}
          openCards={setArticulosPerdidosAdd}
          itemsCard={itemsArticulosPerdidos}
        />
      )}
      {articulosPerdidosAdd && (
        <SupervisorAdd
          titleCardAdd="Agregar artículos perdidos"
          closeModal={() => setArticulosPerdidosAdd(false)}
          selectArt={() => setSelectArt(true)}
        />
      )}
      {incumplimientos && !incumplimientosAdd && (
        <PersonalTodos
          itemsRoles={roles}
          closeModal={() => setIncumplimientos(false)}
          openEp={setIncumplimientosAdd}
          titleModal="Incumplimientos"
        />
      )}
      {incumplimientosAdd && !incumplimientosAddCard && (
        <SupervisoresCards
          closeModal={() => setIncumplimientosAdd(false)}
          openModal={setIncumplimientosAddCard}
        />
      )}
      {incumplimientosAddCard && (
        <SupervisorAdd
          titleCardAdd="Agregar strike"
          closeModal={() => setIncumplimientosAddCard(false)}
          selectFalta={() => setSelectFalta(true)}
        />
      )}

      {historial && <Historial closeModal={() => setHistorial(false)} />}

      {isPerfilOpen && (
        <Perfil onInicioClick={closePerfil} bottonIcons={routes} />
      )}
    </div>
  );
}
