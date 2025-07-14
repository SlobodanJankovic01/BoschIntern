import { useEffect, useState } from "react";
import ProudctCard from "../components/ProudctCard";
import styles from "./Home.module.css";
import { useProducts } from "../context/ProductContext";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";

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
      <HomeHeader
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        handleView={handleView}
        list={list}
        filteredCount={filteredProducts.length}
      />

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
      <HomeFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={sortedProducts.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
}

export default Home;
