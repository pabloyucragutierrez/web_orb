"use client";
import Image from "next/image";

export default function BottomNavigation({
  routes,
  onSupervisoresClick,
  onInicioClick,
  onInicioWindow,
  activePage,
}) {
  return (
    <div className="fixed bottom-0 w-full md:w-[25rem] h-fit flex justify-evenly bg-white py-6">
      {routes.map((route, index) => (
        <a
          key={index}
          href={route.path}
          className="flex flex-col items-center text-gray-600"
          onClick={(e) => {
            e.preventDefault();
            if (route.icon === "/lets-icons_user-fill.png") {
              onSupervisoresClick();
            } else if (route.icon === "/icon_sidebar.png") {
              onInicioClick();
            } else if (route.icon === "/fluent_location-16-filled.png") {
              onInicioClick();
            } else if (route.icon === "/material-symbols_window.png") {
              onInicioWindow();
            }
          }}
        >
          <Image
            src={route.icon}
            alt={`${route.label} Icon`}
            width={24}
            height={24}
            style={{
              filter:
                activePage === "Administrador" &&
                route.icon === "/icon_sidebar.png"
                  ? "invert(1)"
                  : activePage === "Perfil" &&
                    route.icon === "/lets-icons_user-fill.png"
                  ? "brightness(0)"
                  : "none",
            }}
          />
        </a>
      ))}
    </div>
  );
}
