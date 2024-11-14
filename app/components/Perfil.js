// Perfil.js
import { useState } from "react";
import HeadNavigation from "./HeaderNavigation";
import BottomNavigation from "./BottomNavigation";
import EditarPerfil from "./EditarPerfil";



export default function Perfil({ activePage, onInicioClick, bottonIcons }) { // Recibimos activePage como prop
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf]">
      {isEditing ? (
        <EditarPerfil closePerfil={handleCloseEdit} />
      ) : (
        <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen">
          <HeadNavigation texto="Perfil" />
          <br />
          <br />
          <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
            <div className="bg-white w-[90%] mb-5 m-auto pt-[24px] rounded-[16px] px-[6px] pb-[8px] relative">
              <button
                onClick={handleEditClick}
                className="absolute top-2 right-2 bg-white p-2 rounded-lg border border-[#EBECEF]"
              >
                <img
                  src="/solar_pen-bold.png"
                  alt="Edit Icon"
                  className="w-4 h-4"
                />
              </button>
              <div className="flex items-center justify-center mb-[5px]">
                <h2 className="text-xl font-semibold text-black text-center">
                  Mauricio Soto Bueño
                </h2>
              </div>
              <p className="text-sm text-[#657080] text-center mb-[5px]">
                Administrador
              </p>
              <div className="bg-[#F9FAFB] rounded-[16px] p-[16px] mb-[8px] text-center">
                <p className="text-black">+5193546593</p>
                <p className="text-sm text-[#657080]">Teléfono</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-[16px] p-[16px] text-center">
                <p className="text-black">mauriciosoto2508@gmail.com</p>
                <p className="text-sm text-[#657080]">Correo electrónico</p>
              </div>
            </div>
            <button
              onClick={onInicioClick}
              className="m-auto block text-[#657080] w-[90%] border-2 border-[#000000] rounded-[12px] py-[14px]"
            >
              Salir
            </button>
          </div>
          <br />
          <br />
          <BottomNavigation routes={bottonIcons} activePage={activePage} onInicioClick={onInicioClick} />
        </div>
      )}
    </div>
  );
}
