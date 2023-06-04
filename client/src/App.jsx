import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import NavBar2 from "./components/NavBar2/NavBar2";
import Footer from "./components/footer/Footer";
import { Home, Login, SignUp, Bluetune } from "./views/index";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const privateRouter = ["/bluetune"];
  const publicRouter = ["/", "/login", "/signup"];

  useEffect(() => {
    const validarUsuario = async (data) => {
      try {
        const response = await axios.post("http://localhost:3001/login", data);
        const usuarioEncontrado = response.data;
        validarUsuario(data);
        if (!usuarioEncontrado) {
          if (privateRouter.includes(location.pathname)) {
            navigate("/");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  return (
    <>
      {publicRouter.includes(location.pathname) && <NavBar />}
      {privateRouter.includes(location.pathname) && <NavBar2 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bluetune" element={<Bluetune />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
