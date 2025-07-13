import { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

function ProudctCard({ proizvod, viewMode }) {
  const [brProizvoda, setBrProizvoda] = useState(0);
  const cardClass = `${styles.card} ${
    viewMode === "list" ? styles.listView : ""
  }`;

  function handlePlusClick() {
    setBrProizvoda((prevBr) => prevBr + 1);
  }

  function handleMinusClick() {
    setBrProizvoda((prevBr) => (prevBr > 0 ? prevBr - 1 : 0));
  }

  return (
    <div className={cardClass}>
      <Link to={`/product/${proizvod.id}`}>
        <img src={proizvod.images[0]} alt="Slika proizvoda" />
      </Link>
      <div className={styles.cardContent}>
        <h2>{proizvod.name}</h2>
        <p>{proizvod.shortDescription}</p>
        <h3>{proizvod.price}</h3>
      </div>
      <div className="buttons">
        <AddToCart
          brProizvoda={brProizvoda}
          minus={handleMinusClick}
          plus={handlePlusClick}
        />
      </div>
    </div>
  );
}

export default ProudctCard;
