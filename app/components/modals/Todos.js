import { useEffect, useState } from "react";
import HeadModal from "../HeaderModal";

export default function Todos({ closeModal, items, textHead, onItemClick }) {
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
    <div className={`bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen ${isExiting ? "animate-slide-out-right" : "animate-slide-in-right"}`}>
      <HeadModal texto={textHead} icon="/iconamoon_arrow-up-2-duotone.png" onClose={handleClose} />
      <br />
      <br />
      <div className="py-[12px] px-[24px] overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
        {items.map((el) => (
          <div className="flex border-b-2 items-center justify-between py-[20px]" onClick={() => onItemClick(el)}>
            <div className="flex items-center space-x-3">
              <div>
                <p className="font-medium text-gray-800">{el.name}</p>
                <p className="text-sm text-gray-500">{el.title}</p>
              </div>
            </div>
            <p className="text-sm font-[400] text-black">{el.code} </p>
          </div>
          
        ))}
      </div>
    </div>
  );
}
