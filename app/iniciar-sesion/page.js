import Image from "next/image";

export default function IniciarSesion() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full md:w-[20rem] h-[500px] p-8 bg-white rounded-lg shadow-md flex flex-col justify-between">
        
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo_login.png" 
            alt="Logo Orbital X"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h2 className="text-2xl font-semibold text-center text-gray-800">Orbs Points</h2>
          <p className="text-center text-sm text-gray-500">Orbital X</p>
        </div>

        <div>
          <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">
            Código de acceso
          </label>
          <input
            type="text"
            id="codigo"
            placeholder=" "
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button className="w-full py-2 mt-4 text-white bg-black rounded-lg font-medium hover:bg-gray-800">
          Ingresar
        </button>
      </div>
    </div>
  );
}
