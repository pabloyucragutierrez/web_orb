export default function HeadModal({ texto, icon, onClose }) {
  return (
    <div className="fixed top-0 border-b-2 w-full md:w-[25rem] h-fit flex justify-between bg-white py-3 px-6 z-50">
      {icon && (
        <button
          className="bg-white p-2 rounded-lg border border-[#EBECEF]"
          onClick={onClose}
        >
          <img src={icon} alt="Icono" className="w-4 h-4" />
        </button>
      )}
      <p className="text-lg text-black font-[500]  w-[15rem] text-left ">
        {texto}
      </p>
    </div>
  );
}
