import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";
import Image from "next/image";

export default function SupervisorAdd({
  closeModal,
  titleCardAdd,
  selectArt,
  selectFalta,
}) {
  const [isExiting, setIsExiting] = useState(false);
  const [tiempo, setTiempo] = useState(0); // Tiempo en minutos
  const [selectedOptionTrabajador, setSelectedOptionTrabajador] = useState(""); // Opción seleccionada para el trabajador
  const [selectedOptionArticulo, setSelectedOptionArticulo] = useState(""); // Opción seleccionada para el artículo
  const [selectedOptionFalta, setSelectedOptionFalta] = useState(""); // Opción seleccionada para la falta
  const [showCardTrabajador, setShowCardTrabajador] = useState(false); // Estado para mostrar el card de trabajador
  const [showCardArticulo, setShowCardArticulo] = useState(false); // Estado para mostrar el card de artículo
  const [showCardFalta, setShowCardFalta] = useState(false); // Estado para mostrar el card de falta
  const [cardExit, setCardExit] = useState(false); // Estado para manejar la animación de salida

  const handleSliderChange = (e) => {
    setTiempo(Number(e.target.value)); // Actualizar minutos según el slider
  };

  // Función para convertir minutos a "X horas Y minutos"
  const formatTiempo = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas} horas ${minutosRestantes} minutos`;
  };

  const handleClose = () => {
    setIsExiting(true);
  };

  // Maneja el click en los campos para mostrar el card
  const handleInputClickTrabajador = () => {
    setShowCardTrabajador(true);
    setCardExit(false);
  };

  const handleInputClickArticulo = () => {
    setShowCardArticulo(true);
    setCardExit(false);
  };

  const handleInputClickFalta = () => {
    setShowCardFalta(true);
    setCardExit(false);
  };

  // Función para manejar la selección de una opción en cualquier card
  const handleOptionSelect = (option, type) => {
    if (type === "trabajador") setSelectedOptionTrabajador(option);
    if (type === "articulo") setSelectedOptionArticulo(option);
    if (type === "falta") setSelectedOptionFalta(option);
    setCardExit(true);
  };

  useEffect(() => {
    if (cardExit) {
      const timer = setTimeout(() => {
        setShowCardTrabajador(false);
        setShowCardArticulo(false);
        setShowCardFalta(false);
      }, 300); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [cardExit]);

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
        texto={titleCardAdd}
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
      />
      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-4 w-full md:w-[25rem]">
        <div className="w-[90%] flex flex-col justify-between mx-auto">
          <div className="h-[80vh]">
            {!selectArt && !selectFalta && (
              <>
                <div className="relative mb-4">
                  <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                    Trabajador
                  </label>
                  <div
                    className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer"
                    onClick={handleInputClickTrabajador} // Mostrar el card al hacer clic
                  >
                    <input
                      type="text"
                      value={
                        selectedOptionTrabajador ||
                        "Elena Sofía Marquardt Pérez"
                      } // Mostrar la opción seleccionada o el valor por defecto
                      className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent focus:outline-none"
                      readOnly
                    />
                    <Image
                      src="/iconamoon_arrow_bottom.png"
                      className="mr-4"
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className="relative mb-6">
                  <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1 z-10">
                    Tiempo
                  </label>

                  <div className="flex items-center space-x-4 mt-4">
                    <div className="py-[16px] px-[20px] border rounded-[8px] text-center text-gray-800">
                      {formatTiempo(tiempo)}
                    </div>

                    <div className="relative flex-1">
                      <div className="relative h-2 bg-[#EFEFEF] rounded-full overflow-hidden">
                        <div
                          className="absolute h-2 bg-[#EFEFEF] rounded-full transition-width duration-200"
                          style={{
                            width: `${(tiempo / 480) * 100}%`, // Mapeo de 0-480 minutos al % del slider
                          }}
                        ></div>
                      </div>

                      <div
                        className="absolute top-[-6px] w-6 h-6 bg-white border-2 border-[#D3D6DA] rounded-full shadow-md"
                        style={{
                          left: `${(tiempo / 480) * 100}%`, // Mapeo al % del slider
                          transform: "translateX(-50%)",
                        }}
                      ></div>

                      <input
                        type="range"
                        min="0"
                        max="480" // 480 minutos (8 horas)
                        value={tiempo}
                        onChange={handleSliderChange}
                        className="absolute inset-0 opacity-0 w-full cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {selectArt && (
              <div className="relative mb-4">
                <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                  Articulo
                </label>
                <div
                  className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer"
                  onClick={handleInputClickArticulo} // Mostrar el card al hacer clic
                >
                  <input
                    type="text"
                    value={selectedOptionArticulo || "Banner informativo"} // Mostrar la opción seleccionada o el valor por defecto
                    className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent focus:outline-none"
                    readOnly
                  />
                  <Image
                    src="/iconamoon_arrow_bottom.png"
                    className="mr-4"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            )}

            {selectFalta && (
              <div className="relative mb-4">
                <label className="absolute -top-3 left-3 text-[#657080] text-sm px-1">
                  Falta
                </label>
                <div
                  className="flex items-center w-full border border-[#EBECEF] rounded-md cursor-pointer"
                  onClick={handleInputClickFalta} // Mostrar el card al hacer clic
                >
                  <input
                    type="text"
                    value={selectedOptionFalta || "Otrox"} // Mostrar la opción seleccionada o el valor por defecto
                    className="w-full py-[12px] px-[20px] text-gray-800 bg-transparent focus:outline-none"
                    readOnly
                  />
                  <Image
                    src="/iconamoon_arrow_bottom.png"
                    className="mr-4"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cards con opciones */}
          {showCardTrabajador && (
            <div
              className={`absolute bottom-0 left-0 w-full  bg-white shadow-2xl rounded-t-lg p-4 z-50 ${
                cardExit ? "slide-down" : "slide-up"
              }`}
            >
              <div className="space-y-3">
                <div
                  className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleOptionSelect(
                      "Elena Sofía Marquardt Pérez",
                      "trabajador"
                    )
                  }
                >
                  Opción 1: Elena Sofía Marquardt Pérez
                </div>
                <div
                  className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleOptionSelect("Carlos López", "trabajador")
                  }
                >
                  Opción 2: Carlos López
                </div>
                {/* Puedes agregar más opciones según sea necesario */}
              </div>
            </div>
          )}

          {showCardArticulo && (
            <div
              className={`absolute bottom-0 left-0 w-full  bg-white shadow-2xl rounded-t-lg p-4 z-50 ${
                cardExit ? "slide-down" : "slide-up"
              }`}
            >
              <div className="space-y-3">
                <div
                  className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleOptionSelect("Banner informativo", "articulo")
                  }
                >
                  Opción 1: Banner informativo
                </div>
                <div
                  className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleOptionSelect("Publicidad exterior", "articulo")
                  }
                >
                  Opción 2: Publicidad exterior
                </div>
                {/* Agregar más opciones aquí */}
              </div>
            </div>
          )}

          {showCardFalta && (
            <div
              className={`absolute bottom-0 left-0 w-full bg-white shadow-2xl rounded-t-lg p-4 z-50 ${
                cardExit ? "slide-down" : "slide-up"
              }`}
            >
              <div className="space-y-3">
                <div
                  className="text-black p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect("Otrox", "falta")}
                >
                  Opción 1: Otrox
                </div>
                <div
                  className="text-black p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleOptionSelect("Falta puntualidad", "falta")
                  }
                >
                  Opción 2: Falta puntualidad
                </div>
                <div
                  className="text-black p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect("Prueba 3", "falta")}
                >
                  Prueba 3
                </div>
                {/* Más opciones aquí */}
              </div>
            </div>
          )}

          <button className="w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
