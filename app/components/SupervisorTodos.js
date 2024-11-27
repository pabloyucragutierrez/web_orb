import { useState } from "react";
import HeadModal from "./HeaderModal";

function RegistroExito({ onClose }) {
  return (
    <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-center space-y-4 w-[80%]">
          <div className="flex items-center justify-center rounded-full">
            <img
              src="/icon_check.png"
              alt="Success Icon"
              className="w-18 h-18"
            />
          </div>

          <h2 className="text-xl font-[500] text-gray-800">
            ¡Registro realizado con éxito!
          </h2>

          <p className="text-[#657080] text-center">
            ¡Puede visualizar el registro realizado en el historial de métricas!
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none absolute bottom-6 m-auto"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default function SupervisorTodos({ closeModal, openHistorial }) {
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showRegistroExito, setShowRegistroExito] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  const [counterValue, setCounterValue] = useState(50); // Estado para el valor del contador
  const [hoverCount, setHoverCount] = useState(0); // Número de estrellas visibles en hover
  const [selectedCount, setSelectedCount] = useState(0); // Número de estrellas que permanecerán visibles

  // Función para manejar el hover
  const handleMouseEnter = (index) => {
    setHoverCount(index + 1); // Muestra las estrellas hasta este índice
  };

  // Función para fijar las estrellas visibles al hacer clic
  const handleClick = () => {
    setSelectedCount(hoverCount); // Fija las estrellas visibles actuales
  };

  // otros metodos

  const incrementCounter = () => {
    setCounterValue((prevValue) => prevValue + 1);
  };

  const decrementCounter = () => {
    setCounterValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0)); // Evitar valores negativos
  };

  const metrics = [
    { id: 1, name: "Citas canceladas", type: "counter" },
    { id: 2, name: "Orb usados", type: "counter" },
    { id: 3, name: "Verificaciones de Tremendous", type: "counter" },
    { id: 4, name: "Verificaciones de deep-zokor", type: "counter" },
    { id: 5, name: "Tiempo promedio por verificación", type: "counter" },
    { id: 6, name: "Cantidad de usuarios en la cola", type: "counter" },
    { id: 7, name: "Usuarios canjean su bono", type: "switch" },
    { id: 8, name: "Satisfacción del promotor", type: "stars" },
  ];

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => closeModal(), 300);
  };

  const openCard = (metric) => {
    setSelectedMetric(metric);
  };

  const closeCard = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setSelectedMetric(null);
    }, 300);
  };

  const handleRegister = () => {
    setShowRegistroExito(true); // Mostrar RegistroExito
    closeCard(); // Cerrar la tarjeta actual
  };

  const handleCloseRegistroExito = () => {
    setShowRegistroExito(false); // Ocultar RegistroExito
  };

  const toggleCheckbox = () => {
    setCheckboxState(!checkboxState);
  };

  return (
    <div
      className={`relative bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${
        isExiting ? "animate-slide-out-right" : "animate-slide-in-right"
      }`}
    >
      <HeadModal
        texto="Métricas"
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
        historialBtn="Historial"
        openHistorialModal={openHistorial}
      />
      <br />
      <br />
      <div className="py-3 px-6 overflow-auto bg-white">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="flex items-center justify-between py-4 cursor-pointer"
            onClick={() => openCard(metric)}
          >
            <div>
              <p className="font-medium text-gray-800">
                {metric.name}{" "}
                {metric.id === 6 && (
                  <span className="text-[#657080] bg-[#F5F5F7] rounded-full w-[20px] h-[20px] inline-block text-center text-[12px] leading-[20px]">
                    5
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-500">Diario</p>
            </div>
            {metric.id === 2 || metric.id === 3 || metric.id === 4 ? (
              <span className="bg-[#FFEBEB] px-3 py-2 rounded-lg text-[#E04540] text-sm font-medium">
                No completado
              </span>
            ) : (
              <span className="bg-[#DDFFE0] px-3 py-2 rounded-lg text-[#00C313] text-sm font-medium">
                Completado
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Fondo oscuro */}
      {selectedMetric && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeCard}
        ></div>
      )}

      {/* Card dinámico */}
      {selectedMetric && (
        <div
          className={`fixed bottom-0 transform -translate-x-1/2 w-[25rem] bg-white shadow-lg rounded-t-lg p-6 z-50 ${
            isClosing ? "slide-down" : "slide-up"
          }`}
        >
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-[600] text-[#000] text-[18px]">
              Realizar registro
            </h3>
            <img
              src="/icon_close.png"
              alt="Cerrar"
              className="w-5 h-5 cursor-pointer"
              onClick={closeCard}
            />
          </div>
          <div className="flex justify-between items-center mb-5">
            <b className="text-[#000] font-[500]">Métrica</b>
            <p className="text-[#657080]">{selectedMetric.name}</p>
          </div>
          <div className="flex justify-between items-center mb-5">
            <b className="text-[#000] font-[500]">Valor</b>
            {/* Condicionales para renderizar el tipo de input */}
            {selectedMetric.type === "counter" && (
              <div className="flex items-center gap-[6px]">
                <button
                  className="bg-[#000000] text-[20px] w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  onClick={decrementCounter}
                >
                  -
                </button>
                <span className="rounded-[4px] text-center w-[25px] border-[#000] border-b-2 h-[20px] text-[#000]">
                  {counterValue}
                </span>
                <button
                  className="bg-[#000000] text-[20px] w-[18px] h-[18px] rounded-full flex items-center justify-center"
                  onClick={incrementCounter}
                >
                  +
                </button>
              </div>
            )}

            {selectedMetric.type === "switch" && (
              <div className="flex items-center">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={checkboxState}
                    onChange={toggleCheckbox}
                  />
                  <span
                    className={`${
                      checkboxState ? "bg-black" : "bg-[#D6D9DD]"
                    } w-10 h-6 flex items-center rounded-full p-1`}
                  >
                    <span
                      className={`${
                        checkboxState ? "translate-x-4" : "translate-x-0"
                      } bg-white w-4 h-4 rounded-full transform transition-transform`}
                    ></span>
                  </span>
                </label>
              </div>
            )}

            {selectedMetric.type === "stars" && (
              <div
                className="flex items-center space-x-2"
                onMouseLeave={() => setHoverCount(0)} // Resetea el estado de hover
              >
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src="/star_icon.png"
                    alt="Estrella"
                    className={`w-6 h-6 cursor-pointer ${
                      index < Math.max(hoverCount, selectedCount)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)} // Actualiza el estado en hover
                    onClick={handleClick} // Fija las estrellas al hacer clic
                  />
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleRegister}
            className="mt-6 w-full bg-black text-white px-2 py-[14px] rounded-[12px]"
          >
            Registrar
          </button>
        </div>
      )}

      {/* Componente RegistroExito */}
      {showRegistroExito && (
        <RegistroExito onClose={handleCloseRegistroExito} />
      )}
    </div>
  );
}
