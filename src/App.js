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


function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/guitarra" element={<Guitarra/>}/>
      <Route path="improvisacion" element={<Improvisacion/>} />
      <Route path="ensambles" element={<Ensambles/>} />
      <Route path="/musica" element={<Musica/>} />
      <Route path="/conciertos" element={<Conciertos/>}  />
      <Route path="/about" element={<About/>} />     
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
