export default function RegistroExito() {
  return (
    <div className="bg-[#F5F5F7] w-full md:w-[25rem] min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-center space-y-4 w-[80%]">
          {/* Ícono de éxito */}
          <div className="flex items-center justify-center rounded-full">
            <img
              src="/icon_check.png"
              alt="Success Icon"
              className="w-18 h-18"
            />
          </div>

          {/* Texto principal */}
          <h2 className="text-xl font-[500] text-gray-800">
            ¡Registro realizado con éxito!
          </h2>

          {/* Texto secundario */}
          <p className="text-[#657080] text-center">
            ¡Puede visualizar el registro realizado en el historial de métricas!
          </p>
        </div>
        {/* <button class="w-[90%] block mx-auto text-white py-[12px] font-medium rounded-[12px] bg-black focus:outline-none absolute bottom-6 m-auto">
          Cerrar
        </button> */}
      </div>
    </div>
  );
}
