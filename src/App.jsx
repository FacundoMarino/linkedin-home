import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./index.css";
import Feed from "./components/Feed";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("Titanic");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F2EE]">
      <Header onSearch={handleSearch} />
      <div className="flex flex-1">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <MainContent searchQuery={searchQuery} />
        <div className="hidden lg:block">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default App;
