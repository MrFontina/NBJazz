import "./Styles/App.scss";
import Home from "./Componentes/Home";
import Header from "./Componentes/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guitarra from "./Componentes/Guitarra";
import Improvisacion from "./Componentes/Improvisacion";
import Ensambles from "./Componentes/Ensambles";
import About from "./Componentes/About";
import Conciertos from "./Componentes/Conciertos";
import Musica from "./Componentes/Musica";
import { useState } from "react";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <BrowserRouter>
    <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Routes>
      <Route path="/" element={<Home isOpen={isOpen}/>}/>
      <Route path="/guitarra" element={<Guitarra isOpen={isOpen}/>}/>
      <Route path="improvisacion" element={<Improvisacion isOpen={isOpen}/>} />
      <Route path="ensambles" element={<Ensambles isOpen={isOpen}/>} />
      <Route path="/musica" element={<Musica isOpen={isOpen}/>} />
      <Route path="/conciertos" element={<Conciertos isOpen={isOpen}/>}  />
      <Route path="/about" element={<About isOpen={isOpen}/>} />     
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
