import React from 'react';

const Cards = ({ title, onVerTodoClick, directores }) => {
  return (
    <div className="bg-white w-[90%] m-auto px-2 pb-2 rounded-lg mb-5">
      <div className="flex justify-between p-[20px]">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <a
          href="#"
          className="text-sm text-[#657080]"
          onClick={onVerTodoClick} 
        >
          Ver todo
        </a>
      </div>
      <div className="bg-[#F9FAFB] rounded-[16px]">
        {directores.map((director, index) => (
          <div key={index} className="flex items-center gap-[16px] p-[16px] m-0">
            <img
              src={director.icon}
              alt="Icon"
              className="bg-[#EBECEF] rounded-full w-10 h-10 p-2"
            />
            <div>
              <p className="text-sm text-gray-500">{director.cargo}</p>
              <p className="font-medium text-gray-800">{director.nombre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
