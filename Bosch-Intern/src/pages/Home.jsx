import { useEffect, useState } from "react";
import ProudctCard from "../components/ProudctCard";
import styles from "./Home.module.css";
import { useProducts } from "../context/ProductContext";

function Home() {
  const products = useProducts();
  const [list, setList] = useState(false);
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");

  function handleView() {
    setList((prev) => !prev);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(search);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(debounced.toLowerCase())
  );

  if (products.length === 0) return <p>Nema proizvoda.</p>;

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pretraži proizvode..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button onClick={() => setSearch("")}>Obriši pretragu</button>
        )}
        <p>Pronađeno: {filteredProducts.length} proizvoda</p>
        <button onClick={handleView}>
          {list ? "Mrezni prikaz" : "Prikaz liste"}
        </button>
      </div>
      <div className={list ? styles.list : styles.grid}>
        {filteredProducts.map((proizvod) => (
          <div
            key={proizvod.id}
            style={
              list
                ? { width: "100%" }
                : {
                    flex: "1 1 250px",
                    maxWidth: "250px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }
            }
          >
            <ProudctCard
              key={proizvod.id}
              proizvod={proizvod}
              viewMode={list ? "list" : "grid"}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
