import Image from "next/image";

export default function BottomNavigation({ routes, onSupervisoresClick, onInicioClick }) {
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
            }
          }}
        >
          <Image
            src={route.icon}
            alt={`${route.label} Icon`}
            width={24}
            height={24}
          />
        </a>
      ))}
    </div>
  );
}
