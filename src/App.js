import React from "react";
import { Routes,Route } from "react-router-dom";

//components
import Header from "./components/Header/Header.jsx";
import Weapons from "./pages/Weapons.jsx";
import Agents from "./pages/Agents.jsx";
import Maps from "./pages/Maps.jsx";



function App() {


return(<div>
    <Header/>
  <Routes>
  
      <Route path="/weapons" element={<Weapons/>}/>
      <Route path="/agents" element={<Agents/>}/>
      <Route path="/maps" element={<Maps/>}/>
    
  </Routes>


  </div>)
}

export default App;
