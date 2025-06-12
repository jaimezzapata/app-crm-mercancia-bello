import Login from "../pages/Login";
import Home from "../Home";
import RutaProtegida from "../components/RutaProtegida";
import CrearEnvios from "../pages/CrearEnvios";
import ListarEnvios from "../pages/ListarEnvios";

export let enrutador = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home/",
    element: <RutaProtegida proteger={<Home />} />,
    children: [
      {
        path: "crear-envios",
        element: <CrearEnvios />,
      },
      {
        path: "listar-envios",
        element: <ListarEnvios />,
      },
    ],
  },
];
