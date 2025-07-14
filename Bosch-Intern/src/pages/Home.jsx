import { useEffect, useState } from "react";
import ProudctCard from "../components/ProudctCard";
import styles from "./Home.module.css";
import { useProducts } from "../context/ProductContext";

function Home() {
  const products = useProducts();
  const [list, setList] = useState(false);
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [sort, setSort] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

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

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "priceASC":
        return a.price - b.price;
      case "priceDSC":
        return b.price - a.price;
      case "nameAZ":
        return a.name.localeCompare(b.name);
      case "nameZA":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
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

      <div>
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="">Sortiraj</option>
          <option value="priceASC">Cena (rastuce)</option>
          <option value="priceDSC">Cena (opadajuce)</option>
          <option value="nameAZ">Naziv (A-Z)</option>
          <option value="nameZA">Naziv (Z-A)</option>
        </select>

        <select
          onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          value={itemsPerPage}
        >
          <option value={5}>5 po strani</option>
          <option value={10}>10 po strani</option>
          <option value={15}>15 po strani</option>
          <option value={20}>20 po strani</option>
        </select>
      </div>

      <div className={list ? styles.list : styles.grid}>
        {paginatedProducts.map((proizvod) => (
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
      <div style={{ marginTop: "20px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prethodna
        </button>
        <span style={{ margin: "0 10px" }}>Strana {currentPage}</span>
        <button
          disabled={currentPage * itemsPerPage >= sortedProducts.length}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Sledeća
        </button>
      </div>
    </>
  );
}

export default Home;
