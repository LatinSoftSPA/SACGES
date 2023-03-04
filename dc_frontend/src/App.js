import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Modulos from "./pages/Modulos";
import Login from "./pages/Login";

import EnConstruccion from "./pages/EnConstruccion";

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
          <Route exact path="/login" element={<Login />} />

          {/* <Route path="/egreso/edit/:id" element={<EditarEgreso />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
