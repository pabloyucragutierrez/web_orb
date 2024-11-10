export default function HeadNavigation({ texto, icon }) {
  return (
    <>
      <div className="fixed top-0 w-full md:w-[25rem] h-fit flex justify-between bg-white py-3 px-6 z-50 ">
        <p className="text-lg text-black font-[500]">{texto}</p>
        {icon && (
          <button className="bg-white p-2 rounded-lg border border-[#EBECEF]">
            <img src={icon} alt="Icono" className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
