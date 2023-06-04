import React, { useState } from "react";
import noHayPistas from "../../assets/404.jpg";
import "./Bluetune.css";
import MyBluetoothComponent from "../../components/StartBluetooth";
import TarjetaPista from "../../components/tarjetaPista/TarjetaPista";

const Bluetune = () => {
  const [orderName, setOrderName] = useState("");
  const [orderRating, setOrderRating] = useState(""); // Agregado el estado orderRating
  const [page, setPage] = useState(1);
  const pistasAux = [
    { nombre: "La Incondicional", autor: "Luis Miguel" },
    { nombre: "Fuiste Tú", autor: "Arjona" },
    { nombre: "La Cumbia del Marcianito", autor: "El Pepo" },
    { nombre: "La Ley y la Trampa", autor: "El Chaqueño Palavecino" },
    { nombre: "Girls Just Want to Have Fun", autor: "Cindy Lauper" },
    { nombre: "Bohemian Rhapsody", autor: "Queen" },
    { nombre: "Hotel California", autor: "Eagles" },
    { nombre: "Imagine", autor: "John Lennon" },
    { nombre: "Shape of You", autor: "Ed Sheeran" },
    { nombre: "Despacito", autor: "Luis Fonsi" },
    { nombre: "Billie Jean", autor: "Michael Jackson" },
    { nombre: "Wonderwall", autor: "Oasis" },
    { nombre: "Don't Stop Believin'", autor: "Journey" },
    { nombre: "Sweet Child o' Mine", autor: "Guns N' Roses" },
    { nombre: "Hey Jude", autor: "The Beatles" },
    { nombre: "Livin' on a Prayer", autor: "Bon Jovi" },
    { nombre: "Smells Like Teen Spirit", autor: "Nirvana" },
    { nombre: "Rolling in the Deep", autor: "Adele" },
    { nombre: "Highway to Hell", autor: "AC/DC" },
    { nombre: "Thriller", autor: "Michael Jackson" },
    { nombre: "Stairway to Heaven", autor: "Led Zeppelin" },
    { nombre: "Yesterday", autor: "The Beatles" },
    { nombre: "Like a Rolling Stone", autor: "Bob Dylan" },
    { nombre: "Smells Like Teen Spirit", autor: "Nirvana" },
    { nombre: "Hotel California", autor: "Eagles" },
    { nombre: "Imagine", autor: "John Lennon" },
    { nombre: "Sweet Child o' Mine", autor: "Guns N' Roses" },
    { nombre: "Boogie Wonderland", autor: "Earth, Wind & Fire" },
    { nombre: "Wonderwall", autor: "Oasis" },
    { nombre: "Livin' on a Prayer", autor: "Bon Jovi" },
    { nombre: "Hey Jude", autor: "The Beatles" },
    { nombre: "Thriller", autor: "Michael Jackson" },
    { nombre: "Don't Stop Believin'", autor: "Journey" },
    { nombre: "Nothing Else Matters", autor: "Metallica" },
    { nombre: "Purple Rain", autor: "Prince" },
    { nombre: "Sound of Silence", autor: "Simon & Garfunkel" },
    { nombre: "Hallelujah", autor: "Leonard Cohen" },
    { nombre: "Angie", autor: "The Rolling Stones" },
    { nombre: "All You Need Is Love", autor: "The Beatles" },
    { nombre: "Another Brick in the Wall", autor: "Pink Floyd" },
    { nombre: "Sweet Home Alabama", autor: "Lynyrd Skynyrd" },
    { nombre: "November Rain", autor: "Guns N' Roses" },
    { nombre: "Boogie Wonderland", autor: "Earth, Wind & Fire" },
    { nombre: "Livin' La Vida Loca", autor: "Ricky Martin" },
    { nombre: "Smooth", autor: "Santana ft. Rob Thomas" },
    { nombre: "Like a Prayer", autor: "Madonna" },
    { nombre: "I Will Always Love You", autor: "Whitney Houston" },
    { nombre: "Wannabe", autor: "Spice Girls" },
    { nombre: "Killing Me Softly with His Song", autor: "Roberta Flack" },
    { nombre: "I Want to Hold Your Hand", autor: "The Beatles" },
    { nombre: "Sweet Child o' Mine", autor: "Guns N' Roses" },
    { nombre: "Smooth Criminal", autor: "Michael Jackson" },
    { nombre: "Black Dog", autor: "Led Zeppelin" },
    { nombre: "Under the Bridge", autor: "Red Hot Chili Peppers" },
    { nombre: "Hallelujah", autor: "Jeff Buckley" },
    { nombre: "Somebody That I Used to Know", autor: "Gotye ft. Kimbra" },
    { nombre: "Creep", autor: "Radiohead" },
  ];
  const pistasPerPage = 12;
  const lastIndex = page * pistasPerPage;
  const firstIndex = lastIndex - pistasPerPage;
  const pagePistas = pistasAux.slice(firstIndex, lastIndex);
  const pagesNumber = Math.ceil(pistasAux.length / pistasPerPage);
  const pages = [];
  for (let i = 1; i <= pagesNumber; i++) {
    pages.push([i]);
  }

  const handlePageChange = (newPage, paging) => {
    if (newPage) {
      setPage(newPage[0]);
    } else if (page !== pagesNumber && paging === "+") {
      setPage(page + 1);
    } else if (page !== 1 && paging === "-") {
      setPage(page - 1);
    }
  };

  const handleOrderName = (e) => {
    setOrderName(e.target.id);
  };

  const handleOrderRating = (e) => {
    setOrderRating(e.target.id);
  };

  const handleOnSearch = (e) => {
    dispatch(findVideogame(e.target.value));
    setPage(1);
  };
  //-----------------------------------------------------------------
  return (
    <div className="containers">
      <div>
        <nav className="lateral">
          <label htmlFor="search">
            Buscar Canción:
            <input
              id="search"
              type="search"
              placeholder="buscar cancion..."
              onChange={(e) => handleOnSearch(e)}
              className="bars"
            />
          </label>
          <div className="mt-3 animated-button">
            <MyBluetoothComponent />
          </div>
        </nav>

        <div className="number">
          {pistasAux.length > 0 && (
            <div className="paging">
              {pages.length > 1 && (
                <button
                  id="-"
                  onClick={(e) => handlePageChange(null, e.target.id)}
                  className="font"
                >
                  ANTERIOR
                </button>
              )}
              {pages.map((newPage) => (
                <button
                  key={newPage}
                  onClick={() => handlePageChange(newPage)}
                  className="font"
                >
                  {newPage}
                </button>
              ))}
              {pages.length > 1 && (
                <button
                  id="+"
                  onClick={(e) => handlePageChange(null, e.target.id)}
                  className="font"
                >
                  SIGUIENTE
                </button>
              )}
            </div>
          )}
        </div>
        {pagePistas && (
          <div>
            <div className="pageNumberTop">Página: {page}</div>
            <div>
              <div className="canciones">
                <TarjetaPista pistas={pagePistas} />
              </div>
            </div>
          </div>
        )}
        {pagePistas.length === 0 && (
          <div className="all">
            <div className="loader">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
              <div className="bar4"></div>
              <div className="bar5"></div>
              <div className="bar6"></div>
              <div className="bar7"></div>
              <div className="bar8"></div>
              <div className="bar9"></div>
              <div className="bar1"></div>
              <div className="bar1"></div>
              <div className="bar1"></div>
            </div>
          </div>
        )}
        {pagePistas.length > 0 && pagePistas.length === 0 && (
          <div className="all">
            <div className="btnImgContainer">
              <img
                className="gameNotFound"
                src={noHayPistas}
                alt="songsNotFound"
              />

              <button
                className="btnNotFound"
                onClick={() => window.location.reload()}
              >
                {" "}
                YES{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bluetune;
