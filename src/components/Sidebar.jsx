import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-[#F3F2EE] p-4">
      <div className="bg-white shadow rounded-lg p-4 text-start">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full mx-auto mb-4"
        />
        <h2 className="font-bold text-lg">John Doe</h2>
        <p className="text-gray-500">Software Engineer</p>
      </div>

      <div className="bg-white shadow rounded-lg p-4 text-start mt-8 flex flex-col">
        <div className="flex flex-row">
          <h2 className="font-bold text-sm">Visualizaciones del perfil</h2>
          <p className="ml-4 font-bold text-blue-500">164</p>
        </div>
        <div className="flex flex-row mt-2">
          <h2 className="font-bold text-sm">Impresiones de la publicación</h2>
          <p className="ml-4 font-bold text-blue-500">551</p>
        </div>

        <div className="flex flex-row mt-2">
          <h2 className="font-bold text-sm">Seguidores</h2>
          <p className="ml-4 font-bold text-blue-500">1.2k</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
