import { useState } from "react";
import { useEffect } from "react";
import ProudctCard from "../components/ProudctCard";
import productsData from "../assets/products.json";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  if (products.length === 0) return <p>Nema proizvoda.</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {products.map((proizvod) => (
        <ProudctCard key={proizvod.id} proizvod={proizvod} />
      ))}
    </div>
  );
}

export default Home;
