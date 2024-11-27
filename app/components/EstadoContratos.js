import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";

export default function EstadoContratos({
  closeModal,
  titleCard,
  itemsCard,
  openCards,
  titleBottom
}) {
  const [isExiting, setIsExiting] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el ítem seleccionado
  const [isAnimatingCard, setIsAnimatingCard] = useState(false); // Controlar animación del card

  const handleClose = () => {
    setIsExiting(true);
  };

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => closeModal(), 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, closeModal]);

  const openCard = (item) => {
    setSelectedItem(item); // Guardar el ítem seleccionado
    setTimeout(() => setIsAnimatingCard(true), 10); // Activar animación después de renderizar
  };

  const closeCard = () => {
    setIsAnimatingCard(false); // Desactivar animación
    setTimeout(() => {
      setSelectedItem(null); // Limpiar el ítem seleccionado
    }, 300); // Esperar que termine la animación
  };

  return (
    <div
      className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${
        isExiting ? "animate-slide-out-right" : "animate-slide-in-right"
      }`}
    >
      <HeadModal
        texto={titleCard}
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
        openModal={openCards}
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-0 w-full md:w-[25rem]">
        <div className="w-full py-[8px] px-[24px]">
          {itemsCard.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-[10px] cursor-pointer"
              onClick={() => openCard(item)} // Abrir el card al hacer clic
            >
              <div>
                <p className="text-[#000] font-[400] text-[16px]">{item.horas}</p>
                <p className="text-[#657080] text-sm">{item.nombre}</p>
              </div>
              <div className="text-[#000] font-[500] text-[16px] py-[20px]">
                <p>{item.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fondo oscuro */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeCard}
        ></div>
      )}

      {/* Card dinámico */}
      {selectedItem && (
        <div
          className={`fixed bottom-0 left-0 w-full md:w-[25rem] bg-white rounded-t-lg p-6 shadow-lg z-50 transition-transform duration-300 transform ${
            isAnimatingCard ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-[600] text-[#000] text-[18px]">
              {titleBottom}
            </h3>
            <img
              src="/icon_close.png"
              alt="Cerrar"
              className="w-5 h-5 cursor-pointer"
              onClick={closeCard}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={closeCard}
              className="mt-6 w-full bg-black text-white px-2 py-[14px] rounded-[12px]"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
