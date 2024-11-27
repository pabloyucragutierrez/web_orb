export default function HeadModal({
  texto,
  icon,
  onClose,
  openModal,
  iconMore,
  iconText,
  historialBtn,
  openHistorialModal,
}) {
  return (
    <div className="fixed top-0 border-b-2 w-full md:w-[25rem] h-fit flex justify-between bg-white py-4 px-6 z-20">
      {iconMore && (
        <button className="absolute right-5 top-2 bg-white p-2 rounded-lg border border-[#EBECEF]">
          <img
            src={iconMore}
            alt="Icono"
            onClick={() => openModal(true)}
            className="w-4 h-4"
          />
        </button>
      )}
      {historialBtn && (
        <button
          className="absolute right-5 top-2 text-[#657080] px-[10px] py-[5px] rounded-[8px] border border-[#EBECEF]"
          onClick={() => openHistorialModal(true)}
        >
          {historialBtn}
        </button>
      )}
      {icon && (
        <button
          className="absolute left-5 top-3 bg-white p-2 rounded-lg border border-[#EBECEF]"
          onClick={onClose}
        >
          <img src={icon} alt="Icono" className="w-4 h-4" />
        </button>
      )}
      {iconText && (
        <p className="text-lg text-black font-[500] w-full text-left">
          {iconText}
        </p>
      )}
      <p className="text-lg text-black font-[500] w-full text-center">
        {texto}
      </p>
    </div>
  );
}
