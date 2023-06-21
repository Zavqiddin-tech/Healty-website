import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.scss";

import Sidebar from "./components/Sidebar/Sidebar";
import Search from "./components/Search/Search";

// Layout
import Home from "./components/layout/Home/Home";
import Palatalar from "./components/layout/Palatalar/Palatalar";
import Shifokorlar from "./components/layout/Shifokorlar/Shifokorlar";
import Bolimlar from "./components/layout/Bolimlar/Bolimlar";
import Bemorlar from "./components/layout/Bemorlar/Bemorlar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div className="App__left">
            <Sidebar />
          </div>
          <div className="App__right">
            <Search />
            <div className="App__center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/palatalar" element={<Palatalar />} />
                <Route path="/shifokorlar" element={<Shifokorlar />} />
                <Route path="/bolimlar" element={<Bolimlar />} />
                <Route path="/bemorlar" element={<Bemorlar />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
