import { useState } from "react";
import ProudctCard from "../components/ProudctCard";
import styles from "./Home.module.css";
import { useProducts } from "../context/ProductContext";

function Home() {
  const products = useProducts();
  const [list, setList] = useState(false);

  function handleView() {
    setList((prev) => !prev);
  }

  if (products.length === 0) return <p>Nema proizvoda.</p>;

  return (
    <>
      <button onClick={handleView}>
        {list ? "Mrezni prikaz" : "Prikaz liste"}
      </button>
      <div className={list ? styles.list : styles.grid}>
        {products.map((proizvod) => (
          <div style={{ flex: "1 1 250px", maxWidth: "250px" }}>
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
