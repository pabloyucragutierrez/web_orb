import BottomNavigation from "../components/BottomNavigation";
import HeadNavigation from "../components/HeaderNavigation";

export default function Supervisores() {
  const routes = [
    {
      path: "/tablero",
      icon: "/fluent_location-16-filled.png",
      label: "Inicio",
    },
    {
      path: "/corporativo",
      icon: "/lets-icons_user-fill.png",
      label: "Corporativo",
    },
  ];
  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf] ">
      <div className="content__main bg-[#F5F5F7] w-full md:w-auto min-h-screen">
        <HeadNavigation
          texto="Galería comercial de la familia"
          icon="/mingcute_notification-line.png"
        />
        <br></br>
        <br></br>
        <div className="content__admin mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
          <div className="bg-white w-[90%] m-auto p-6 rounded-lg mb-5 shadow relative">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                <img
                  src="/emojione_flag-for-peru.png"
                  alt="Bandera"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <button className="absolute top-4 right-4 bg-white p-2 rounded-lg border border-[#EBECEF]">
              <img
                src="/solar_pen-bold.png"
                alt="Edit Icon"
                className="w-4 h-4"
              />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Orb Point 101
              </h2>
              <p className="text-sm text-gray-500">
                Galería Comercial La Familia
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-lg font-medium text-gray-800">Perú</p>
                <p className="text-xs text-gray-500">País</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-lg font-medium text-gray-800">Áncash</p>
                <p className="text-xs text-gray-500">Departamento</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-lg font-medium text-gray-800">Santa</p>
                <p className="text-xs text-gray-500">Provincia</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-lg font-medium text-gray-800">
                  Nuevo Chimbote
                </p>
                <p className="text-xs text-gray-500">Distrito</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-[#FFB200] rounded-xl w-[90%] m-auto p-4 mb-5 flex items-center">
            <img
              src="/typcn_warning.png"
              alt="Advertencia"
              className="w-10 h-10 bg-yellow-500 rounded-full p-2 mr-3"
            />
            <p className="text-sm text-gray-900">
              Falta completar la métrica{" "}
              <span className="text-gray-900">“Cancelaciones diarias”</span>
            </p>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Métricas</h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Cancelaciones diarias
                    </p>
                    <p className="text-sm text-gray-500">Diario</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
                  Completado
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Orb usados</p>
                    <p className="text-sm text-gray-500">Diario</p>
                  </div>
                </div>
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                  No completado
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/solar_money-bag-bold.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Verificaciones de Tre...
                    </p>
                    <p className="text-sm text-gray-500">Diario</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
                  Completado
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Horas extras
              </h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">1 hora</p>
                    <p className="text-sm text-gray-500">
                      Elena Sofía Marquardt Pérez
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">21 dic. 2024</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">2 horas</p>
                    <p className="text-sm text-gray-500">
                      Leónidas Yauri Yuri Villanueva
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">20 dic. 2024</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">2 horas</p>
                    <p className="text-sm text-gray-500">
                      Elena Sofía Marquardt Pérez
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">20 dic. 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Horas descontadas
              </h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">1 hora</p>
                    <p className="text-sm text-gray-500">
                      Elena Sofía Marquardt Pérez
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">21 dic. 2024</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">2 horas</p>
                    <p className="text-sm text-gray-500">
                      Leónidas Yauri Yuri Villanueva
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">20 dic. 2024</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/tdesign_money.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">2 horas</p>
                    <p className="text-sm text-gray-500">
                      Elena Sofía Marquardt Pérez
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">20 dic. 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Articulos perdidos
              </h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/hugeicons_anonymous.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Banner informativo
                    </p>
                    <p className="text-sm text-gray-500">Educativo</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">18 dic. 2024</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/hugeicons_anonymous.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Papelera</p>
                    <p className="text-sm text-gray-500">Higiene</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">2 dic. 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Incumplimientos
              </h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/hugeicons_anonymous.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Elena Sofía Marquardt Pérez
                    </p>
                    <p className="text-sm text-gray-500">Supervisor</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">1 strike</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/hugeicons_anonymous.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Leónidas Yauri Yuri Villanueva
                    </p>
                    <p className="text-sm text-gray-500">Operador</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">0 strike</p>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/hugeicons_anonymous.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Miguel Torres Escalante
                    </p>
                    <p className="text-sm text-gray-500">Vigilante</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-black">2 strike2</p>
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation routes={routes} />
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
