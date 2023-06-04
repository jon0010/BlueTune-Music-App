import React, { useState } from "react";
import noHayPistas from "../../assets/404.jpg";
import styles from "./Bluetune.module.css";
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
  ];
  const pistasPerPage = 4;
  const lastIndex = page * pistasPerPage;
  const firstIndex = lastIndex - pistasPerPage;
  const pagePistas = pistasAux.slice(firstIndex, lastIndex);
  const pagesNumber = Math.ceil(pistasAux.length / 4);
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
    <div>
      <div className={styles.filters}>
        <nav className={styles.lateral}>
          <label htmlFor="search">
            Buscar Canción:
            <input
              id="search"
              type="search"
              placeholder="buscar cancion..."
              onChange={(e) => handleOnSearch(e)}
              className={styles.bars}
            />
          </label>
        </nav>

        <div className={styles.number}>
          {pistasAux.length > 0 && (
            <div className={styles.paging}>
              {pages.length > 1 && (
                <button
                  id="-"
                  onClick={(e) => handlePageChange(null, e.target.id)}
                  className={styles.font}
                >
                  ANTERIOR
                </button>
              )}
              {pages.map((newPage) => (
                <button
                  key={newPage}
                  onClick={() => handlePageChange(newPage)}
                  className={styles.font}
                >
                  {newPage}
                </button>
              ))}
              {pages.length > 1 && (
                <button
                  id="+"
                  onClick={(e) => handlePageChange(null, e.target.id)}
                  className={styles.font}
                >
                  SIGUIENTE
                </button>
              )}
            </div>
          )}
        </div>
        {pagePistas && (
          <div>
            <div className={styles.pageNumberTop}>Página: {page}</div>
            <div>
              <div className="col-4">
                <TarjetaPista pistas={pistasAux} />
                <MyBluetoothComponent />
              </div>
            </div>
          </div>
        )}
        {pagePistas.length === 0 && (
          <div className={styles.all}>
            <div className={styles.loader}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
              <div className={styles.bar4}></div>
              <div className={styles.bar5}></div>
              <div className={styles.bar6}></div>
              <div className={styles.bar7}></div>
              <div className={styles.bar8}></div>
              <div className={styles.bar9}></div>
              <div className={styles.bar10}></div>
              <div className={styles.bar11}></div>
              <div className={styles.bar12}></div>
            </div>
          </div>
        )}
        {pagePistas.length > 0 && pagePistas.length === 0 && (
          <div className={styles.all}>
            <div className={styles.btnImgContainer}>
              <img
                className={styles.gameNotFound}
                src={noHayPistas}
                alt="songsNotFound"
              />

              <button
                className={styles.btnNotFound}
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
