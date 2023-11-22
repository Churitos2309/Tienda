// App.jsx
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useEffect } from "./useFetch";

import Home from "./pages/Home";
import PlatosFrios from "./pages/PlatosFrios";
import Sopa from "./pages/Sopa";
import Parrilla from "./pages/Parilla";
import Porcentaje from "./pages/porcentaje";
import Comida from "./pages/Comida";
import Email from "./pages/Email";
import Notificaciones from "./pages/Notificaciones";
import Configuracion from "./pages/Configuracion";
import LogRegister from "./pages/LoginRegister/LogRegister";
import LoginComponent from "./components/shared/Login/LoginComponents";



function App() {
  useEffect (() => {
    const url = window.location.href;

    if (url.includes('/Platos-Frios')){
      
    }
  })
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Platos-Frios" element={<PlatosFrios />} />
        <Route path="/Sopa" element={<Sopa />} />
        <Route path="/Parrilla" element={<Parrilla />}/>
        <Route path="/porcentaje" element={<Porcentaje />}/>
        <Route path="/Comida" element={<Comida />}/>
        <Route path="/Email" element={<Email />}/>
        <Route path="/Notificaciones" element={<Notificaciones />}/>
        <Route path="/Configuracion" element={<Configuracion />}/>
        <Route path="/login" element={<LoginComponent />}/>
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
