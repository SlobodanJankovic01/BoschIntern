import AddToCart from "../components/AddToCart";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const products = useProducts();
  const [brProizvoda, setBrProizvoda] = useState(0);

  const proizvod = products.find((p) => String(p.id) === id);

  if (!proizvod) return <p>Proizvod nije pronađen.</p>;

  function handlePlusClick() {
    setBrProizvoda((prevBr) => prevBr + 1);
  }

  function handleMinusClick() {
    setBrProizvoda((prevBr) => (prevBr > 0 ? prevBr - 1 : 0));
  }
  return (
    <div className={styles.productDetail}>
      <div className={styles.leftSide}>
        <img src={proizvod.images[1]} alt="Slika proizvoda" />
        <h3>Opis</h3>
        <p>{proizvod.fullDescription}</p>
        <h3>Tehnicke specifikacije</h3>
        <ul>
          {Object.entries(proizvod.technicalSpecifications).map(
            ([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            )
          )}
        </ul>
      </div>
      <div className={styles.rightSide}>
        <h1>{proizvod.name}</h1>
        <h2>{proizvod.price}</h2>
        <div className={styles.buttons}>
          <AddToCart
            brProizvoda={brProizvoda}
            minus={handleMinusClick}
            plus={handlePlusClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
