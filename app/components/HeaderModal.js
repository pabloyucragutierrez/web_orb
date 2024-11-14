export default function HeadModal({
  texto,
  icon,
  onClose,
  openModal,
  iconMore,
}) {
  return (
    <div className="fixed top-0 border-b-2 w-full md:w-[25rem] h-fit flex justify-between bg-white py-3 px-6 z-50">
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
      {icon && (
        <button
          className="absolute left-5 top-2 bg-white p-2 rounded-lg border border-[#EBECEF]"
          onClick={onClose} // Usamos onClose en el botón
        >
          <img src={icon} alt="Icono" className="w-4 h-4" />
        </button>
      )}
      <p className="text-lg text-black font-[500] w-full text-center ">
        {texto}
      </p>
    </div>
  );
}
