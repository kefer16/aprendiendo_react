import React from "react";
import "./styles/styles.scss";
import Curso from "./Curso";
const App = () => (
  <>
    <div className="main-banner img-container" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="https://picsum.photos/1000/300" alt="imagen" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Título del banner</p>
                    <p> Subtítulo del banner</p>
                    <a href="http://google.com" className="button">
                        Botón del banner
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />

    </div>

    </>
);
export default App;

//Reglas
//1. Toda etiqueta debe cerrarse
// 2. Los componentes deben devolver
//un solo elemento Padre
// 3. Apoyarse de los Fragmenst cuando necesito devolver 2
//elementos
// 4. for => HtmlFor
