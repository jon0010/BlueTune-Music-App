import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="contenedor">
      <div className="col-5 mx-auto">
        <h1 className="titulo">BLUETUNE</h1>
      </div>
      <div className="col-5 mx-auto">
        <h2 className="subtitulo">Sincroniza tu Música</h2>
      </div>
      <div className="textoparrafo mx-auto">
        <p>
          Nuestro sitio web ha sido diseñado pensando en tu comodidad y
          facilidad de uso. Simplemente enciende la función Bluetooth de tu
          celular, accede a BlueTune y deja que la magia comience. Explora una
          amplia selección de géneros musicales, desde éxitos contemporáneos
          hasta clásicos atemporales, y descubre nuevas canciones que se adapten
          a tu día a día.
          <hr />
        </p>
        <p>
          Ya sea que estés en casa, en el trabajo o de viaje, BlueTune te ofrece
          la posibilidad de llevar contigo tu propia banda sonora. Olvídate de
          depender de conexiones complicadas o de tener que cargar con
          reproductores adicionales. Nuestro sitio web te brinda la libertad de
          disfrutar de la música que amas, directamente desde tu celular, sin
          complicaciones.
          <hr />
        </p>
        <p>
          Así que no esperes más y únete a la revolución musical. Descubre un
          nuevo mundo de posibilidades donde la música y la conectividad se unen
          de manera perfecta. Conéctate a BlueTune y deja que la música fluya a
          través de ti."
        </p>
      </div>
    </div>
  );
};

export default Home;
