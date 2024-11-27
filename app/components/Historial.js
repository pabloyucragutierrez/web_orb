import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";

export default function Historial({ closeModal }) {
  const [isExiting, setIsExiting] = useState(false);

  // Estado para controlar los desplegables por cada mes
  const [monthStates, setMonthStates] = useState({
    Octubre: true, // Abierto por defecto
    Septiembre: true, // Abierto por defecto
  });

  const handleClose = () => {
    setIsExiting(true);
  };

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => closeModal(), 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting, closeModal]);

  // Función para alternar el estado desplegable de un mes
  const toggleMonth = (month) => {
    setMonthStates((prev) => ({
      ...prev,
      [month]: !prev[month],
    }));
  };

  const months = [
    {
      name: "Octubre",
      data: [
        { label: "Citas canceladas", value: "96" },
        { label: "Orb usados", value: "2" },
        { label: "Verificaciones de deep-zokor", value: "122" },
        {
          label: "Usuarios canjean su bono",
          value: "Sí",
          isCheckbox: true,
        },
        { label: "Cantidad de usuarios en la cola", value: "150" },
        { label: "Cantidad de usuarios en la cola", value: "5", isStar: true },
      ],
    },
    {
      name: "Septiembre",
      data: [
        { label: "Citas canceladas", value: "105" },
        { label: "Orb usados", value: "3" },
        { label: "Verificaciones de deep-zokor", value: "110" },
        { label: "Usuarios canjean su bono", value: "No" },
        { label: "Cantidad de usuarios en la cola", value: "120" },
        { label: "Cantidad de usuarios en la cola", value: "7", isStar: true },
      ],
    },
  ];

  return (
    <div
      className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${
        isExiting ? "animate-slide-out-right" : "animate-slide-in-right"
      }`}
    >
      <HeadModal
        texto="Historial"
        icon="/iconamoon_arrow-up-2-duotone.png"
        onClose={handleClose}
      />
      <br></br>
      <br></br>
      <div className="mt-5 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
        <div className="w-[90%] m-auto">
          {months.map((month) => (
            <div key={month.name} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleMonth(month.name)}
              >
                <span className="font-[500] text-[#657080]">{month.name}</span>
                <img
                  src="/iconamoon_arrow_bottom.png"
                  alt="Toggle"
                  className={`w-5 h-5 transform transition-transform ${
                    monthStates[month.name] ? "" : "rotate-180"
                  }`}
                />
              </div>

              {/* Datos del Mes */}
              {monthStates[month.name] && (
                <div className="mt-2">
                  {month.data.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-[17px] border-b  border-[#E9EDF0] last:border-none"
                    >
                      <span className="text-black font-[400]">
                        {item.label}
                      </span>
                      {item.isCheckbox ? (
                        <div className="flex items-center">
                          <label className="flex items-center space-x-2 cursor-default">
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={true} // Siempre marcado
                              readOnly // No editable
                            />
                            <span
                              className={`bg-black w-10 h-6 flex items-center rounded-full p-1`}
                            >
                              <span
                                className={`translate-x-4 bg-white w-4 h-4 rounded-full transform transition-transform`}
                              ></span>
                            </span>
                          </label>
                        </div>
                      ) : item.isStar ? (
                        <div className="flex items-center">
                          <span className="text-[#000] text-[14px] font-[500] mr-1">
                            {item.value}
                          </span>
                          <img
                            src="/star_icon.png"
                            alt="Star"
                            className="w-4 h-4"
                          />
                        </div>
                      ) : (
                        <span className="text-[#000] text-[14px] font-[500]">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
