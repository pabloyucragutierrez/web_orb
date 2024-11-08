import BottomNavigation from "../components/BottomNavigation";
import Image from "next/image";
import HeadNavigation from "../components/HeaderNavigation";

export default function Administrador() {
  const routes = [
    { path: "/roles", icon: "/icon_sidebar.png", label: "Roles" },
    {
      path: "/supervisores",
      icon: "/lets-icons_user-fill.png",
      label: "Supervisores",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf] ">
      <div className="content__main bg-[#F5F5F7] w-full md:w-auto min-h-screen">
        <HeadNavigation texto="Roles" />
        <br></br>
        <br></br>
        <div className="content__admin mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Gerentes/directores
              </h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>{" "}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src="/mdi_person-tie.png"
                  alt="Icon"
                  className="bg-[#EBECEF] rounded-full w-10 h-10 p-2"
                />
                <div>
                  <p className="text-sm text-gray-500">
                    Gerente de Recursos Humanos
                  </p>
                  <p className="font-medium text-gray-800">Daniel Roldán</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src="/arcticons_worldcoin.png"
                  alt="Icon"
                  className="bg-[#EBECEF] rounded-full w-10 h-10 p-2"
                />
                <div>
                  <p className="text-sm text-gray-500">
                    Director Financiero (CFO)
                  </p>
                  <p className="font-medium text-gray-800">
                    José Eduardo De La Guardia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src="/majesticons_shield.png"
                  alt="Icon"
                  className="bg-[#EBECEF] rounded-full w-10 h-10 p-2"
                />
                <div>
                  <p className="text-sm text-gray-500">
                    Director de Expansiones
                  </p>
                  <p className="font-medium text-gray-800">Giuseppe Capurro</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Supervisores
              </h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>{" "}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src="/mdi_person-tie.png"
                  alt="Icon"
                  className="bg-[#EBECEF] rounded-full w-10 h-10 p-2"
                />
                <div>
                  <p className="text-sm text-gray-500">Orb Point 101</p>
                  <p className="font-medium text-gray-800">
                    Anthony Williams Guanilo Castro
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src="/mdi_person-tie.png"
                  alt="Icon"
                  className="bg-[#EBECEF] rounded-full w-10 h-10 p-2"
                />
                <div>
                  <p className="text-sm text-gray-500">Orb Point 201</p>
                  <p className="font-medium text-gray-800">
                    Javier Alejandro Téllez Gómez
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <BottomNavigation routes={routes} />
      </div>
    </div>
  );
}
