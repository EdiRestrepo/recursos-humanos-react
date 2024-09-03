import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./components/empleados/ListadoEmpleados";
import Navegación from "./components/shared/Navegación";
import AgregarEmpleado from "./components/agregarEmpleado/AgregarEmpleado";
import EditarEmpleado from "./components/editarEmpleado/EditarEmpleado";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegación/>
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />}/>
          <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
          <Route exact path="/editar/:id" element={<EditarEmpleado/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
