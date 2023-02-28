import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Modulos from "./pages/Modulos";

import EnConstruccion from "./pages/EnConstruccion";
import Login from "./pages/Demo/Login";
import CartasGantt from "./pages/Demo/CartaGantt";
import AsigTareas from "./pages/Demo/AsigTareas";
import Conflictos from "./pages/Demo/Conflictos";
import Informes from "./pages/Demo/Informes";
import Notificaciones from "./pages/Demo/Notificaciones";
import Test from "./pages/Demo/Test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home bg={"bg-sky-200"} />} />
          <Route path="/dashboard" element={<Dashboard bg={"bg-sky-200"} />} />
          <Route path="/modulos" element={<Modulos bg={"bg-sky-200"} />} />
          <Route path="/*" element={<EnConstruccion bg={""} />} />
          {/* <Route exact path="/tareas" element={<AsigTareas />} />
          <Route exact path="/gantt" element={<CartasGantt />} />
          <Route exact path="/conflictos" element={<Conflictos />} />
          <Route exact path="/informes" element={<Informes />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/notificaciones" element={<Notificaciones />} />
          <Route exact path="/test" element={<Test />} /> */}
          {/* <Route path="/egreso/edit/:id" element={<EditarEgreso />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
