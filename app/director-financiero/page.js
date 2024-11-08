import BottomNavigation from "../components/BottomNavigation";
import HeadNavigation from "../components/HeaderNavigation";

export default function DirectorFinanciero() {
  const routes = [
    { path: "/tablero", icon: "/material-symbols_window.png", label: "Inicio" },
    {
      path: "/corporativo",
      icon: "/fluent_location-16-filled.png",
      label: "Corporativo",
    },
    { path: "/gastos", icon: "/lets-icons_user-fill.png", label: "Gastos" },
  ];

  return (
    <div className="flex w-full flex-col items-center overflow-auto justify-center min-h-screen bg-[#e0dfdf]">
      <div className="content__main bg-[#F5F5F7] w-full md:w-auto min-h-screen">
        <HeadNavigation
          texto="Tablero"
          icon="/mingcute_notification-line.png"
        />
         <br></br>
         <br></br>
        <div className="content__admin mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex flex-col items-center mb-6">
              <div className=" mb-2">
                <img
                  src="/imagedf.png"
                  alt="Orb App Icon"
                  className="w-10 h-10"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                $12,500.00
              </h2>
              <p className="text-gray-500">Orb App</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg w-[45%]">
                <div className="bg-gray-200 p-3 rounded-full mb-2">
                  <img
                    src="/healthicons_money-bag.png"
                    alt="Wallet Icon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="text-lg font-medium text-gray-800">$11,000.00</p>
                <p className="text-sm text-gray-500">Monedero</p>
              </div>

              <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg w-[45%]">
                <div className="bg-gray-200 p-3 rounded-full mb-2">
                  <img
                    src="/mingcute_pig-money-fill.png"
                    alt="Funds Icon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="text-lg font-medium text-gray-800">$3,000.00</p>
                <p className="text-sm text-gray-500">Fondos</p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Ingresos corporativos
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
                    <p className="font-medium text-gray-800">
                      Recompensa por calificación
                    </p>
                    <p className="text-sm text-gray-500">10 oct. 2024</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-green-500">
                  + $200.00
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/solar_money-bag-bold.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Expansión</p>
                    <p className="text-sm text-gray-500">10 oct. 2024</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-green-500">
                  + $2,000.00
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/solar_money-bag-bold.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Expansión</p>
                    <p className="text-sm text-gray-500">10 oct. 2024</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-green-500">
                  + $2,000.00
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Gastos corporativos
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
                    <p className="font-medium text-gray-800">
                      Repartición Pepito
                    </p>
                    <p className="text-sm text-gray-500">20 oct. 2024</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-red-500">
                  -S/ 7,500.00
                </p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/solar_money-bag-bold.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Viáticos Pepito</p>
                    <p className="text-sm text-gray-500">29 oct. 2024</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-red-500">-S/ 90.00</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/solar_money-bag-bold.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Viaje de Lalo</p>
                    <p className="text-sm text-gray-500">28 oct. 2024</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-red-500">
                  -S/ 1,050.00
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white w-[90%] m-auto p-4 rounded-lg mb-5 shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Bonos</h2>
              <a href="#" className="text-sm text-gray-400">
                Ver todo
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src="/fluent_gift-card-16-filled.png"
                    alt="Icon"
                    className="bg-gray-200 rounded-full w-10 h-10 p-2"
                  />
                  <div>
                    <p className="font-medium text-gray-800">S/ 250.00</p>
                    <p className="text-sm text-gray-500">
                      Bono por mayor número de registros
                    </p>
                  </div>
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
