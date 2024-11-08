import BottomNavigation from "../components/BottomNavigation";
import HeadNavigation from "../components/HeaderNavigation";

export default function DirectorDeOpercaiones() {
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
          texto="Orb Points"
          icon="/mingcute_notification-line.png"
        />
        <br></br>
        <br></br>
        <div className="content__admin mt-3 overflow-auto bg-[#F5F5F7] pt-3 w-full md:w-[25rem]">
          <div className="w-[95%] m-auto p-4 rounded-lg mb-5">
            <div className="flex items-center rounded-lg border border-[#EBECEF] bg-[#F5F5F7] py-1 px-2 mb-4">
              <img
                src="/uil_search.png"
                alt="Buscar"
                className="w-5 h-5 ml-2"
              />
              <input
                type="text"
                placeholder="Busca por nombre, distrito o país"
                className="w-full p-2 focus:outline-none text-sm bg-[#F5F5F7] text-gray-600 ml-2 "
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-md">
                <div className="flex items-center space-x-3">
                  <img
                    src="/emojione_flag-for-peru.png"
                    alt="Bandera"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Galería Comercial La Familia
                    </p>
                    <p className="text-sm text-gray-500">Nuevo Chimbote</p>
                  </div>
                </div>
                <img
                  src="/typcn_warning.png"
                  alt="Advertencia"
                  className="w-10 h-10 p-2 bg-yellow-500 rounded-full"
                />
              </div>
              <div className="flex items-center p-3 rounded-md">
                <img
                  src="/emojione_flag-for-mexico.png"
                  alt="Bandera"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">
                    Centro Comercial Santa Fe
                  </p>
                  <p className="text-sm text-gray-500">Cuajimalpa de Morelos</p>
                </div>
              </div>

              <div className="flex items-center p-3 rounded-md">
                <img
                  src="/emojione_flag-for-peru.png"
                  alt="Bandera"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-800">Óvalo Papal</p>
                  <p className="text-sm text-gray-500">Trujillo</p>
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
