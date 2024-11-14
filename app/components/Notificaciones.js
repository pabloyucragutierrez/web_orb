import { useEffect, useState } from "react";
import HeadModal from "./HeaderModal";

export default function Notificaciones({closeModal, items}) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
  };

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
        texto="Notificaciones"
        icon="/iconamoon_arrow-up-2-duotone.png" onClose={handleClose}
      />

      <br />
      <br />
      <div className="mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
        <div className="w-[90%] m-auto rounded-lg">
          <div className="w-full ">
            {items.map((notification, index) => (
              <div
                key={index}
                className="flex items-center p-[16px] bg-white rounded-[12px] shadow-sm space-x-[12px] mb-[12px]"
              >
                {/* Fondo del ícono redondo y centrado */}
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${notification.bgColor} flex-shrink-0 aspect-square`}
                >
                  <img src={notification.icon} alt="" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {notification.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {notification.description}
                  </p>
                  <span className="text-gray-400 text-xs">
                    {notification.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
