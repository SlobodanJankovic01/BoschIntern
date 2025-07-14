import AddToCart from "../components/AddToCart";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";
import styles from "./ProductDetail.module.css";
import BackButton from "../components/BackButton";
import ErrorComponent from "../components/ErrorComponent";

function ProductDetail() {
  const { id } = useParams();
  const products = useProducts();
  const [brProizvoda, setBrProizvoda] = useState(0);

  const proizvod = products.find((p) => String(p.id) === id);

  if (!proizvod) return <ErrorComponent />;

  function handlePlusClick() {
    setBrProizvoda((prevBr) => prevBr + 1);
  }

  function handleMinusClick() {
    setBrProizvoda((prevBr) => (prevBr > 0 ? prevBr - 1 : 0));
  }
  return (
    <div className={styles.productDetail}>
      <BackButton />
      <div className={styles.leftSide}>
        {console.log("Putanja slike:", proizvod.images[1])}
        <img src={`/${proizvod.images[0]}`} alt={proizvod.name} />
        <h3>Opis</h3>
        <p>{proizvod.fullDescription}</p>
        <h3>Tehnicke specifikacije</h3>
        <table className={styles.specTable}>
          <thead>
            <tr>
              <th>Karakteristika</th>
              <th>Vrednost</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(proizvod.technicalSpecifications).map(
              ([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.rightSide}>
        <h1>{proizvod.name}</h1>
        <h2>{proizvod.price}</h2>
        <div className={styles.buttons}>
          <AddToCart
            brProizvoda={brProizvoda}
            minus={handleMinusClick}
            plus={handlePlusClick}
            proizvod={proizvod}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
